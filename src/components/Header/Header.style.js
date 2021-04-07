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

export const MbContainer = Styled.div`
  display:none;

  @media ${({ theme }) => theme.mobileSize} {
    display:initial;

    i{
      cursor:pointer;
    }
  }
`;

export const MbNavigation = Styled.div`
  position:absolute;
  top:${({ navOn }) => (navOn ? 0 : '-100vh')};
  left:0;
  width:100vw;
  height:100vh;
  background-color:rgba(112, 112, 112, 0.9);
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  transition:.5s linear;
`;
