import React from 'react'
import Menubar from './components/MenuBar/Menubar';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import ContactUs from './pages/Contact/ContactUs';
import ExploreEvent from './pages/ExploreEvent/ExploreEvent';
import EventDetails from './pages/EventDetails/EventDetails';
import Cart from './pages/Cart/Cart';
import BookTicket from './pages/BookTicket/BookTicket';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import { useAuth } from './context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

const App = () => {
  const location = useLocation();
  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  return (
    <div>
      {!isAuthPage && <Menubar />}
      <Routes>
        {/* Public Routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<ExploreEvent />} />
        <Route path='/sights/:id' element={<EventDetails />} />

        {/* Protected Routes */}
        <Route path='/profile' element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path='/contact' element={
          <ProtectedRoute>
            <ContactUs />
          </ProtectedRoute>
        } />
        <Route path='/cart' element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        } />
        <Route path='/checkout' element={
          <ProtectedRoute>
            <BookTicket />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  )
}

export default App;
