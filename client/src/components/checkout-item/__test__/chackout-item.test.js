import { shallow } from 'enzyme';
import React from 'react';
import { CheckoutItem } from '../checkout-item.component';
import toJson from 'enzyme-to-json';

describe("Checkout component:", () => {
 
    const MockcartItem = { 
        name: 'Product1',
        imageUrl: 'image url',
        price: 50,
        quantity: 1
    };

    const mockRemoveItem = jest.fn();
    const wrapper = toJson(shallow(<CheckoutItem cartItem={MockcartItem} removeItem={mockRemoveItem}/>));

    it('expect checkout component to do onot changing', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('expect to invok removeItem on click in removeItem Button', () => {
        const wrapper2 = shallow(<CheckoutItem cartItem={MockcartItem} removeItem={mockRemoveItem}/>);
        wrapper2.find('[id="removeItem"]').simulate('click');
        expect(mockRemoveItem).toHaveBeenCalled();
    });

});