import Styled from 'styled-components';

export const DesktopContainer = Styled.div`
display:flex;
  @media ${({ theme }) => theme.mobileSize} {
    display:none
  }
`;
