import cartActionsTypes from '../cart.types';
import cartReducer from '../cart.reducer';

describe('Card reducer', ()=> {
    const initialState = {
        hidden: true,
        cartItems: []
    }

    it('Should return the initial state', () => {
        expect(cartReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle ToogleCartHidden', () => {
        expect(cartReducer(initialState, {type:cartActionsTypes.TOGGLE_CART_HIDDEN}))
            .toEqual({
                hidden: false,
                cartItems: []
            });
    });

    it('Should handle ADD_ITEM_TO_CART', () => {
        expect(cartReducer(
                initialState,
                {type:cartActionsTypes.ADD_ITEM_TO_CART, 
                payload: {
                    id:1,
                    imageUrl: 'image url',
                    price:250,
                    name: 'hats',
                    quantity: 1
                }}))
            .toEqual({
                hidden: true,
                cartItems: [{
                    id:1,
                    imageUrl: 'image url',
                    price:250,
                    name: 'hats',
                    quantity: 1
                }]
            });
    });

    it('Should handle Remoe Item From cart', () => {
        const initialState = {
            hidden: true,
            cartItems: [{
                id:1,
                imageUrl: 'image url',
                price:250,
                name: 'hats',
                quantity: 1
            },
            {
                id:2,
                imageUrl: 'image url2',
                price:25,
                name: 'hats',
                quantity: 1
            }]
        };

        expect(cartReducer(
            initialState,
            {type:cartActionsTypes.REMOVE_CART_ITEM,
            payload: {
                id:1,
                imageUrl: 'image url',
                price:250,
                name: 'hats',
                quantity: 1
            }}))
            .toEqual({
                hidden: true,
                cartItems: [{
                    id:2,
                    imageUrl: 'image url2',
                    price:25,
                    name: 'hats',
                    quantity: 1
                }]
            });
    });

    it('Should handle Clear cart', () => {
        const initialState = {
            hidden: true,
            cartItems: [{
                id:1,
                imageUrl: 'image url',
                price:250,
                name: 'hats',
                quantity: 1
            }]
        };

        expect(cartReducer(
            initialState,
            {type:cartActionsTypes.CLEAR_CART,
            payload: {
                id:1,
                imageUrl: 'image url',
                price:250,
                name: 'hats',
                quantity: 1
            }}))
            .toEqual({
                hidden: true,
                cartItems: []
            });
    });
});
