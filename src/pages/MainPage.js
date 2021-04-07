import React, { useEffect } from 'react';
import useLogin from './../hooks/useLogin';
import { Redirect } from 'react-router-dom';

const MainPage = () => {
  const { data, mutate } = useLogin('login', () => window.login);

  if (!data) {
    return <Redirect to="/sign-up" />;
  }
  return (
    <div>
      <p>메인</p>
    </div>
  );
};

export default MainPage;
