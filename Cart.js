import React, {  useEffect,useReducer,createContext } from 'react'
import './cart.css';
import Contaxtcart from './Contaxtcart';
import { products } from './products';
import {reducer} from './reducer';


export const CartContext = createContext();
const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
  quantity: 0,
};
export const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  


  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };
  useEffect(()=>{
    dispatch({type: "GET_TOTAL"});
  },[state.item]);
  return (
   <>
   <CartContext.Provider value={{ ...state,increment, decrement }}>
   <Contaxtcart/>
   </CartContext.Provider>
   </>
  );
}

export default Cart;
