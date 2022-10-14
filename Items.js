import React ,{useContext}from 'react'
import {CartContext} from "./Cart";
const Items = ({id,description,title,img,price,quantity}) => {
  const {increment}= useContext(CartContext)
  const {decrement}= useContext(CartContext)
  return (
    <>
      <div className='items-info'>
        <div className='product-img'>
          <img src={img} alt='product' />
        </div>
        <div className='title'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className='add-minus-quantity'>
          <i class="fa-solid fa-minus" onClick={()=>decrement(id)}></i>
          <input type="text" placeholder={quantity} />

          <i class="fa-solid fa-plus" onClick={()=>increment(id)}></i>
        </div>
        <div className='price'>
          <h3>{price}$</h3>
        </div>
        <div className='fav-item'>
          <i class="fa-regular fa-heart" id='fav-btn' ></i>

        </div>
         </div>
         <hr/>
      </>
      );
}

      export default Items