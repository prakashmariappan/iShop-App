import React from "react";

const Cart = ({cart, price,handleremove, handlechange})=>{

    return(
    <>
    <div className="sectionheading">Cart</div>
    <div className="cartcon">
        <div className="ccproduct cc">PRODUCT</div>
        <div className="ccprice cc">PRICE</div>
        <div className="ccqty cc">QTY</div>
        <div className="ccup cc">UNIT PRICE</div>
    </div>
    <article>{
        cart.map((item)=>(
    <div className="cartitems">
        <div className="ccproduct">
            <button className="remove" onClick={()=>handleremove(item.id)}>X</button>
            <div className="cartimg">
                <img alt="" className="imgsize" src={item.image}></img>
                <p className="itm_p">{item.title}</p>
            </div>

        </div>
        <div className="ccprice itmpr">${item.price}</div>
        <div className="ccqty">
            <button className="btn" onClick={()=>handlechange(item, -1)}>-</button>
            <button className="btnq">{item.amount}</button>
            <button className="btn" onClick={()=>handlechange(item, +1)}>+</button>
        </div>
        <div className="ccup">
            <span>${item.amount*item.price}</span>
        </div>
    </div>
    
    ))}
    </article>
    <div className="cartdown">
        <div className="cartleft">
            <input className="voucher" type="name" placeholder="Voucher Code"></input>
            <button className="redeem">Redeem</button>
        </div>
        <div className="cartright">
            <div className="cr">
                <div className="crheading">Subtotal</div>
                <div className="crval">${price}</div>
            </div>
            <div className="cr">
                <div className="crheading">Shipping fee</div>
                <div className="crval">$20</div>
            </div>
            <div className="cr">
                <div className="crheading">Coupon</div>
                <div className="crval">No</div>
            </div>
            <div className="cr totaldiv">
                <div className="crheadingtotal">Total</div>
                <div className="crvaltotal">${price + 20}</div>
            </div>
            <button className="checkout">Check Out</button>
            </div>
    </div>
        </>)
    
}
export default Cart;