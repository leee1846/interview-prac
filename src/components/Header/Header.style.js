import Styled from 'styled-components';
import logo from '../../utils/images/logo.jpg';

export const Header = Styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
  box-shadow:0 3px 10px rgb(211, 211, 211);
`;

export const Logo = Styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center;
  width:30px;
  height:30px;
`;
