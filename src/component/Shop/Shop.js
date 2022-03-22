import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Shop.css'
const Shop = () => {
const [players,setplayers] = useState([])
const [cart,setCart]= useState([])
useEffect(()=>{
    fetch('./products.JSON')
    .then(res => res.json())
    .then(data => setplayers(data))
},[])


    const handleAddToCart = (player) =>{
       
        const newCart = [...cart,player]
        setCart(newCart)
    }

    return (
        <div className='shop'>

       
        <div className='cart'>
          {
              players.map(player=><Product
              player={player}
              key={player.key}
             handleAddToCart={handleAddToCart}
             ></Product>)
          }
        </div>

        <div>
<Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Shop;