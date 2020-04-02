import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Redirect } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/signIn-signup-page/signIn-signUp.component';

import { App } from './App.js';

describe('App', () =>{
    let wrapper;
    beforeEach( () =>{
        wrapper = shallow(<App />);
    });

    it('Should render App component', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Should route / to homePage', () => {
        expect(wrapper.find('Route[exact=true][path="/"]').first().prop('component')).toBe(HomePage);
    });

    it('Should route /shop to ShopPage', () => {
        expect(wrapper.find('Route[path="/shop"]').first().prop('component')).toBe(ShopPage);
    });

    it('Should route /checkout to CheckOut', () => {
        expect(wrapper.find('Route[path="/checkout"]').first().prop('component')).toBe(CheckoutPage);
    });

    it('Should route /signin to SignInSignUp if currentUser false', () => {
        const mockCurrentUser = false;
        const wrapperwithUserTrue = shallow(<App currentUser={mockCurrentUser} />);
        expect(wrapperwithUserTrue.find('Route[path="/signin"]').at(0).props().render()).toEqual(<SignInAndSignUpPage/>);
    });

    it('Should route /signin to /Homepage if currentUser true', () => {
        const mockCurrentUser = true;
        const wrapperwithUserFalse = shallow(<App currentUser={mockCurrentUser} />);
        expect(wrapperwithUserFalse.find('Route[path="/signin"]').at(0).props().render()).toEqual(<Redirect to='/'/>);
    });
 });
