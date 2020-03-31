import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import CollectionPreview from '../collection-preview.component';

it('expect to render cart item component', () => {
    const mockTile = 'hats';
    const mockItems = [{
            imageUrl: 'url',
            price: '250',
            name: 'name1',
            quantity: 2
        }
    ]
    expect(toJson(shallow(<CollectionPreview title={mockTile} items={mockItems}/>))).toMatchSnapshot();
});