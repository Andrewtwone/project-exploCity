import React, { useRef } from 'react';
import './ExploreStore.css';
import { categories } from '../../assets/asserts';
import { Link } from 'react-router-dom';

const ExploreStore = () => {

    const menuRef = useRef(null);
    const scrollLeft = () => {
        if (menuRef.current) {
            menuRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        };
    };
    const scrollRight = () => {
        if (menuRef.current) {
            menuRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        };
    };
    return (
        <div className="explore-menu position-relative">
            <h1 className="d-flex align-items-center justify-content-between">
                Explore Available Options
                <div className="d-flex">
                    <i className='bi bi-arrow-left-circle scroll-icon' onClick={scrollLeft}></i>
                    <i className='bi bi-arrow-right-circle scroll-icon' onClick={scrollRight}></i>
                </div>
            </h1>
            <p>Explore curated lists of events from top categories</p>
            <div className="d-flex justify-content-between gap-4 overflow-auto explore-menu-list" ref={menuRef}>
                {categories.map((category, index) => {
                    return (
                        <div
                            // to={`/explore?category=${encodeURIComponent(category.category)}`}
                            key={index}
                            className="explore-menu-list-item text-decoration-none"
                        >
                            <img src={category.icon} alt={category.category} />
                            <h3>{category.category}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ExploreStore;
