import { shallow , mount, spy } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import { SignIn } from '../sign-in.component';

describe('Sign In component', () => {

    const mockemailSignInStart = jest.fn();
    const mockgoogleSignInStart = jest.fn();
    const mockHandleSubmit = jest.fn();

    mockHandleSubmit.mockImplementation( async () => {
        mockemailSignInStart('email@email.com', 'password');
    });

    let wrapper = shallow(<SignIn 
        emailSignInStart={mockemailSignInStart} 
        googleSignInStart={mockgoogleSignInStart}/>
    );

    it('expect to render signIn component', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('expect exist email input with props', () => {
        expect(wrapper.find('FormInput[type="email"]').props()).toEqual({
            name:"email",
            type:"email",
            handleChange: expect.any(Function) ,
            value:"",
            label:"email",
            required:true
        });
    });
  
    it('expect exist password input with props', () => {
        expect(wrapper.find('FormInput[type="password"]').props()).toEqual({
            name:"password",
            type:"password",
            handleChange: expect.any(Function) ,
            value:"",
            label:"password",
            required:true
        });
    });

    it('expect exist custom button with props', () => {
        expect(wrapper.find('CustomButton[type="button"]').props()).toEqual({
            type:"button",
            onClick: mockgoogleSignInStart,
            isGoogleSignIn:true,
            children: 'Sign in with Google'
        });
    });
    
});
