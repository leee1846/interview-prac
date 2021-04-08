import React from 'react';
import { Redirect } from 'react-router-dom';
import useLogin from './../hooks/useLogin';

const MainPage = () => {
  const { data: user } = useLogin('login', () => window.login);

  if (!user) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <p>메인</p>
    </div>
  );
};

export default MainPage;
