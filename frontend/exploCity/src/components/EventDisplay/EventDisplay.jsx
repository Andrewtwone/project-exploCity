import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext';
import './EventDisplay.css';
import EventItem from '../EventItem/EventItem';
import api from '../../service/api';

const EventDisplay = ({ category, searchText }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadEvents();
    }, []);

    const loadEvents = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await api.get('/sights');
            setEvents(response.data);
        } catch (error) {
            setError(error.message || 'Failed to load events');
        } finally {
            setLoading(false);
        }
    };

    const filteredEvents = events.filter(event =>
        (category === 'All' || event.category === category) &&
        event.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (loading) {
        return (
            <div className="event-display container py-4">
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="event-display container py-4">
                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">Error Loading Events</h4>
                    <p>{error}</p>
                    <hr />
                    <button className="btn btn-outline-danger" onClick={loadEvents}>
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="event-display container py-4">
            <div className="row g-4">
                {filteredEvents && filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => (
                        <EventItem key={event.id}
                            name={event.name}
                            description={event.description}
                            price={event.price}
                            id={event.id}
                            imageUrl={event.imageUrl} />
                    ))
                ) : (
                    <div className="col-12 text-center mt-4">
                        <div className="no-events">
                            <i className="bi bi-calendar-x display-1 text-muted"></i>
                            <h4 className="mt-3">No events found</h4>
                            <p className="text-muted">Please try different search criteria or check back soon for new events.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventDisplay;
