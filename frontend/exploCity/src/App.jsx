import React from 'react'
import Menubar from './components/MenuBar/Menubar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ContactUs from './pages/Contact/ContactUs';
import ExploreEvent from './pages/ExploreEvent/ExploreEvent';
import EventDetails from './pages/EventDetails/EventDetails';


const App = () => {
  return (
    <div>
      <Menubar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/explore' element={<ExploreEvent />} />
        <Route path='/sights/:id' element={<EventDetails />} />
      </Routes>
    </div>
  )
}

export default App;
