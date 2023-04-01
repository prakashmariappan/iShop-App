import React from "react";
import Cardscontainer from "./homecomponents/cardscontainer";
import Imageslider from "./homecomponents/imageslider";
import Iphone6floating from "./homecomponents/iphone6floating";


const Homepage = ({handleClick})=>{ 
    return(<>
    <Imageslider />
    <Cardscontainer handleClick={handleClick}/>
    <Iphone6floating />
        </>)
    
}
export default Homepage;