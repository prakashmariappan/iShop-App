import React from "react";
import Cards from "./homecomponents/cards";
import list from "../data";

const Accesories = ({handleClick})=>{
    return(<>
     <div class="storeHeader">
        <div class="storeHeaderitem">
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