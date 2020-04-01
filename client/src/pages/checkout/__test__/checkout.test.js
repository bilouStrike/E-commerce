import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import { CheckoutPage } from '../checkout.component';

it('expect to render checkout component', () => {
    const mockItems = [{
        imageUrl: 'url',
        price: '250',
        name: 'name1',
        quantity: 2
    }];
    const mockTotal = 500;
    expect(toJson(shallow(<CheckoutPage cartItems={mockItems} total={mockTotal}/>))).toMatchSnapshot();
});