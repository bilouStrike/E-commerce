import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../utility/firebase/firebase.utils';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from './../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink  } from './header.styles';

const Header = ( {currentuser, hidden} ) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      { 
      currentuser ?
      <OptionLink as='div' onClick={ ()=> auth.signOut()}> SIGN OUT </OptionLink>
      :
      <OptionLink to='/signin'> SIGN IN </OptionLink>
      }
      <CartIcon/>
    </OptionsContainer>
    {
      hidden ? null : <CartDropdown/>
    }
  </HeaderContainer>
);

const mapStateToProps = state => ({ // state -> root-reducer
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state)
});

export default connect(mapStateToProps)(Header);