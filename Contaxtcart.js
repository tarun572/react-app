import React , { useContext} from 'react'
import Items from './Items';
import {CartContext} from "./Cart";
const Contaxtcart = () => {
    const {item , totalAmount, totalItem} = useContext(CartContext);
  return (
    <>
    <header>
      <div className='continue-shopping'>
        <img src='./images/arrow.png' className='arrow-icon' alt='arrow' />
        <h3> Continue shopping</h3>
        
      </div>
      <div className='cart-icon'>
        <img src="./images/cart.png" alt="cart" />
        <p>{totalItem}</p>
      </div>
    </header>
    <section className="main-cart-section">
      <h1>shopping Cart</h1>
      <p className='total-item'>You have <span className='total-items-count'>{totalItem}</span> items in shopping cart</p>
      <div className='cart-item'>
        <div className='cart-items-container'>
        {
          item.map((curItem)=>{
            return <Items key={curItem.id} {...curItem}/>
          })
        }
        
         
        
        </div>
      </div>
    </section>
    <div className='card-total'>
      <h3>Card Total: <span>{totalAmount}$</span></h3>
      <button>checkout</button>
    </div>
  </>
  );
}

export default Contaxtcart