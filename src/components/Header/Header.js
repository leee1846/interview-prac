import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import * as Styled from './Header.style';

const menu = [
  { title: '메인', to: '/main' },
  { title: '두번째', to: '/second' },
  { title: '세번째', to: '/third' },
];

const Header = () => {
  const [menuClicked, setMenuClicked] = useState('');

  const onClick = (e, index) => {
    setMenuClicked(index);
  };
  return (
    <Styled.Header>
      <Styled.Logo />
      <nav>
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
      </nav>
    </Styled.Header>
  );
};

export default Header;
