import React from "react";
import Cards from "./homecomponents/cards";
import list from "../data";

const Macbook = ({handleClick})=>{
    return(<>
 <div class="storeHeader">
        <div class="storeHeaderitem">
            <span>Macbook</span>
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
export default Macbook;