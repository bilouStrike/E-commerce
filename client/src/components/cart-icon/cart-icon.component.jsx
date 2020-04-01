import React from 'react';
import { connect } from 'react-redux';
import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg.svg';

import './cart-icon.styles.scss';

export const CartIcon = ({ toogleCartHidden, itemCount }) => (
  <div id="cart-icon" className="cart-icon" onClick={toogleCartHidden}>
    <ShopingIcon className="shopping-icon" />
    <span className="item-count"> {itemCount} </span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toogleCartHidden: () => dispatch(toogleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
