import React from "react";
import Cards from "./homecomponents/cards";
import list from "../data";
const Store = ({handleClick})=>{
    return(<>
    <div className="storeHeader">
        <div className="storeHeaderitem">
            <span>Store</span>
            <span className="forwerd">/</span>
            <span>Accesories</span>
        </div>
    </div>
    <div className="storeHome">
        <div className="storeHomeLeft">
            <div className="storeleftCard">
                <h3>ACCESORIES</h3>
                <p className="appleCar">
                    <span>Apple Car</span>
                    <span>2</span>
                </p>
                <p className="appleCar">
                    <span>Air port &amp; wireless</span>
                    <span>48</span>
                </p>
                <p className="appleCar">
                    <span>Cables & Docks</span>
                    <span>14</span>
                </p>
                <p className="appleCar">
                    <span>Cases & Films</span>
                    <span>15</span>
                </p>
                <p className="appleCar">
                    <span>Charging Devices</span>
                    <span>23</span>
                </p>
                <p className="appleCar">
                    <span>Connected home</span>
                    <span>1</span> 
                </p>
                <p className="appleCar">
                    <span>Headphones</span>
                    <span>95</span>
                </p>
            </div>
            <div className="storePrices">
                <h3 className="prices">PRICES</h3>
                <div className="ranges">
                    <p className="ranges">Ranger</p>
                    <p>$13.99-$25.99</p>
                </div>
                <div className="doubleRange">
                    <span className="MuiSlider-root MuiSlider-colorPrimary"></span>
                    <span className="MuiSlider-rail"></span>
                    <span className="MuiSlider-track" ></span>
                    <input type="hidden" value="10,60">
                    </input>
                </div>
            </div>
            <div className="color">
                <h3 className="colorName">COLOR</h3>
                <div className="colorselect">
                    <div className="circle c1"></div>
                    <div className="circle c2"></div>
                    <div className="circle c3"></div>
                    <div className="circle c4"></div>
                    <div className="circle c5"></div>
                    <div className="circle c6"></div>
                </div>
            </div> 
            <div className="storeleftCard">
                <h3>BRAND</h3>
                <p className="appleCar">
                    <span>Apple</span>
                    <span>5</span>
                </p>
                <p className="appleCar">
                    <span>LG</span>
                    <span>8</span>
                </p>
                <p className="appleCar">
                    <span>Samsung</span>
                    <span>12</span>
                </p>
                <p className="appleCar">
                    <span>Siemens</span>
                    <span>15</span>
                </p>
            </div>
            <div className="moreStore">MORE</div>
        </div>
        <div className="storeHomeRight">
            <div className="bigBannerStore">
                <div className="bigLeftStore">
                    <p className="bigLeftPara1">iPhone 8</p>
                    <p className="bigLeftPara2">Performance and design. Taken right to the edge.</p>
                    <p className="shopNowButton">shop Now</p>
                </div>
                <div className="bigRight">
                    <div className="mpImage"></div>
                </div>
            </div>
            <div className="storePart2">
                <div className="storePart2left">
                    <div className="itemCounts">13 items</div>
                    <div className="sortBy">
                        <label for="sortBy">Sort By</label>
                        <select name="sort" id="sortBy">
                            <option value="0">Name</option>
                            <option value="1">Price</option>
                        </select>
                    </div>
                    <div className="showItem">
                        <label for="show">Show</label>
                        <select name="show" id="show">
                            <option value="0">1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">4</option>
                            <option value="4">5</option>
                            <option value="5">6</option>
                            <option value="6">7</option>
                            <option value="7">8</option>
                            <option value="8">9</option>
                            <option value="9">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                </div>
        </div>
        <div className="storediv">
            {
                list.accesories.map((item)=>(
                    <Cards item={item} key={item.id} handleClick={handleClick}/>
                ))   
            }
        </div>        
        </div>    
    </div>
        </>)
    
}
export default Store;