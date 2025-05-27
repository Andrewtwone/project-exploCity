import axios from "axios";

const API_URL = 'http://localhost:8080/api/sights'

export const addEvent = async (eventData, image) => {
    const formData = new FormData();
    formData.append('sight', JSON.stringify(eventData));
    formData.append('file', image);

    try {
        await axios.post(API_URL, formData, { headers: { "Content-Type": "multipart/form-data" } })
    } catch (error) {
        console.log('Error', error)
        throw error;
    }
}

export const getEventList = async () => {
    try {
        const response = await axios.get(API_URL)
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log('Error fetching event list', error);
        throw error;
    }
}

export const deleteEvent = async (eventId) => {
    try {
        const response = await axios.delete(API_URL + '/' + eventId);
        return response.status === 204;
    } catch (error) {
        console.log('Error while deleting the event.', error);
        throw error;
    }

}