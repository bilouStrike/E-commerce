import { shallow, mount } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import FormInput from '../form-input.component';

describe('FormInput compoent', () => {
    const MockhandleChange = jest.fn();
    let mockLabel;
    let wrapper;
    let mockOtherProps = {
        name: 'email',
        type: 'email',
        value: 'value',
        required: true,
        label: 'email'
    }

    it('Should render FormInput without label', () => {
        mockLabel = false;
        wrapper = toJson(shallow(<FormInput handleChange={MockhandleChange} label={mockLabel} {...mockOtherProps}  />))
        expect(wrapper).toMatchSnapshot();
    });

    it('Should render FormInput with label', () => {
        mockLabel = true;
        wrapper = toJson(shallow(<FormInput handleChange={MockhandleChange} label={mockLabel} {...mockOtherProps}  />))
        expect(wrapper).toMatchSnapshot();
    });

    it('Should render FormInput with label and without shink class', () => {
        mockLabel = true;
        mockOtherProps.value = 0;
        wrapper = toJson(shallow(<FormInput handleChange={MockhandleChange} label={mockLabel} {...mockOtherProps}  />))
        expect(wrapper).toMatchSnapshot();
    });

    it('expect submit onclick', () => {
        wrapper = shallow(<FormInput handleChange={MockhandleChange} label={mockLabel} {...mockOtherProps}  />);
        wrapper.find('input[type="email"]').simulate('change', {
            target: {
              value: 'newvalue',
            },
        });
        expect(MockhandleChange).toBeCalled();
    });
});