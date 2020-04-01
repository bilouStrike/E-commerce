import { shallow, mount } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import { CartIcon } from '../cart-icon.component';
import configureStore from 'redux-mock-store';
import { toogleCartHidden } from '../../../redux/cart/cart.actions';

const mockStore = configureStore();
it('expect to cart icon component', () => {
    const mocktoogleCartHidden = jest.fn();
    const itemCount = 3;
    const wrapper = toJson(shallow(<CartIcon toogleCartHidden={mocktoogleCartHidden}  itemCount={itemCount}/>));
    expect(wrapper).toMatchSnapshot();
});

/*it('expect to run toogleCart correctly', () => {
    const mocktoogleCartHidden = jest.fn();
    const mockitemCount = 3;
    const initialState = {
        hidden: true
    }
    const store = mockStore(initialState);
    store.dispatch = jest.fn();
    //store.dispatch(toogleCartHidden());
    const action = toogleCartHidden();
    const wrapper = mount(
            <CartIcon 
                store={store}
                toogleCartHidden={toogleCartHidden}
                itemCount={mockitemCount} />
            );
        console.log(wrapper.find('[id="cart-icon"]'));
    wrapper.find('[id="cart-icon"]').simulate('click');
    expect(store.dispatch).toHaveBeenCalled();
});*/