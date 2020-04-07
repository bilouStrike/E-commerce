import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';

import { CollectionItem } from '../collection-item.component';

describe('Collection Item', () =>{
    const MockItem = { 
        name: 'item',
        price: 50,
        imageUrl: 'image url'  
    };
    const mockAddtoCart = jest.fn();
    let wrapper = shallow(<CollectionItem item={MockItem} addItemToCart={mockAddtoCart}/>);

    it('Expect to invoke additemToCart on click in CustomButton', () => {
        wrapper.find('CustomButton').simulate('click');
        expect(mockAddtoCart).toHaveBeenCalled();
    });

    it('Expect to render CollectionItem component', () => {
        wrapper = toJson(wrapper);
        expect(wrapper).toMatchSnapshot();
    });

});