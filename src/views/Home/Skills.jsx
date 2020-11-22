import React from 'react'

import ee from '../../assets/images/logos/ee-logo.png';
import craft from '../../assets/images/logos/logo-craft-cms.png';
import mjml from '../../assets/images/logos/mjml.png';
import node from '../../assets/images/logos/node-js.png';

function Skills() {
    return (
        <div className="block-container" id="skills">
            <div className="content">
            <h1>Technology</h1>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item"><i className="fab fa-html5"></i></li>
                <li className="list-group-item"><i className="fab fa-css3-alt"></i></li>
                <li className="list-group-item"><i className="fab fa-sass"></i></li>                                
                <li className="list-group-item"><i className="fab fa-npm"></i></li>                                
                <li className="list-group-item"><i className="fab fa-php"></i></li>                                
                <li className="list-group-item"><i className="fab fa-bootstrap"></i></li>                                
                <li className="list-group-item"><i className="fab fa-react"></i></li>                
                <li className="list-group-item"><i className="fab fa-js"></i></li>                
            </ul>  
            <div className="marqueeSkills">
                <img className="img-fluid" src={ee} alt=""/>
                <img className="img-fluid" src={craft} alt=""/>
                <img className="img-fluid" src={mjml} alt=""/>
                <img className="img-fluid" src={node} alt=""/>
            </div>
            </div>
        </div>
    )
}

export default Skills
