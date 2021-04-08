import Styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = Styled(Link)`
  color:${({ isclicked }) => (isclicked ? 'blue' : 'white')};
  margin:10px 0;
  cursor:pointer;
`;
