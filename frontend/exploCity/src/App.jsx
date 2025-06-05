import React from 'react'
import Menubar from './components/MenuBar/Menubar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ContactUs from './pages/Contact/ContactUs';
import ExploreEvent from './pages/ExploreEvent/ExploreEvent';
import EventDetails from './pages/EventDetails/EventDetails';
import Cart from './pages/Cart/Cart';
import BookTicket from './pages/BookTicket/BookTicket';
import Login from './components/Login/Login';
import Register from './components/Register/Register';



const App = () => {
  return (
    <div>
      <Menubar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/explore' element={<ExploreEvent />} />
        <Route path='/sights/:id' element={<EventDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<BookTicket />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App;
