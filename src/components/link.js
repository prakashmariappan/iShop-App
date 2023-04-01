import React,{useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import Store from "./store";
import Iphone from "./iphone";
import Ipad from "./ipad";
import Macbook from "./macbook";
import Accesories from "./accesories";
import Cart from "./cart";
import Footer from "./footer";
import Navbar from "./navbar";
const Link = ()=>{

  const [cart, setCart] = useState([]);

  const handleClick = (item)=>{
      console.log(item);
      let isPresent = false;
      cart.forEach((prdouct)=>{
          if (item.id === prdouct.id)
          isPresent = true;
      })
      if (isPresent)
          return;
      setCart([...cart, item]);
  }

  const [price, setPrice] = useState(0);

  const handlePrice = ()=>{
      let ans = 0;
      cart.map ((item)=>(
          ans += item.amount * item.price
      ))
      setPrice(ans);
  }

  useEffect(() => {
     handlePrice();
  })

  const handleremove = (id) =>{
       const  arr =  cart.filter((item)=>item.id !==id);
       setCart(arr);
  }

  const handleChange =(item ,d)=>{
    let ind =-1;
    cart.forEach((data, index)=>{
        if (data.id === item.id)
            ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount +=d;

    if (tempArr[ind].amount === 0)
        tempArr[ind].amount=1;
    setCart([...tempArr])    
  }
    return(
    <>
    <BrowserRouter>
    <Navbar size={cart.length} price={price}/>
      <Routes>
      <Route path='/' element={<Homepage handleClick={handleClick}/>} exact/>
      <Route path='/store' element={<Store handleClick={handleClick}/>}  exact/>
      <Route path='/iphone' element={<Iphone handleClick={handleClick}/> } exact/>
      <Route path='/ipad' element={<Ipad handleClick={handleClick} />}  exact/>
      <Route path='/macbook' element={<Macbook handleClick={handleClick}/>} exact/>
      <Route path='/accesories' element={<Accesories handleClick={handleClick}/>} exact/>
      <Route path='/cart' element={<Cart  cart={cart} setcart={setCart} price={price} setprice={setPrice} handlechange={handleChange} handleremove={handleremove}/>} exact/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
        )
}
export default Link;