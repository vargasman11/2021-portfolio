import React from 'react';
import ee from '../../assets/images/logos/ee-logo.png';
import lfmax from '../../assets/images/projects/leadflexmax-md.png';
import hornady from '../../assets/images/projects/hornady-md.png';
import pendulux from '../../assets/images/projects/pendulux-md.png';
import averitt from '../../assets/images/projects/mjml-averitt-md-v2.png';
import corgi from '../../assets/images/projects/corgi-md.png';

function Projects() {
return (
<div className="block-container" id="projects">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <h1>Projects</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <div id="gridProjects">
                    <div className="grid-item grid-item-1"><img  src={lfmax} alt="" /></div>
                    <div className="grid-item grid-item-2"><img  src={hornady} alt="" /></div>
                    <div className="grid-item grid-item-3"><img  src={pendulux} alt="" /></div>
                    <div className="grid-item grid-item-4"><img  src={averitt} alt="" /></div>
                    <div className="grid-item grid-item-5"><img  src={corgi} alt="" /></div>
                    <div className="grid-item grid-item-6"><img  src={ee} alt="" /></div>
                    <div className="grid-item grid-item-7"><img  src={ee} alt="" /></div>
                    <div className="grid-item grid-item-8"><img  src={ee} alt="" /></div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Projects