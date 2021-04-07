import Styled from "styled-components";

export const Test = Styled.p`
  color:${({ theme }) => theme.colorB};

  @media ${({ theme }) => theme.mobileSize} {
    color: black;
  }
`;
