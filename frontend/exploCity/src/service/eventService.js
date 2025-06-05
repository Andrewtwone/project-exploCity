import axios from "axios";

const API_URL = "http://localhost:8080/api/sights";

export const fetchEventList = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data
    } catch (error) {
        console.log('Error fetching the food list', error);
        throw error;
    }
}

export const fetchEventDetails = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error fetching food details', error);
        throw error;
    }
};