import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className='Navbar'>
                    <div><NavLink to={'/crud-methods'} id='link1'>CRUD Methods</NavLink></div>
                    <div><NavLink to={'/create'} id='link1'>Create</NavLink></div>
                    <div><NavLink to={'/read'} id='link1'>Read</NavLink></div>
                    <div><NavLink to={'/update'} id='link1'>Update</NavLink></div>
                    <div><NavLink to={'/delete'} id='link1'>Delete</NavLink></div>
            </div>
        </div>
    )
}

export default Navbar
