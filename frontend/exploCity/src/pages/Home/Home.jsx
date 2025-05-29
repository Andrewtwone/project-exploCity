import React from 'react'
import Header from '../../components/Header/Header';
import ExploreStore from '../../components/ExploreStore/ExploreStore';
import EventDisplay from '../../components/EventDisplay/EventDisplay';

const Home = () => {
    return (
        <main className='container'>
            <Header />
            <ExploreStore />
            <EventDisplay />
        </main>
    )
}

export default Home;
