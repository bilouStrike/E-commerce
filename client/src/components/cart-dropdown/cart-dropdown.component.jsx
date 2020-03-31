import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from './../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span> Your cart is empty </span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toogleCartHidden());
      }}
    >
      {' '}
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStatetoPorps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStatetoPorps)(CartDropdown));
