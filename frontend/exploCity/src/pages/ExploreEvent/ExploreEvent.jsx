import React, { useState } from 'react'
import EventDisplay from '../../components/EventDisplay/EventDisplay';

const ExploreEvent = () => {
    const [category, setCategory] = useState('All');
    const [searchText, setSearchText] = useState('');
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="input-group mb-3">
                                <select className='form-select mt-2' style={{ "maxWidth": "150px" }} onChange={(e) => setCategory(e.target.value)}>
                                    <option value="All">All</option>
                                    <option value="Sport Events">Sport Events</option>
                                    <option value="Concerts & Music Festivals">Concerts & Music Festivals</option>
                                    <option value="Cinema & Film Festivals">Cinema & Film Festivals</option>
                                    <option value="Exhibitions & Art Shows">Exhibitions & Art Shows</option>
                                    <option value="Theatre & Perfomances">Theatre & Perfomances</option>
                                    <option value="Cultural & Literary">Cultural & Literary Events</option>
                                    <option value="Food & Drink">Food & Drink Events</option>
                                    <option value="Family & Community">Family & Community Events</option>
                                </select>
                                <input type="text" className='form-control mt-2' placeholder='Search an event...'
                                    onChange={(e) => setSearchText(e.target.value)} value={searchText} />
                                <button className='btn btn-primary mt-2' type='submit'>
                                    <i className='bi bi-search'></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <EventDisplay category={category} searchText={searchText} />
        </>
    )
}

export default ExploreEvent;
