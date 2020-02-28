import React from 'react';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/signIn-signup-page/signIn-signUp.component';

import Header from './components/header/header.component';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}
export default App;
