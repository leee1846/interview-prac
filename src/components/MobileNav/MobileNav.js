import React, { useState } from 'react';
import * as Styled from './MobileNav.style';

const MobileNav = ({ to, children, isclicked, onClick, index, setNavOn }) => {
  const linkHandeler = (e, index) => {
    onClick(index);
    setNavOn(false);
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
