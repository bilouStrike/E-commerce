import { shallow } from 'enzyme';
import React from 'react';
import HomePage from '../homepage.component';
import toJson from 'enzyme-to-json';

it('expect to render home page', () =>{
    expect(toJson(shallow(<HomePage/>))).toMatchSnapshot();
});