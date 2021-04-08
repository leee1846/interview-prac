import React from 'react';
import useLogin from './../../hooks/useLogin';
import { useHistory } from 'react-router-dom';

const KakaoLogin = () => {
  const history = useHistory();
  const { mutate } = useLogin('login', () => window.login);

  const onKakaoClick = () => {
    window.Kakao.Auth.login({
      scope: 'profile, account_email',
      success: function (response) {
        window.Kakao.API.request({
          url: '/v1/api/talk/profile',
          success: (res) => {
            sessionStorage.setItem('user', res.nickName);
            mutate(res.nickName);
            history.push('/main');
          },
        });
      },
      fail: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <div>
      <button onClick={onKakaoClick}>카카오로 로그인 하시겠습니까?</button>
    </div>
  );
};

export default KakaoLogin;
