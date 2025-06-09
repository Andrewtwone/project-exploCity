import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './Cart.css';
import { Link, useNavigate } from 'react-router-dom';
import { calculateCartTotals } from '../../util/cartUtils';
import api from '../../service/api';

const Cart = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const { quantities, addToCart, removeFromCart, deleteFromCart } = useContext(StoreContext);

    useEffect(() => {
        loadCartItems();
    }, [quantities]);

    const loadCartItems = async () => {
        try {
            // Only load items that have quantity > 0
            const sightIds = Object.entries(quantities)
                .filter(([_, qty]) => qty > 0)
                .map(([id]) => id);

            if (sightIds.length === 0) {
                setCartItems([]);
                return;
            }

            const promises = sightIds.map(id => api.get(`/sights/${id}`));
            const responses = await Promise.all(promises);
            const items = responses.map(response => response.data);
            setCartItems(items);
        } catch (error) {
            console.error('Error loading cart items:', error);
        }
    };

    const handleIncrease = (sightId) => {
        addToCart(sightId);
    };

    const handleDecrease = async (sightId) => {
        removeFromCart(sightId);
    };

    const { subtotal, tax, total } = calculateCartTotals(cartItems, quantities);

    return (
        <div className="container py-5">
            <h1 className="mb-5">Your Shopping Cart</h1>
            <div className="row">
                <div className="col-lg-8">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <div className="card mb-4">
                            <div className="card-body">
                                {cartItems.map(sight => (
                                    <div key={sight.id} className="row cart-item">
                                        <div className="col-md-3">
                                            <img src={sight.imageUrl} alt={sight.name} className="img-fluid rounded mb-3" />
                                        </div>
                                        <div className="col-md-5">
                                            <h5 className="card-title">{sight.name}</h5>
                                            <p className="text-muted">Category: {sight.category}</p>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="input-group">
                                                <button className="btn btn-outline-secondary btn-sm" type="button" onClick={() => handleDecrease(sight.id)}>
                                                    -
                                                </button>
                                                <input
                                                    style={{ "maxWidth": "100px" }}
                                                    type="text"
                                                    className="form-control form-control-sm text-center quantity-input"
                                                    value={quantities[sight.id] || 0}
                                                    readOnly
                                                />
                                                <button className="btn btn-outline-secondary btn-sm" type="button" onClick={() => handleIncrease(sight.id)}>
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-md-2 text-end">
                                            <p className="fw-bold">zł{(sight.price * (quantities[sight.id] || 0)).toFixed(2)}</p>
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => deleteFromCart(sight.id)}>
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </div>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="text-start mb-4">
                        <Link to="/" className="btn btn-outline-primary">
                            <i className="bi bi-arrow-left me-2"></i>Continue Shopping
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card cart-summary">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Order Summary</h5>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Subtotal</span>
                                <span>zł{subtotal === 0 ? '0.00' : subtotal.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Tax</span>
                                <span>zł{tax.toFixed(2)}</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between mb-4">
                                <strong>Total</strong>
                                <strong>zł{total === 0 ? '0.00' : total.toFixed(2)}</strong>
                            </div>
                            <button className="btn btn-primary w-100" disabled={cartItems.length === 0} onClick={() => navigate('/checkout')}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
