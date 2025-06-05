import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/asserts';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // Add your actual login logic here
        }, 1500);
    };

    return (
        <div className="login-auth-container">
            <div className="login-auth-box">
                <div className="login-auth-header">
                    <img src={assets.logo} alt="ExploCity Logo" className="login-auth-logo" />
                    <h2>Welcome Back</h2>
                    <p>Please sign in to continue</p>
                </div>

                <form onSubmit={handleSubmit} className="login-auth-form">
                    <div className="login-form-group">
                        <div className="login-input-group">
                            <i className="bi bi-envelope"></i>
                            <input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="login-form-group">
                        <div className="login-input-group">
                            <i className="bi bi-lock"></i>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="login-forgot-password">
                            <Link to="/forgot-password">Forgot password?</Link>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={`login-auth-button ${isLoading ? 'loading' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="login-spinner">
                                <div className="bounce1"></div>
                                <div className="bounce2"></div>
                                <div className="bounce3"></div>
                            </div>
                        ) : (
                            'Sign In'
                        )}
                    </button>

                    <div className="login-auth-footer">
                        <p>Don't have an account? <Link to="/register" className="login-auth-link">Sign Up</Link></p>
                    </div>
                </form>

                <div className="login-social-login">
                    <p>Or continue with</p>
                    <div className="login-social-buttons">
                        <button className="login-social-button google">
                            <i className="bi bi-google"></i>
                        </button>
                        <button className="login-social-button facebook">
                            <i className="bi bi-facebook"></i>
                        </button>
                        <button className="login-social-button apple">
                            <i className="bi bi-apple"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
