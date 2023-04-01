import React from 'react';

const Cards = ({item, handleClick }) => {
    const {title, price, image} = item;
    return (
        <div className='cards'>
            <p className="badgeHot">HOT</p>
            <div className="heartFillCart" onClick={()=>handleClick(item)}>
                <div className="heart hfc"></div>
                <div className="fillcart hfc"></div>
            </div>
           <div className='imagebox'>
                <img src={image} alt="Image" />
            </div>
            <div className='deatils'>
                <p className='name'>{title}</p>
                <div className='rating'></div>
                <p className='price'>${price}<span>${price}0</span></p>
            </div>   
        </div>
    );
}

export default Cards;
