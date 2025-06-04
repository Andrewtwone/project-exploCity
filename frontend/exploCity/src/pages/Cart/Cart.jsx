import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './Cart.css';
import { Link, useNavigate } from 'react-router-dom';


const Cart = () => {

    const navigate = useNavigate();

    const { eventList, increaseQty, decreaseQty, quantities, removeFromCart } = useContext(StoreContext);
    //cart items
    const cartItems = eventList.filter(event => quantities[event.id] > 0);

    //calculation
    const subtotal = cartItems.reduce((acc, event) => acc + event.price * quantities[event.id], 0);
    // const shipping = subtotal === 0 ? 0.0 : 10;
    const tax = subtotal * 0.05;
    const total = subtotal + tax;
    return (
        <div className="container py-5">
            <h1 className="mb-5">Your Shopping Cart</h1>
            <div className="row">
                <div className="col-lg-8">
                    {
                        cartItems.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <div className="card mb-4">
                                <div className="card-body">
                                    {cartItems.map(event => (
                                        <div key={event.id} className="row cart-item">
                                            <div className="col-md-3">
                                                <img src={event.imageUrl} alt={event.name} className="img-fluid rounded mb-3" />
                                            </div>
                                            <div className="col-md-5">
                                                <h5 className="card-title">{event.name}</h5>
                                                <p className="text-muted">Category: {event.category}</p>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="input-group">
                                                    <button className="btn btn-outline-secondary btn-sm" type="button" onClick={() => decreaseQty(event.id)}>
                                                        -
                                                    </button>
                                                    <input
                                                        style={{ "maxWidth": "100px" }}
                                                        type="text"
                                                        className="form-control  form-control-sm text-center quantity-input"
                                                        value={quantities[event.id]}
                                                        readOnly
                                                    />
                                                    <button className="btn btn-outline-secondary btn-sm" type="button" onClick={() => increaseQty(event.id)}>
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-md-2 text-end">
                                                <p className="fw-bold">zł{(event.price * quantities[event.id]).toFixed(2)}</p>
                                                <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(event.id)}>
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </div>
                                            <hr />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    }
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
                                <span>zł{subtotal === 0 ? 0.0 : subtotal.toFixed(2)}</span>
                            </div>
                            {/* <div className="d-flex justify-content-between mb-3">
                                <span>Shipping</span>
                                <span>$10.00</span>
                            </div> */}
                            <div className="d-flex justify-content-between mb-3">
                                <span>Tax</span>
                                <span>zł{tax.toFixed(2)}</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between mb-4">
                                <strong>Total</strong>
                                <strong>zł{total === 0 ? 0.0 : total.toFixed(2)}</strong>
                            </div>
                            <button className="btn btn-primary w-100" disabled={cartItems.length === 0} onClick={() => navigate('/checkout')}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
