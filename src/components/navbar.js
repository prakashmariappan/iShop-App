import React from "react";
import { Link } from 'react-router-dom';
function show(){
    document.getElementById("showList").classList.add('display');
}
function hide(){
    document.getElementById("showList").classList.remove('display');
}

const Navbar =({size, price})=>{
    return(
    <>
     <div className="header">
        <div className="headerfirst">
            <div className="headerFirstLeft">
            <div className="headerFirstLeft1">
                <select name="language" id="language">
                    <option value="1">EN</option>
                    <option value="2">HN</option>
                    </select>
            </div>
            <div className="headerFirstLeft2">
                <select name="payment" id="payment">
                    <option value="1">$</option>
                    <option value="2">INR</option>
                    </select>
            </div>
            </div>
            <div className="headerFirstRight">
                <div className="headerFirstRight1">
                <div alt="profileImage" className="profileImage"></div>
                <p className="profileName">My Profile</p>
                </div>
                <div className="headerFirstRight2">
                <Link className="bagImage" to='/cart'>
                    <span className="itemQty">{size}</span>
                    </Link>
                <span className="hmitems">{size}</span>
                <span className="hmitemtext">Items</span>
                <span className="priceItems">${price}</span>
                </div>
                <div className="headerFirstRight3">
                    <div alt="searchImage" className="searchImage"></div>
                </div>
            </div>
        </div>
        <div className="headersecond">
        <Link className="headersecondlogo" to="/"></Link>
            <div className="headersecondnav">
            <Link activeclassname="active" className="menuItems" to="/" onMouseLeave={hide} onMouseEnter={show}>HOME</Link>
            <Link activeclassname="active" className="menuItems" to="/store" onMouseLeave={hide} onMouseEnter={show}>STORE</Link>
            <Link activeclassname="active" className="menuItems" to="/iphone" onMouseLeave={hide} onMouseEnter={show}>IPHONE</Link>
            <Link activeclassname="active" className="menuItems" to="/ipad" onMouseLeave={hide} onMouseEnter={show}>IPAD</Link>
            <Link activeclassname="active" className="menuItems" to="/macbook" onMouseLeave={hide} onMouseEnter={show}>MACBOOK</Link>
            <Link activeclassname="active" className="menuItems" to="/accesories" onMouseLeave={hide} onMouseEnter={show}>ACCESORIES</Link>
            </div>
            <div className="showList" id="showList"> 
                <ul>
                    <li className="showListHead">Accessories</li>
                    <li>AirPort & Wireless</li>
                    <li>AppleCare </li>
                    <li>Bags, Shells & Sleeves </li>
                    <li>Business & Security </li>
                    <li>Cables & Docks</li>
                </ul>
                <ul>
                    <li className="showListHead"></li>
                    <li>Cameras & Video </li>
                    <li> Car & Travel</li>
                    <li>Cases & Films</li>
                </ul>
                <ul>
                    <li className="showListHead">Category</li>
                    <li>Charging Devices</li>
                    <li>Connected Home</li>
                    <li>Device Care </li>
                    <li>Display & Graphic</li>
                    <li>Fitness & Sport</li>
                </ul>
            <ul>
                <li className="showListHead"></li>
                <li>Headphones </li>
                <li>HealhKit</li>
            </ul>
            <ul>
                <li className="showListHead">Category</li>
                <li>Mice & Keyboards </li>
                <li>Music Creation </li>
                <li>Networking & Server</li>
            </ul>
        </div>
        </div>
    </div>    
    </>
      );
}
export default Navbar;