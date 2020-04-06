import { shallow } from 'enzyme';
import React from 'react';
import { ShopPage } from '../shop.component';
import toJson from 'enzyme-to-json';

describe("Shpe page", () => {
 
    let wrapper;
    let props;
    let useEffect;

    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };
    beforeEach( () => { 
        useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());
        props = {
            match : { 
                params: {id: 1},
                isExact: true,
                path: "",
                url: ""
            },
            fetchCollectionsStart: jest.fn().mockResolvedValue({ type: 'FETCH_COLLECTIONS_START'}),
        };
        mockUseEffect();
        mockUseEffect();
        wrapper = toJson(shallow(<ShopPage {...props} />));
    });

    describe("Shpe page", () => {
        it('expect to render shop page', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });

    it('expect to call callback on shallow shop page component', () => {
        expect(props.fetchCollectionsStart).toHaveBeenCalled();
    });
});