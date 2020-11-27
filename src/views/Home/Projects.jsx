import React from 'react';
import ee from '../../assets/images/logos/ee-logo.png';


function Projects() {
    return (
        <div className="block-container" id="projects">
            <div className="row">
                <div className="col-sm-12">
                    <h1>Projects</h1>
                </div>
            </div>
            <div id="gridProjects">
                <div className="grid-item grid-item-1"><img className="img-fluid" src={ee} alt=""/></div>
                <div className="grid-item grid-item-2"><img className="img-fluid" src={ee} alt=""/></div>
                <div className="grid-item grid-item-3"><img className="img-fluid" src={ee} alt=""/></div>
                <div className="grid-item grid-item-4"><img className="img-fluid" src={ee} alt=""/></div>
                <div className="grid-item grid-item-5"><img className="img-fluid" src={ee} alt=""/></div>
                <div className="grid-item grid-item-6"><img className="img-fluid" src={ee} alt=""/></div>
                <div className="grid-item grid-item-7"><img className="img-fluid" src={ee} alt=""/></div>
                <div className="grid-item grid-item-8"><img className="img-fluid" src={ee} alt=""/></div>
            </div>
        </div>
    )
}

export default Projects
