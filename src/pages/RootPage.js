import React from 'react';
import MainPage from './MainPage';
import { Route, Redirect, Switch } from 'react-router-dom';
import ThirdPage from './ThirdPage';
import SecondPage from './SecondPage';
import Header from './../components/Header/Header';
import SignUp from './../components/SignUp/SignUp';
import Login from './../components/Login/Login';
import MyPage from './../components/MyPage/MyPage';
import KakaoLogin from './../components/KakaoLogin/KakaoLogin';

const RootPage = () => {
  return (
    <>
      <Header />
      <Switch>
        <Redirect exact path="/" to="/main" />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/second" component={SecondPage} />
        <Route exact path="/third" component={ThirdPage} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/kakaoLogin" component={KakaoLogin} />
        <Route exact path="/mypage/order" component={MyPage} />
      </Switch>
    </>
  );
};

export default RootPage;
