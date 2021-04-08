import Styled from 'styled-components';

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
