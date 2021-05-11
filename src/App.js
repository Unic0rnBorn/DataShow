import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './modules/Header';
import Content from './modules/Content';
import './app.css';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Route exact path="/">
        <Redirect to="/userList" />
      </Route>
      <Content />
    </>
  );
};

export default hot(App);
