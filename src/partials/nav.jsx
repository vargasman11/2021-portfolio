import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import logoImg from '../assets/images/logo.png';

const Nav = () => {
return (
<nav id="nav" className="flex items-center justify-between py-5">
    <img src={logoImg} alt="Jerry Vargas Logo" className="h-24 p-4 bg-black" />
    <div className="flex xs:hidden sm:hidden md:block">
    <BrowserRouter>
        <a className="nav-btn" href="#">Lorem</a>
        <a className="nav-btn" href="#">Lorem</a>
        <a className="nav-btn" href="#">Lorem</a>
        <a className="nav-btn" href="#">Lorem</a>
        <a className="nav-btn" href="#">Lorem</a>
    </BrowserRouter>
    </div>    
    <button className="xs:block sm:block md:hidden">Juice</button>
</nav>
)
}

export default Nav