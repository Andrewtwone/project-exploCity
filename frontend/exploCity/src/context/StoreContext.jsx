import { createContext, useEffect, useState } from "react";
import { fetchEventList } from '../service/eventService';

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const [eventList, setEventList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantities, setQuantities] = useState({});

    const increaseQty = (eventId) => {
        setQuantities((prev) => ({ ...prev, [eventId]: (prev[eventId] || 0) + 1 }))
    }

    const decreaseQty = (eventId) => {
        setQuantities((prev) => ({ ...prev, [eventId]: prev[eventId] > 0 ? prev[eventId] - 1 : 0 }));
    }

    const removeFromCart = (eventId) => {
        setQuantities((prevQuantities) => {
            const updatedQuantities = { ...prevQuantities };
            delete updatedQuantities[eventId];
            return updatedQuantities;
        })
    }

    const refreshEvents = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchEventList();
            setEventList(data);
        } catch (error) {
            setError(error.message || 'Failed to load events');
            setEventList([]);
        } finally {
            setLoading(false);
        }
    };

    const contextValue = {
        eventList,
        loading,
        error,
        refreshEvents,
        increaseQty,
        decreaseQty,
        quantities,
        removeFromCart
    }

    useEffect(() => {
        refreshEvents();
    }, []);

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}