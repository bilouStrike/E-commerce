import * as actions from '../cart.actions';
import cartActionsTypes from '../cart.types';
 
describe('Testing Card actions', ()=> {
    const mockItem = {
        id:1,
        imageUrl: 'image url',
        price:250,
        name: 'hats',
        quantity: 1
    };

    it('Should create an action to toggleHide card', () => {
        const expectAction = {
            type: cartActionsTypes.TOGGLE_CART_HIDDEN
        };
        expect(actions.toogleCartHidden()).toEqual(expectAction);
    });

    it('Should create an action to toggleHide card', () => {
        const expectAction = {
            type: cartActionsTypes.ADD_ITEM_TO_CART,
            payload: mockItem
        };
        expect(actions.addItemToCart(mockItem)).toEqual(expectAction);
    });

    it('Should create an action to toggleHide card', () => {
        const expectAction = {
            type: cartActionsTypes.REMOVE_CART_ITEM,
            payload: mockItem
        };
        expect(actions.removeCartItem(mockItem)).toEqual(expectAction);
    });
});
