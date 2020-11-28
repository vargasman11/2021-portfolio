import React from 'react';
import ee from '../../assets/images/logos/ee-logo.png';
import lfmax from '../../assets/images/projects/leadflexmax-md.png';
import hornady from '../../assets/images/projects/hornady-md.png';
import pendulux from '../../assets/images/projects/pendulux-md.png';
import averitt from '../../assets/images/projects/mjml-averitt-md-v2.png';
import corgi from '../../assets/images/projects/corgi-md.png';
import altmann from '../../assets/images/projects/altmann-md.png';
import usatruck from '../../assets/images/projects/usatruck-md.png';

function Projects() {
return (
<div className="block-container" id="projects">
    <div className="container">
        <div className="row">
            <div className="col-sm-12 py-5">
                <h1 className="text-center">Projects</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <div id="gridProjects">
                    <div className="grid-item grid-item-1"></div>
                    <div className="grid-item grid-item-2"></div>
                    <div className="grid-item grid-item-3"></div>
                    <div className="grid-item grid-item-4"></div>
                    <div className="grid-item grid-item-5"></div>
                    <div className="grid-item grid-item-6"></div>
                    <div className="grid-item grid-item-7"></div>
                    <div className="grid-item grid-item-8"></div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 py-5 text-center">
                <a href="#" className="btn btn-lg btn-info">View More projects</a>
            </div>
        </div>
    </div>
</div>
)
}

export default Projects