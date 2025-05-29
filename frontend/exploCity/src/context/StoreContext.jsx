import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { fetchEventList } from '../service/eventService';

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {

    const [foodList, setFoodList] = useState([]);



    const contextValue = {
        foodList
    }

    useEffect(() => {
        async function loadData() {
            const data = await fetchEventList();
            setFoodList(data);
        };
        loadData();
    }, []);

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}