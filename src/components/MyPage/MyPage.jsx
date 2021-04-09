import React from 'react';
import useLogin from './../../hooks/useLogin';
import { useHistory } from 'react-router-dom';

const MyPage = () => {
  const history = useHistory();
  const { data, mutate } = useLogin('login', () => window.login);

  if (!data) {
    history.push('/login');
  }

  return (
    <div>
      <p>마이페이지</p>
    </div>
  );
};

export default MyPage;
