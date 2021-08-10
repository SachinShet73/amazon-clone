export const initialState = {
    basket: [],
}

//Selector
export const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price + amount, 0);


// 2:15:20
const reducer = (state,action)=> {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET': 
            return{
                ...state,
                basket: [...state.basket,action.item]
            };
            default:
                return state;
         case 'REMOVE_FROM_BASKET':
             const index = state.basket.findIndex(
                 (basketItem) => basketItem.id === action.id);
                 let newBasket = [...state.basket];

                 if (index >=0) {
                     newBasket.splice(index,1);
                 } else {
                     console.warn(
                         "Can't remove product (id: ${action.id}) as its not in Basket!"
                     )
                 }

                 return {
                     ...state,
                     basket: newBasket
                 }
             
    
            }
}



export default reducer;