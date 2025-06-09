import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
});

// List of endpoints that don't require authentication
const publicEndpoints = ['/sights', '/login', '/register'];

api.interceptors.request.use(
    (config) => {
        const isPublicEndpoint = publicEndpoints.some(endpoint =>
            config.url === endpoint || config.url.startsWith(`${endpoint}/`)
        );

        if (!isPublicEndpoint) {
            const token = localStorage.getItem('jwt_token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('jwt_token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api; 