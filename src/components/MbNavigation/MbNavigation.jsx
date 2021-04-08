import React, { useState } from 'react';
import * as Styled from './MbNavigation.style';
import MbNavMenu from '../MbNavMenu/MbNavMenu';
import useLogin from './../../hooks/useLogin';

const MbNavigation = ({ menu, onClick, menuClicked, onLogout }) => {
  const { data: user, mutate } = useLogin('login', () => window.login);
  const [navOn, setNavOn] = useState(false);

  const MbNavHandeler = () => {
    setNavOn((prev) => !prev);
  };

  const MbOnLogout = () => {
    onLogout();
    setNavOn((prev) => !prev);
  };

  return (
    <Styled.MbContainer>
      <i class="fas fa-bars" onClick={MbNavHandeler}></i>
      <Styled.MbNavigation navOn={navOn}>
        <p>{user}</p>
        {menu.map((mn, index) => {
          return (
            <MbNavMenu
              onClick={onClick}
              key={index}
              to={mn.to}
              index={index}
              isclicked={index === menuClicked ? 'true' : ''}
              setNavOn={setNavOn}
            >
              {mn.title}
            </MbNavMenu>
          );
        })}
        <button onClick={MbOnLogout}>로그아웃</button>
      </Styled.MbNavigation>
    </Styled.MbContainer>
  );
};

export default MbNavigation;
