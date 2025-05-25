import React, { useState } from 'react'
import AddFood from './pages/AddFood/AddFood'
import ListFood from './pages/ListFood/ListFood'
import Orders from './pages/Orders/Orders'
import { Route, Routes } from 'react-router-dom'
import SideBar from './components/Sidebar/Sidebar'
import Menubar from './components/Menubar/Menubar'
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
              <Route path='/add' element={<AddFood />} />
              <Route path='/list' element={<ListFood />} />
              <Route path='/purchases' element={<Orders />} />
              <Route path='/' element={<Orders />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
