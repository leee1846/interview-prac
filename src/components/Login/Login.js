import React, { useState, useEffect } from 'react';
import useSignUp from './../../hooks/useSignUp';
import useLogin from './../../hooks/useLogin';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setpasswordValue] = useState('');
  const { data: userData, mutate: userMutate } = useSignUp(
    'signUp',
    () => window.signUp,
  );
  const { data: isLogin, mutate: loginMutate } = useLogin(
    'login',
    () => window.login,
  );

  const onEmailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const onPasswordChange = (e) => {
    setpasswordValue(e.target.value);
  };

  const onLogin = (e) => {
    e.preventDefault();
    if (userData.email === emailValue && userData.pw === passwordValue) {
      loginMutate(userData.name);
    }
  };

  useEffect(() => {
    if (isLogin && isLogin === userData.name) {
      history.push('/main');
    }
  }, [isLogin]);

  return (
    <form onSubmit={onLogin}>
      <label for="loginEmail">이메일</label>
      <input
        type="email"
        name="loginEmail"
        onChange={onEmailChange}
        value={emailValue}
      />
      <label for="loginPw">비밀번호</label>
      <input
        type="password"
        name="loginPw"
        onChange={onPasswordChange}
        value={passwordValue}
      />
      <button type="submit">로그인</button>
    </form>
  );
};

export default Login;
