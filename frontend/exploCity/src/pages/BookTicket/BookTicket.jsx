import React, { useContext, useState } from 'react';
import './BookTicket.css';
import { assets } from '../../assets/asserts';
import { countries } from '../../data/locationData';
import CustomSelect from '../../components/CustomSelect/CustomSelect';
import { StoreContext } from "../../context/StoreContext"
import { calculateCartTotals } from '../../util/cartUtils';

const BookTicket = () => {

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');

    // Get states for selected country
    const getStates = () => {
        const country = countries.find(c => c.name === selectedCountry);
        return country ? country.states : [];
    };

    // Format countries for custom select
    const countryOptions = countries.map(country => ({
        value: country.name,
        label: country.name,
        flag: country.flag
    }));

    // Format states for custom select
    const stateOptions = getStates().map(state => ({
        value: state,
        label: state
    }));


    const { eventList, quantities, setQuantities } = useContext(StoreContext);

    const cartItems = eventList.filter(event => quantities[event.id] > 0);

    //calculation
    const { subtotal, tax, total } = calculateCartTotals(cartItems, quantities)



    return (
        <div className='container mt-4'>
            <main>
                <div className="py-5 text-center">
                    <img
                        className="d-block mx-auto"
                        src={assets.logo}
                        alt="logo"
                        width="250"
                    />
                </div>

                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">{cartItems.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {cartItems.map(item => (
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">{item.name}</h6>
                                        <small className="text-body-secondary">Qty: {quantities[item.id]}</small>
                                    </div>
                                    <span className="text-body-secondary">zł{item.price * quantities[item.id]}</span>
                                </li>
                            ))}

                            <li className="list-group-item d-flex justify-content-between">
                                <div>
                                    <span className="text-body-secondary">Tax (5%)</span>
                                </div>
                                <span>zł{tax.toFixed(2)}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (PLN)</span>
                                <strong>zł{total.toFixed(2)}</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" noValidate="">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="John" required="" />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="Pascal" required="" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="samplemail@example.com"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" id="phone" placeholder="+48990323216" required="" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">Address 2
                                        <span className="text-body-secondary">(Optional)</span>
                                    </label>
                                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <CustomSelect
                                        options={countryOptions}
                                        value={selectedCountry}
                                        onChange={setSelectedCountry}
                                        placeholder="Choose..."
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <CustomSelect
                                        options={stateOptions}
                                        value={selectedState}
                                        onChange={setSelectedState}
                                        placeholder="Choose..."
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="42-200" required="" />
                                </div>
                            </div>
                            <hr className="my-4" />
                            <button className="w-100 btn btn-primary btn-lg" type="submit" disabled={cartItems.length === 0}>Continue to checkout</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default BookTicket;
