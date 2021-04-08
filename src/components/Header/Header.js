import React, { useState } from 'react';
import * as Styled from './Header.style';
import useLogin from './../../hooks/useLogin';
import DsNavigation from '../DsNavigation/DsNavigation';
import MbNavigation from '../MbNavigation/MbNavigation';

const menu = [
  { title: '메인', to: '/main' },
  { title: '두번째', to: '/second' },
  { title: '세번째', to: '/third' },
];

const Header = () => {
  const [menuClicked, setMenuClicked] = useState(0);
  const { data: user, mutate } = useLogin('login', () => window.login);

  const onClick = (index) => {
    setMenuClicked(index);
  };

  const onLogout = () => {
    sessionStorage.removeItem('user');
    mutate(sessionStorage.getItem('user'));
  };

  return (
    <Styled.Header>
      <Styled.Logo />
      <nav>
        {/* 데스크탑 */}
        <DsNavigation
          menu={menu}
          onClick={onClick}
          menuClicked={menuClicked}
          onLogout={onLogout}
        />

        {/* 모바일 */}
        <MbNavigation
          menu={menu}
          onClick={onClick}
          menuClicked={menuClicked}
          onLogout={onLogout}
        />
      </nav>
    </Styled.Header>
  );
};

export default Header;
