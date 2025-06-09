import React, { createContext, useState, useEffect } from 'react';
import api from '../service/api';
import { toast } from 'react-toastify';

export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        loadCart();
    }, []);

    const loadCart = async () => {
        try {
            const response = await api.get('/cart');
            const items = response.data.items || {};
            // Filter out items with 0 quantity
            const nonZeroItems = Object.fromEntries(
                Object.entries(items).filter(([_, qty]) => qty > 0)
            );
            setQuantities(nonZeroItems);
        } catch (error) {
            console.error('Error loading cart:', error);
            toast.error('Error loading cart');
        }
    };

    const addToCart = async (sightId) => {
        try {
            const request = { sightid: sightId };
            await api.post('/cart', request);
            await loadCart();
        } catch (error) {
            console.error('Error adding to cart:', error);
            toast.error('Error adding to cart');
        }
    };

    const removeFromCart = async (sightId) => {
        try {
            const request = { sightid: sightId };
            await api.post('/cart/remove', request);
            await loadCart();

            // If item quantity is now 0, remove it from the quantities object
            if (quantities[sightId] === 0) {
                setQuantities(prev => {
                    const newQuantities = { ...prev };
                    delete newQuantities[sightId];
                    return newQuantities;
                });
            }
        } catch (error) {
            console.error('Error removing from cart:', error);
            toast.error('Error removing from cart');
        }
    };

    const deleteFromCart = async (sightId) => {
        try {
            const currentQty = quantities[sightId] || 0;
            for (let i = 0; i < currentQty; i++) {
                const request = { sightid: sightId };
                await api.post('/cart/remove', request);
            }

            setQuantities(prev => {
                const newQuantities = { ...prev };
                delete newQuantities[sightId];
                return newQuantities;
            });

            await loadCart();
        } catch (error) {
            console.error('Error deleting from cart:', error);
            toast.error('Error deleting from cart');
        }
    };

    const clearCart = async () => {
        try {
            await api.delete('/cart');
            setQuantities({});
        } catch (error) {
            console.error('Error clearing cart:', error);
            toast.error('Error clearing cart');
        }
    };

    const getTotalCartQuantity = () => {
        return Object.values(quantities).reduce((total, qty) => total + qty, 0);
    };

    return (
        <StoreContext.Provider value={{
            quantities,
            addToCart,
            removeFromCart,
            deleteFromCart,
            clearCart,
            getTotalCartQuantity
        }}>
            {children}
        </StoreContext.Provider>
    );
};