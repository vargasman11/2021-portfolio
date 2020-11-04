import React from 'react'
import logoImg from '../assets/images/logo.png';

const nav = () => {
    return (
        <nav id="nav" className="flex items-center justify-between py-5">
           <img src={logoImg} alt="Jerry Vargas Logo" className="h-24 p-4 bg-black"/>
           <div className="flex">
               <a className="nav-btn" href="#">Lorem</a>
               <a className="nav-btn" href="#">Lorem</a>
               <a className="nav-btn" href="#">Lorem</a>
               <a className="nav-btn" href="#">Lorem</a>
               <a className="nav-btn" href="#">Lorem</a>
           </div>
        </nav>
    )
}

export default nav
