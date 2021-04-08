import React from 'react';
import * as Styled from './DsNavMenu.style';

const DsNavMenu = ({ to, children, isclicked, onClick, index }) => {
  return (
    <>
      <Styled.LinkRouter
        onClick={(e) => onClick(index)}
        to={to}
        isclicked={isclicked}
      >
        {children}
      </Styled.LinkRouter>
    </>
  );
};

export default DsNavMenu;
