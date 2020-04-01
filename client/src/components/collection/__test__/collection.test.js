import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import { CollectionPage } from '../collection.component';

it('Should render Collection component', () =>{
    const mockCollection = {
        title: 'hats',
        items: [{
            id:2,
            imageUrl: 'url',
            price: '250',
            name: 'name1',
            quantity: 2
            }]
    }
    expect(toJson(shallow(<CollectionPage collection={mockCollection}/>))).toMatchSnapshot();
});
