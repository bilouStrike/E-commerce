import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

import SignInSignUp from './pages/signIn-signup-page/signIn-signUp.component';
import Header from './components/header/header.component';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    /*this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
        if( userAuth ) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot( snapShot => {
            setCurrentUser({
                  currentUser: {
                      id: snapShot.id,
                      ...snapShot.data()
                  }
              })
          });

        } else {
          setCurrentUser({currentUser:userAuth});
        }
      }
    )*/
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(this.props.currentUser);
    return (
      <div className="app-container">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={ () => this.props.currentUser ? ( <Redirect to='/'/> ) : ( <SignInSignUp/>  )} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ({
  currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(App);
