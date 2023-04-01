import React from "react";
import Cards from "./homecomponents/cards";
import list from "../data";

const Iphone = ({handleClick})=>{
    return(<>
    <div className="storeHeader">
        <div className="storeHeaderitem">
            <span>iphone</span>
        </div>
    </div>
    <section>
            {
                list.allitems.map((item)=>(
                    <Cards item={item} key={item.id} handleClick={handleClick}/>
                ))   
            }
        </section>
        </>)
    
}
export default Iphone;