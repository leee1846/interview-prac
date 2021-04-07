import React, { useState } from 'react';
import * as Styled from './MobileNav.style';

const MobileNav = ({ to, children, isclicked, onClick, index }) => {
  const linkHandeler = (e, index) => {
    onClick(index);
  };

  return (
    <>
      <Styled.NavLink
        onClick={(e) => linkHandeler(e, index)}
        to={to}
        isclicked={isclicked}
      >
        {children}
      </Styled.NavLink>
    </>
  );
};

export default MobileNav;
