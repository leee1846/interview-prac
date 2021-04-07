import React from 'react';
import MainPage from './MainPage';
import { Route, Redirect, Switch } from 'react-router-dom';
import ThirdPage from './ThirdPage';
import SecondPage from './SecondPage';
import Header from './../components/Header/Header';

const RootPage = () => {
  return (
    <>
      <Header />
      <Switch>
        <Redirect exact path="/" to="/main" />
        <Route path="/main" component={MainPage} />
        <Route path="/second" component={SecondPage} />
        <Route path="/third" component={ThirdPage} />
      </Switch>
    </>
  );
};

export default RootPage;
