import React from 'react';
import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <h3>Welcome to my Homepage</h3>
    <Directory />
  </HomePageContainer>
);
export default HomePage;
