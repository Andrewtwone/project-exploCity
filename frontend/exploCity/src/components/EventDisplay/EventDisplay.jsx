import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import './EventDisplay.css';
import EventItem from '../EventItem/EventItem';

const EventDisplay = () => {
    const { foodList } = useContext(StoreContext);

    return (
        <div className="event-display container py-4">
            <div className="row g-4">
                {foodList && foodList.length > 0 ? (
                    foodList.map((event, index) => (
                        <EventItem key={index}
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
                            <p className="text-muted">Please try again later or check back soon for new events.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default EventDisplay;
