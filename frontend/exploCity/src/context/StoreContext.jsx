import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { fetchEventList } from '../service/eventService';

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const [eventList, setEventList] = useState([]);
    const [quantities, setQuantities] = useState({
    });

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

    const contextValue = {
        eventList,
        increaseQty,
        decreaseQty,
        quantities,
        removeFromCart
    }

    useEffect(() => {
        async function loadData() {
            const data = await fetchEventList();
            setEventList(data);
        };
        loadData();
    }, []);

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}