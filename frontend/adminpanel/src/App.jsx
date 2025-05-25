import React, { useState } from 'react';
import AddEvent from './pages/AddEvent/AddEvent';
import ListEvent from './pages/ListEvent/ListEvent';
import Purchases from './pages/Purchases/Purchases';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/Sidebar/Sidebar';
import Menubar from './components/Menubar/Menubar';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  }
  return (
    <div>
      <div className="d-flex" id="wrapper">

        <SideBar sidebarVisible={sidebarVisible} />

        <div id="page-content-wrapper">

          <Menubar toggleSidebar={toggleSidebar} />
          <ToastContainer />

          <div className="container-fluid">
            <Routes>
              <Route path='/add' element={<AddEvent />} />
              <Route path='/list' element={<ListEvent />} />
              <Route path='/purchases' element={<Purchases />} />
              <Route path='/' element={<Purchases />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
