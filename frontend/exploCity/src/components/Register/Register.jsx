import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/asserts';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // Add your actual registration logic here
        }, 1500);
    };

    return (
        <div className="register-auth-container">
            <div className="register-auth-box">
                <div className="register-auth-header">
                    <img src={assets.logo} alt="ExploCity Logo" className="register-auth-logo" />
                    <h2>Create Account</h2>
                    <p>Join our community today</p>
                </div>

                <form onSubmit={handleSubmit} className="register-auth-form">
                    <div className="register-form-row">
                        <div className="register-form-group">
                            <div className="register-input-group">
                                <i className="bi bi-person"></i>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="register-form-group">
                            <div className="register-input-group">
                                <i className="bi bi-person"></i>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="register-form-group">
                        <div className="register-input-group">
                            <i className="bi bi-envelope"></i>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="register-form-group">
                        <div className="register-input-group">
                            <i className="bi bi-lock"></i>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="register-form-group">
                        <div className="register-input-group">
                            <i className="bi bi-lock-fill"></i>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={`register-auth-button ${isLoading ? 'loading' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="register-spinner">
                                <div className="bounce1"></div>
                                <div className="bounce2"></div>
                                <div className="bounce3"></div>
                            </div>
                        ) : (
                            'Sign Up'
                        )}
                    </button>

                    <div className="register-auth-footer">
                        <p>Already have an account? <Link to="/login" className="register-auth-link">Sign In</Link></p>
                    </div>
                </form>

                <div className="register-social-login">
                    <p>Or sign up with</p>
                    <div className="register-social-buttons">
                        <button className="register-social-button google">
                            <i className="bi bi-google"></i>
                        </button>
                        <button className="register-social-button facebook">
                            <i className="bi bi-facebook"></i>
                        </button>
                        <button className="register-social-button apple">
                            <i className="bi bi-apple"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
