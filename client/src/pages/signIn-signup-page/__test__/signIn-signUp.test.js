import { shallow } from 'enzyme';
import React from 'react';
import SignInAndSignUpPage from '../signIn-signUp.component';
import toJson from 'enzyme-to-json';

it('Expect to render sign in and sign up page', ()=>{
    expect(toJson(shallow(<SignInAndSignUpPage/>))).toMatchSnapshot();
});