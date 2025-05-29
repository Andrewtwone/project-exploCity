import React from 'react';
import './EventItem.css';
import { Link, useNavigate } from 'react-router-dom';

const EventItem = ({ name, description, id, imageUrl, price }) => {
    const navigate = useNavigate();

    const handleCardClick = (e) => {
        // Don't navigate if clicking on the action buttons
        if (!e.target.closest('.card-actions')) {
            navigate(`/sights/${id}`);
        }
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
                    <button className="btn btn-primary btn-sm">View Event</button>
                    <button className="btn btn-outline-secondary btn-sm">
                        <i className="bi bi-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EventItem;
