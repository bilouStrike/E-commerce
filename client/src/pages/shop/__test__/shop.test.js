import { shallow } from 'enzyme';
import React from 'react';
import { ShopPage } from '../shop.component';
import toJson from 'enzyme-to-json';

describe("Shpe page", () => {
    const useEffect = jest.spyOn(React, "useEffect");
    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };
    let wrapper;
    let props;
    beforeEach( () => {  
        mockUseEffect();
        mockUseEffect();
        props = {
            match : { 
                params: {id: 1},
                isExact: true,
                path: "",
                url: ""
            },
            fetchCollectionsStart: jest.fn(),
        };
        wrapper = toJson(shallow(<ShopPage {...props} />));
    });

    describe("Shpe page", () => {
        it('expect to render shop page', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });

    /*it('expect to call callback on shallow shop page component', () => {
        //const fetchCollectionStart = jest.fn();
        expect(props.fetchCollectionStart).toHaveBeenCalled();
    });*/
});