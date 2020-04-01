import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import CartItem from '../cart-item.component';

it('expect to render cart item component', () => {
    const mockItem = {
            id:2,
            imageUrl: 'image url',
            price:250,
            name: 'hats',
            quantity: 20
    }
    expect(toJson(shallow(<CartItem item={mockItem}/>))).toMatchSnapshot();
});