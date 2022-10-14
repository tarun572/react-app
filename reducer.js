export const reducer = (state, action) => {
    
    if (action.type === "INCREMENT") {
      //   we need to find out which item is clicked
      let updatedCart = state.item.map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity + 1 };
        }
        return curElem;
      });
      return { ...state, item: updatedCart };
    }
  
    if (action.type === "DECREMENT") {
      //   we need to find out which item is clicked
      let updatedCart = state.item
        .map((curElem) => {
          if (curElem.id === action.payload) {
            return { ...curElem, quantity: curElem.quantity - 1 };
          }
          return curElem;
        })
      return { ...state, item: updatedCart };
    }
     if(action.type === "GET_TOTAL"){
        let {totalItem,totalAmount}=state.item.reduce((accum,curVal)=>{
            let {price,quantity} =curVal;
            let updatedTotalAmount = price*quantity;
            accum.totalAmount +=updatedTotalAmount;
            accum.totalItem += quantity;
            return accum;
        },{
            totalItem:0,
            totalAmount:0,
        });
        return {...state,totalItem,totalAmount};
     }
    return state;  
  };
  
  export default reducer;
   




  // if (action.type === "CLEAR_CART") {
    //   return { ...state, item: [] };
    // }
  
    // if (action.type === "FAV_ITEM") {
    //   return {
    //    ...state,
    //   };
    // }