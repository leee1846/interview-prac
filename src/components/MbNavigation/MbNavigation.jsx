import React, { useState } from 'react';
import * as Styled from './MbNavigation.style';
import MbNavMenu from '../MbNavMenu/MbNavMenu';

const MbNavigation = ({ menu, onClick, menuClicked }) => {
  const [navOn, setNavOn] = useState(false);

  const MbNavHandeler = () => {
    setNavOn((prev) => !prev);
  };

  return (
    <Styled.MbContainer>
      <i class="fas fa-bars" onClick={MbNavHandeler}></i>
      <Styled.MbNavigation navOn={navOn}>
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
      </Styled.MbNavigation>
    </Styled.MbContainer>
  );
};

export default MbNavigation;
