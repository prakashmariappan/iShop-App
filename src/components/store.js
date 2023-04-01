import React from "react";
import Cards from "./homecomponents/cards";
import list from "../data";
const Store = ({handleClick})=>{
    return(<>
    <div class="storeHeader">
        <div class="storeHeaderitem">
            <span>Store</span>
            <span class="forwerd">/</span>
            <span>Accesories</span>
        </div>
    </div>
    <div className="storeHome">
        <div className="storeHomeLeft">
            <div class="storeleftCard">
                <h3>ACCESORIES</h3>
                <p class="appleCar">
                    <span>Apple Car</span>
                    <span>2</span>
                </p>
                <p class="appleCar">
                    <span>Air port &amp; wireless</span>
                    <span>48</span>
                </p>
                <p class="appleCar">
                    <span>Cables & Docks</span>
                    <span>14</span>
                </p>
                <p class="appleCar">
                    <span>Cases & Films</span>
                    <span>15</span>
                </p>
                <p class="appleCar">
                    <span>Charging Devices</span>
                    <span>23</span>
                </p>
                <p class="appleCar">
                    <span>Connected home</span>
                    <span>1</span> 
                </p>
                <p class="appleCar">
                    <span>Headphones</span>
                    <span>95</span>
                </p>
            </div>
            <div class="storePrices">
                <h3 class="prices">PRICES</h3>
                <div class="ranges">
                    <p class="ranges">Ranger</p>
                    <p>$13.99-$25.99</p>
                </div>
                <div class="doubleRange">
                    <span class="MuiSlider-root MuiSlider-colorPrimary"></span>
                    <span class="MuiSlider-rail"></span>
                    <span class="MuiSlider-track" ></span>
                    <input type="hidden" value="10,60">
                    </input>
                </div>
            </div>
            <div class="color">
                <h3 class="colorName">COLOR</h3>
                <div className="colorselect">
                    <div className="circle c1"></div>
                    <div className="circle c2"></div>
                    <div className="circle c3"></div>
                    <div className="circle c4"></div>
                    <div className="circle c5"></div>
                    <div className="circle c6"></div>
                </div>
            </div> 
            <div class="storeleftCard">
                <h3>BRAND</h3>
                <p class="appleCar">
                    <span>Apple</span>
                    <span>5</span>
                </p>
                <p class="appleCar">
                    <span>LG</span>
                    <span>8</span>
                </p>
                <p class="appleCar">
                    <span>Samsung</span>
                    <span>12</span>
                </p>
                <p class="appleCar">
                    <span>Siemens</span>
                    <span>15</span>
                </p>
            </div>
            <div class="moreStore">MORE</div>
        </div>
        <div className="storeHomeRight">
            <div class="bigBannerStore">
                <div class="bigLeftStore">
                    <p class="bigLeftPara1">iPhone 8</p>
                    <p class="bigLeftPara2">Performance and design. Taken right to the edge.</p>
                    <p class="shopNowButton">shop Now</p>
                </div>
                <div class="bigRight">
                    <div class="mpImage"></div>
                </div>
            </div>
            <div class="storePart2">
                <div class="storePart2left">
                    <div class="itemCounts">13 items</div>
                    <div class="sortBy">
                        <label for="sortBy">Sort By</label>
                        <select name="sort" id="sortBy">
                            <option value="0">Name</option>
                            <option value="1">Price</option>
                        </select>
                    </div>
                    <div class="showItem">
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