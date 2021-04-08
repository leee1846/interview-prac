import React, { useState } from 'react';
import MobileNav from '../MobileNav/MobileNav';
import Navigation from '../Navigation/Navigation';
import * as Styled from './Header.style';
import useLogin from './../../hooks/useLogin';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const menu = [
  { title: '메인', to: '/main' },
  { title: '두번째', to: '/second' },
  { title: '세번째', to: '/third' },
];

const Header = () => {
  const history = useHistory();
  const [menuClicked, setMenuClicked] = useState(0);
  const [navOn, setNavOn] = useState(false);
  const { data: user, mutate } = useLogin('login', () => window.login);

  const onClick = (index) => {
    setMenuClicked(index);
  };

  const MbNavHandeler = () => {
    setNavOn((prev) => !prev);
  };

  const onLogout = () => {
    sessionStorage.removeItem('user');
    mutate(sessionStorage.getItem('user'));
  };

  return (
    <Styled.Header>
      <Styled.Logo />
      <nav>
        {/* 데스크탑버전 */}
        <Styled.DesktopContainer>
          {menu.map((mn, index) => {
            return (
              <Navigation
                onClick={onClick}
                key={index}
                to={mn.to}
                index={index}
                isclicked={index === menuClicked ? 'true' : ''}
              >
                {mn.title}
              </Navigation>
            );
          })}
          {user && (
            <>
              <div>{user}</div>
              <button onClick={onLogout}>로그아웃</button>
            </>
          )}
        </Styled.DesktopContainer>

        {/* 모바일버전 */}
        <Styled.MbContainer>
          <i class="fas fa-bars" onClick={MbNavHandeler}></i>
          <Styled.MbNavigation navOn={navOn}>
            {menu.map((mn, index) => {
              return (
                <MobileNav
                  onClick={onClick}
                  key={index}
                  to={mn.to}
                  index={index}
                  isclicked={index === menuClicked ? 'true' : ''}
                  setNavOn={setNavOn}
                >
                  {mn.title}
                </MobileNav>
              );
            })}
          </Styled.MbNavigation>
        </Styled.MbContainer>
      </nav>
    </Styled.Header>
  );
};

export default Header;
