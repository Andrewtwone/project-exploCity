import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { fetchEventDetails } from '../../service/eventService';
import { toast } from 'react-toastify'
import { StoreContext } from "../../context/StoreContext"
import './EventDetails.css'


const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [error, setError] = useState(null);
    const { increaseQty } = useContext(StoreContext);

    const navigate = useNavigate();

    useEffect(() => {
        const loadEventDetails = async () => {
            try {
                const eventData = await fetchEventDetails(id);
                setEvent(eventData);
            } catch (error) {
                toast.error('Error displaying the event details.')
            }
        }
        loadEventDetails();
    }, [id]);

    if (error) {
        return (
            <div className="container text-center py-5">
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            </div>
        );
    }

    if (!event) {
        return (
            <div className="container text-center py-5">
                <div className="alert alert-info" role="alert">
                    Event not found
                </div>
            </div>
        );
    }

    const addToCart = () => {
        increaseQty(event.id);
        navigate('/cart');
    }

    return (
        <section className="event-details-section py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-start">
                    <div className="col-md-6">
                        <div className="image-container">
                            <img
                                className="card-img-top"
                                src={event.imageUrl || "https://via.placeholder.com/600x700"}
                                alt={event.name}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="category">
                            Category: <span className='badge text-bg-warning'>{event.category}</span>
                        </div>
                        <h1 className="display-5 fw-bolder mb-4">{event.name}</h1>
                        <div className="fs-5 mb-4">
                            <span className="price-tag">zł{event.price}.00</span>
                        </div>
                        <div className="description-container">
                            <p className="lead mb-4">{event.description}</p>
                        </div>
                        <div className="d-flex action-buttons">
                            <button className="btn btn-primary flex-shrink-0" type="button" onClick={addToCart}>
                                <i className="bi bi-cart-fill me-2"></i>
                                Add to cart
                            </button>
                            <button className="btn btn-outline-secondary flex-shrink-0" type="button">
                                <i className="bi bi-heart me-2"></i>
                                Save for later
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventDetails;
