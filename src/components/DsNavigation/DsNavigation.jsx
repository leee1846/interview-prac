import React, { useState } from 'react';
import * as Styled from './DsNavigation.style';
import DsNavMenu from '../DsNavMenu/DsNavMenu';
import useLogin from './../../hooks/useLogin';

const DsNavigation = ({ menu, onClick, menuClicked, onLogout }) => {
  const { data: user, mutate } = useLogin('login', () => window.login);

  return (
    <Styled.DesktopContainer>
      {menu.map((mn, index) => {
        return (
          <DsNavMenu
            onClick={onClick}
            key={index}
            to={mn.to}
            index={index}
            isclicked={index === menuClicked ? 'true' : ''}
          >
            {mn.title}
          </DsNavMenu>
        );
      })}
      {user && (
        <>
          <div>{user}</div>
          <button onClick={onLogout}>로그아웃</button>
        </>
      )}
    </Styled.DesktopContainer>
  );
};

export default DsNavigation;
