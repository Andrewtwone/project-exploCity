import api from './api';

const SIGHTS_ENDPOINT = '/sights';

export const fetchEventList = async () => {
    try {
        const response = await api.get(SIGHTS_ENDPOINT);
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};

export const fetchEventDetails = async (id) => {
    try {
        const response = await api.get(`${SIGHTS_ENDPOINT}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching event details:', error);
        throw error;
    }
};