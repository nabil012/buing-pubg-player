import React from 'react';
import'./Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import Product from '../Product/Product';

const Cart = (props) => {
    const basket= <FontAwesomeIcon className='box' size='xl' icon={solid('basket-shopping')} />
    const shopCart= <FontAwesomeIcon icon={solid('cart-shopping')} />

    const {cart}=props
    let total = 0
    for (const player of cart ){
        total = total + player.price
    }
    return (
        <div>
            <h4>My Cart{basket}</h4>
           
            <hr />           
            <h6>Players Added: {cart.length}</h6>
            <h5>Total Cost : {total.toFixed(2)}</h5>

            <button className='btn'>{shopCart} Buy Now</button>
            
        </div>
    );
};

export default Cart;