import React, { useRef } from 'react';
import './ExploreStore.css';
import { categories } from '../../assets/asserts';
import { Link } from 'react-router-dom';

const ExploreStore = ({ category, setCategory }) => {
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

    const handleCategoryClick = (selectedCategory) => {
        setCategory(prev => prev === selectedCategory ? 'All' : selectedCategory);
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
                {categories.map((item, index) => {
                    const isActive = item.category === category;
                    return (
                        <div
                            key={index}
                            className={`explore-menu-list-item text-decoration-none ${isActive ? 'active' : ''}`}
                            onClick={() => handleCategoryClick(item.category)}
                        >
                            <img
                                src={item.icon}
                                alt={item.category}
                                className={isActive ? 'active' : ''}
                            />
                            <h3>{item.category}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ExploreStore;
