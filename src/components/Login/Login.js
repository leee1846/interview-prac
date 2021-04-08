import React, { useState, useEffect } from 'react';
import useSignUp from './../../hooks/useSignUp';
import useLogin from './../../hooks/useLogin';
import { useHistory } from 'react-router-dom';
import * as Styled from './Login.style';

const Login = () => {
  const history = useHistory();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setpasswordValue] = useState('');
  const [dataMatch, setDataMatch] = useState('');
  const { data: userData, mutate: userMutate } = useSignUp(
    'signUp',
    () => window.signUp,
  );
  const { data: user, mutate } = useLogin('login', () => window.login);

  const onEmailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const onPasswordChange = (e) => {
    setpasswordValue(e.target.value);
  };

  const onLogin = (e) => {
    e.preventDefault();
    if (userData?.email === emailValue && userData?.pw === passwordValue) {
      sessionStorage.setItem('user', userData.name);
      mutate(sessionStorage.getItem('user'));
    }
  };

  useEffect(() => {
    if (user && user === userData?.name) {
      history.push('/main');
    }
  }, [user]);

  return (
    <Styled.Container>
      <Styled.Form onSubmit={onLogin}>
        <Styled.Label for="loginEmail">이메일</Styled.Label>
        <input
          type="email"
          name="loginEmail"
          onChange={onEmailChange}
          value={emailValue}
        />
        <Styled.Label for="loginPw">비밀번호</Styled.Label>
        <input
          type="password"
          name="loginPw"
          onChange={onPasswordChange}
          value={passwordValue}
        />
        <p>{!user && '정보가 존재하지 않습니다'}</p>
        <button type="submit">로그인</button>
        <button onClick={() => history.push('/sign-up')}>회원가입</button>
      </Styled.Form>
    </Styled.Container>
  );
};

export default Login;
