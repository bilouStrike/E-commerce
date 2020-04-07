import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import FormInput from '../form-input.component';

describe('FormInput compoent', () => {
    const MockhandleChange = jest.fn();
    let mockLabel;
    let mockOtherProps = {
        name: 'email',
        type: 'text',
        value: 'value',
        required: true,
        label: 'email'
    }

    it('Should render FormInput without label', () => {
        mockLabel = false;
        const wrapper = toJson(shallow(<FormInput handleChange={MockhandleChange} label={mockLabel} {...mockOtherProps}  />))
        expect(wrapper).toMatchSnapshot();
    });

    it('Should render FormInput with label', () => {
        mockLabel = true;
        const wrapper2 = toJson(shallow(<FormInput handleChange={MockhandleChange} label={mockLabel} {...mockOtherProps}  />))
        expect(wrapper2).toMatchSnapshot();
    });

    it('Should render FormInput with label and without shink class', () => {
        mockLabel = true;
        mockOtherProps.value = 0;
        const wrapper2 = toJson(shallow(<FormInput handleChange={MockhandleChange} label={mockLabel} {...mockOtherProps}  />))
        expect(wrapper2).toMatchSnapshot();
    });
});