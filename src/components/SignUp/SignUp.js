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
    history.push('/login');
  };

  return (
    <Styled.Container>
      <Styled.Form onSubmit={handleSubmit(submitForm)}>
        <Styled.Label for="email">이메일</Styled.Label>
        <input type="email" name="email" {...register('email')} />
        <p>{errors.email && '이메일형식이 맞지 않습니다'}</p>
        <Styled.Label for="name">이름</Styled.Label>
        <input type="text" name="name" {...register('name')} />
        <p>{errors.name && '이름 형식이 맞지 않습니다'}</p>
        <Styled.Label for="pw">비밀번호</Styled.Label>
        <input type="text" name="pw" {...register('pw')} />
        <p>{errors.pw && '비밀번호 형식이 맞지 않습니다'}</p>
        <Styled.Label for="checkPw">비밀번호 확인</Styled.Label>
        <input type="text" name="checkPw" {...register('checkPw')} />
        <p>{errors.checkPw && '비밀번호가 맞지 않습니다'}</p>
        <button type="submit">회원가입</button>
      </Styled.Form>
    </Styled.Container>
  );
};

export default SignUp;
