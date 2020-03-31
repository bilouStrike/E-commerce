import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import CartItem from '../cart-item.component';

it('expect to render cart item component', () =>{
    expect(toJson(shallow(<CartItem />))).toMatchSnapshot();
});