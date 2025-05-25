import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets'

const SideBar = ({ sidebarVisible }) => {
    return (
        <div className={`border-end bg-white ${sidebarVisible ? '' : 'd-none'}`} id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light">
                <img src={assets.logo} alt='' height={50} />
            </div>
            <div className="list-group list-group-flush">
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/add">
                    <i className='bi bi-plus-circle me-2' />Add Food</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/list">
                    <i className='bi bi-list-ul me-2' />List Food</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/purchases">
                    <i className='bi bi bi-receipt me-2' />Orders</Link>
            </div>
        </div>
    )
}

export default SideBar;
