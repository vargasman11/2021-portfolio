import React from 'react'
import logoImg from '../assets/images/logo.png';

const nav = () => {
    return (
        <nav id="nav" className="bg-red-600 flex items-center justify-between py-5">
           <img src={logoImg} alt="Jerry Vargas Logo" className="h-16"/>
           <div className="flex">
               <a className="m-3" href="#">Lorem</a>
               <a className="m-3" href="#">Lorem</a>
               <a className="m-3" href="#">Lorem</a>
               <a className="m-3" href="#">Lorem</a>
               <a className="m-3" href="#">Lorem</a>
           </div>
        </nav>
    )
}

export default nav
