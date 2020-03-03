import cartActionsTypes from './cart.types';

export const toogleCartHidden = () => ({
    type: cartActionsTypes.TOGGLE_CART_HIDDEN 
})

export const addItemToCart = item => ({
    type: cartActionsTypes.ADD_ITEM_TO_CART,
    payload: item
})
