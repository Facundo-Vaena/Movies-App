import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import Logo from '../../logoHenry.png'
import Logo from '../../img/9d2c95aa6b46407da9e32ee0a8ea922a.png' //Este es el logo hecho de movies app (no entra muy bien)
import Home from '../../Icons/Home Icon/home .png'
import Fav from '../../Icons/Home Icon/heart .png'
import Clapperboard from '../../Icons/clapperboard.png'


import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                {/* <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" /> */}
                {/* <img className='logo' src={Logo} /> */}
                {/* Acá debería haber un link a la landing */}
                <h1 className='logo'>Movies App</h1>
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to='/'><img src={Clapperboard} className='icon navBarClapperboard'/></NavLink>
                        <NavLink exact to="/" className='navLink' ><img src={Home} className='icon' /></NavLink>
                        <NavLink to="/favs" ><img src={Fav} className='icon heartIcon' /></NavLink>
                        
                    </li>
                </ul>
                {/* <NavLink exact to="/" >Home</NavLink>
                <NavLink to="/favs" >Favoritas</NavLink> */}

            </nav>

        </header>
    )
}