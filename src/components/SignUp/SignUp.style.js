import Styled from 'styled-components';

export const Container = Styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const Form = Styled.form`
  width:50vw;
  display:flex;
  flex-direction:column;
`;

export const Label = Styled.label`
  margin-top:10px;
`;

export const EmailTest = Styled.input`
  border:1px solid ${({ isEmailOk }) => isEmailOk === false && 'red'};
`;
