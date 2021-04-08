import React, { useState } from 'react';
import * as Styled from './SignUp.style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import useSignUp from '../../hooks/useSignUp';
import { useEffect } from 'react';

const SignUp = () => {
  const history = useHistory();
  const [emailValue, setEmailValue] = useState('');
  const [isEmailOk, setIsEmailOk] = useState('');
  const { data: userData, mutate } = useSignUp('signUp', () => window.signUp);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    pw: yup.string().min(7).max(10).required(),
    checkPw: yup
      .string()
      .oneOf([yup.ref('pw'), null])
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    mutate(data);
  };

  const emailValidation = () => {
    const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (emailRegex.test(emailValue)) {
      setIsEmailOk(true);
    } else {
      setIsEmailOk(false);
    }
  };

  useEffect(() => {
    if (userData) history.push('login');
  }, [userData]);

  return (
    <Styled.Container>
      <Styled.Form onSubmit={handleSubmit(submitForm)}>
        <Styled.Label htmlFor="email">이메일</Styled.Label>
        <input type="email" {...register('email')} />
        <p>{errors.email && '이메일형식이 맞지 않습니다'}</p>
        <Styled.Label htmlFor="name">이름</Styled.Label>
        <input type="text" {...register('name')} />
        <p>{errors.name && '이름 형식이 맞지 않습니다'}</p>
        <Styled.Label htmlFor="pw">비밀번호</Styled.Label>
        <input type="password" {...register('pw')} />
        <p>{errors.pw && '비밀번호 형식이 맞지 않습니다'}</p>
        <Styled.Label htmlFor="checkPw">비밀번호 확인</Styled.Label>
        <input type="password" {...register('checkPw')} />
        <p>{errors.checkPw && '비밀번호가 맞지 않습니다'}</p>
        <button type="submit">회원가입</button>
        <Styled.EmailTest
          type="text"
          placeholder="이메일 validation test input입니다"
          onChange={(e) => setEmailValue(e.target.value)}
          onBlur={emailValidation}
          isEmailOk={isEmailOk}
        />
      </Styled.Form>
    </Styled.Container>
  );
};

export default SignUp;
