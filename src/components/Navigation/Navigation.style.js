import Styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkRouter = Styled(Link)`
  color:${({ isclicked }) => (isclicked ? `blue` : `gray`)};
  margin: 0 5px;

  @media ${({ theme }) => theme.mobileSize}{
    display:none;
  }
`;
