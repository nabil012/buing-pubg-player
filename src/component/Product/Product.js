import React from 'react'; 
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const Product = (props) => {
    const {name,role,ingame_name,img,price,price1,link} =props.player
   const element= <FontAwesomeIcon icon={solid('cart-shopping')} />
   const element2= <FontAwesomeIcon className='insta' size='2x' icon={brands('instagram')} />
   const element3= <FontAwesomeIcon className='fb'  size='2x'  icon={brands('facebook')} />
    return (
        
        <div className='player-cart'>
            <img className='images' src={img} alt=""  />
            <div className='player'>
               <div className='text' >
                   <small className='txt-color'>Name: <span className='details'> {name}</span></small> <br />
                   <small className='txt-color'>InGame Name: <span className='details'> {ingame_name}</span></small> <br />
                   <small className='txt-color'>Game Role: <span className='details'> {role}</span></small>
                   <br />
                   <small className='txt-color'>Monthly Salary: <span className='details'> ${price}</span></small> <br />
                   <small className='txt-color'>Loan Per Match: <span  className='details'>${price1}</span></small> <br />
                   <br />
                  <span className='bttn'><button onClick={()=>props.handleAddToCart(props.player)} className='btn'>{element} Add to Cart</button></span>
                </div>
                <div className='brand'>
         <a href={link}>{element3}</a>
         {element2}
                </div>
          
            </div>

            
        </div>
    );
};
export default Product;