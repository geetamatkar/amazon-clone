export const initialState = {
    basket: [],
    
};

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {

    console.log(action);

    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                basket: [...state.basket, action.item]

            };

        case 'REMOVE_FROM_CART' :
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
              );

              let newBasket = [...state.basket];  //copy new basket state
              
              if (index >= 0) {
                newBasket.splice(index, 1);
        
              } else {
                console.warn(
                  `Cant remove product (id: ${action.id}) as its not in basket!`
                )
              }
        
              return {
                ...state,
                basket: newBasket
              }
            

        default:
            return state;
    }

};

export default reducer;