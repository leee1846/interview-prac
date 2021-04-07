import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import useLogin from './../hooks/useLogin';

const MainPage = () => {
  const { data: user, mutate } = useLogin('login', () => window.login);

  if (!user) {
    return <Redirect to="/sign-up" />;
  }
  return (
    <div>
      <p>메인</p>
    </div>
  );
};

export default MainPage;
