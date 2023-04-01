import { Link } from 'react-router-dom';
import React from 'react';
import list from '../../data';
import Cards from './cards';

const Cardscontainer = ({handleClick}) => {
    return (
        <>
        <div className='bestsellercontainer'>
            <h2 className='bestsellerheading'>BEST SELLER</h2>
            <ul className="bestSellerMenu">
                <Link className="activeBestSeller" to="/">All</Link>
                <Link className='li' to="/macbook">Mac</Link>
                <Link className='li' to="/iphone">iPhone</Link>
                <Link className='li' to="ipad">iPad</Link>
                <Link className='li' to="/accesories">Accessories</Link>
            </ul>
        </div>
        <section>
            {
                list.allitems.map((item)=>(
                    <Cards item={item} key={item.id} handleClick={handleClick}/>
                ))   
            }
        </section>
        </>
    );
}

export default Cardscontainer;
