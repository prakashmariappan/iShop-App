import React from 'react';
import Floating from './floating';

const Iphone6floating = () => {
    return (
        <>
        <Floating/>
        <div className="services">
            <div className="servicesComponent">
                <div className="shipping">
                    <div className="shippingLogo sl1"></div>
                        <h2 className="shippingServices">FREE SHIPPING</h2>
                        <p className="shippingPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
            </div>
            <div className="servicesComponent">
                <div className="shipping">
                    <div className="shippingLogo sl2"></div>
                        <h2 className="shippingServices">100% REFUND</h2>
                        <p className="shippingPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
            </div>
            <div className="servicesComponent">
                <div className="shipping">
                    <div className="shippingLogo sl3"></div>
                        <h2 className="shippingServices">SUPPORT 24/7</h2>
                        <p className="shippingPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Iphone6floating;
