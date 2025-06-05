import React, { useState, useRef, useEffect } from 'react';
import './CustomSelect.css';

const CustomSelect = ({ options, value, onChange, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const option = options.find(opt => opt.value === value);
        setSelectedOption(option);
    }, [value, options]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (option) => {
        setSelectedOption(option);
        onChange(option.value);
        setIsOpen(false);
    };

    return (
        <div className="custom-select" ref={dropdownRef}>
            <div
                className={`select-selected ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption ? (
                    <div className="selected-option">
                        <span
                            className="flag-icon"
                            dangerouslySetInnerHTML={{ __html: selectedOption.flag }}
                        />
                        <span>{selectedOption.label}</span>
                    </div>
                ) : (
                    <div className="selected-option">
                        <span>{placeholder}</span>
                    </div>
                )}
                <span className={`arrow ${isOpen ? 'up' : 'down'}`}>▼</span>
            </div>
            {isOpen && (
                <div className="select-items">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className={`select-item ${option.value === selectedOption?.value ? 'selected' : ''}`}
                            onClick={() => handleSelect(option)}
                        >
                            <span
                                className="flag-icon"
                                dangerouslySetInnerHTML={{ __html: option.flag }}
                            />
                            <span>{option.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect; 