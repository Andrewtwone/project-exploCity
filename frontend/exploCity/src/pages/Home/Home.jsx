import React, { useState } from 'react'
import Header from '../../components/Header/Header';
import ExploreStore from '../../components/ExploreStore/ExploreStore';
import EventDisplay from '../../components/EventDisplay/EventDisplay';

const Home = () => {

    const [category, setCategory] = useState('All')
    return (
        <main className='container'>
            <Header />
            <ExploreStore category={category} setCategory={setCategory} />
            <EventDisplay category={category} searchText={''} />
        </main>
    )
}

export default Home;
