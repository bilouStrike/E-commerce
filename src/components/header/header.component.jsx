import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../utility/firebase/firebase.utils';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from './../cart-dropdown/cart-dropdown.component';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';

import './header.styles.scss';

const Header = ( {currentuser, hidden} ) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      { 
      currentuser ?
      <div onClick={ ()=> auth.signOut()}> SIGN OUT </div>
      :
      <Link className='option' to='/signin'> SIGN IN </Link>
      }
      <CartIcon/>
    </div>
    {
      hidden ? null : <CartDropdown/>
    }
    
  </div>
);

const mapStateToProps = state => ({ // state -> root-reducer
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state)
});

export default connect(mapStateToProps)(Header);