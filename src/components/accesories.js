import React from "react";
import Cards from "./homecomponents/cards";
import list from "../data";

const Accesories = ({handleClick})=>{
    return(<>
     <div className="storeHeader">
        <div className="storeHeaderitem">
            <span>Accessories</span>
        </div>
    </div>
    <section>
            {
                list.accesories.map((item)=>(
                    <Cards item={item} key={item.id} handleClick={handleClick}/>
                ))   
            }
        </section>
        </>)
    
}
export default Accesories;