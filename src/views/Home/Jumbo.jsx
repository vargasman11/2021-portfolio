import React from 'react';
import siteOne from '../../assets/images/jumbo-1.png';
import siteTwo from '../../assets/images/jumbo-2.png';
import siteThree from '../../assets/images/jumbo-3.png';
import siteFour from '../../assets/images/jumbo-4.png';

function Jumbo() {
    return (
        <div className="block-container" id="jumbo">
            <div className="content">
                <div className="content__quad">
                    <div className="quad__container">
                        <img src={siteOne} alt=""/>
                    </div>
                    <div className="quad__container">
                        <img src={siteTwo} alt=""/>
                    </div>
                    <div className="quad__container">
                        <img src={siteThree} alt=""/>
                    </div>
                    <div className="quad__container">
                        <img src={siteFour} alt=""/>
                    </div>
                </div>
                <h1>Jerry Juice</h1>

            </div>
        </div>
    )
}

export default Jumbo