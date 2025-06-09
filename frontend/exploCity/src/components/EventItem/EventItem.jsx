import React, { useContext } from 'react';
import './EventItem.css';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useAuth } from '../../context/AuthContext';

const EventItem = ({ name, description, id, imageUrl, price }) => {
    const { addToCart, removeFromCart, quantities } = useContext(StoreContext);
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleCardClick = (e) => {
        // Don't navigate if clicking on the add button
        if (!e.target.closest('.addBtns') && !e.target.closest('.btn-primary')) {
            navigate(`/sights/${id}`);
        }
    };

    const handleAddToCart = async (e) => {
        e.stopPropagation();
        if (!user) {
            localStorage.setItem('redirectAfterLogin', `/sights/${id}`);
            navigate('/login');
            return;
        }
        await addToCart(id);
    };

    const handleRemoveFromCart = async (e) => {
        e.stopPropagation();
        await removeFromCart(id);
    };

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 clickable-card" onClick={handleCardClick}>
                <img
                    src={imageUrl || "https://via.placeholder.com/320x180"}
                    className="card-img-top"
                    alt={name || "Event"}
                    style={{ height: '180px', objectFit: 'cover' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{name || "Event Title"}</h5>
                    <p className="card-text">{description || "No description available"}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="h5 mb-0">zł{price + ".00" || "0.00"}</span>
                        <div className="rating">
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-half text-warning"></i>
                            <small className="text-muted ms-1">(4.5)</small>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light card-actions">
                    <button className="btn btn-outline-primary btn-sm" onClick={handleCardClick}>View Event</button>
                    {user && quantities[id] > 0 ? (
                        <div className="d-flex align-items-center gap-2 addBtns">
                            <button className="btn btn-danger btn-sm" onClick={handleRemoveFromCart}>
                                <i className="bi bi-dash-circle"></i>
                            </button>
                            <span className="fw-bold">{quantities[id]}</span>
                            <button className="btn btn-success btn-sm" onClick={handleAddToCart}>
                                <i className="bi bi-plus-circle"></i>
                            </button>
                        </div>
                    ) : (
                        <button className="btn btn-primary btn-sm" onClick={handleAddToCart}>
                            <i className="bi bi-plus-circle me-1"></i>
                            {user ? 'Add' : 'Login to Add'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventItem;
