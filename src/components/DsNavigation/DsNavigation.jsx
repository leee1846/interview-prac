import React from 'react';
import * as Styled from './DsNavigation.style';
import DsNavMenu from '../DsNavMenu/DsNavMenu';
import useLogin from './../../hooks/useLogin';
import { useHistory } from 'react-router-dom';

const DsNavigation = ({ menu, onClick, menuClicked, onLogout }) => {
  const history = useHistory();
  const { data: user } = useLogin('login', () => window.login);

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
          <button onClick={() => history.push('/mypage/order')}>
            마이페이지
          </button>
        </>
      )}
    </Styled.DesktopContainer>
  );
};

export default DsNavigation;
