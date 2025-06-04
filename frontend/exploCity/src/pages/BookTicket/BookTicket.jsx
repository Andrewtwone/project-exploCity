import React from 'react';
import './BookTicket.css';
import { assets } from '../../assets/asserts';


const BookTicket = () => {
    return (
        <div className='container mt-4'>

            <main>

                <div className="py-5 text-center">
                    <img
                        className="d-block mx-auto mb-4"
                        src={assets.logo}
                        alt="logo"
                        width="250"
                    />
                </div>

                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">3</span>
                        </h4>
                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">Product name</h6>
                                    <small className="text-body-secondary">Brief description</small>
                                </div>
                                <span className="text-body-secondary">$12</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div> <h6 className="my-0">Second product</h6>
                                    <small className="text-body-secondary">Brief description</small>
                                </div>
                                <span className="text-body-secondary">$8</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">Third item</h6>
                                    <small className="text-body-secondary">Brief description</small>
                                </div>
                                <span className="text-body-secondary">$5</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (PLN)</span>
                                <strong>zł20</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" noValidate="">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" required="" />

                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" required="" />

                                </div>
                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Email"
                                            required=""
                                        />
                                    </div>
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
                                    <select className="form-select" id="country" required="">
                                        <option >Choose...</option>
                                        <option>United States</option>
                                    </select>

                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <select className="form-select" id="state" required="">
                                        <option >Choose...</option>
                                        <option>California</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                </div>
                            </div>
                            <hr className="my-4" />
                            <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default BookTicket;
