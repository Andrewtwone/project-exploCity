import React, { useState, useEffect } from 'react';
import './Profile.css';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import api from '../../service/api';

const Profile = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await api.get('/users/me');
                setUserDetails(response.data);
                setError(null);
            } catch (err) {
                setError('Failed to load user details. Please try again later.');
                console.error('Error fetching user details:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (loading) {
        return (
            <div className="profile-container">
                <div className="profile-box">
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="profile-container">
                <div className="profile-box">
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="profile-container">
            <div className="profile-box">
                <div className="profile-header">
                    <h2>My Profile</h2>
                </div>
                <div className="profile-content">
                    <div className="profile-info">
                        <div className="profile-avatar">
                            <i className="bi bi-person-circle"></i>
                        </div>
                        <div className="profile-details">
                            <h3>{userDetails?.name || 'User'}</h3>
                            <p>{userDetails?.email || 'No email available'}</p>
                        </div>
                    </div>
                    <div className="profile-actions">
                        <button className="btn btn-danger" onClick={handleLogout}>
                            <i className="bi bi-box-arrow-right me-2"></i>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile; 