import styled from 'styled-components';

export const StyledAuthForm = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  justify-content: center;
  width: 500px;
  height: 500px;
  border-radius: 20px;
`;

export const StyledButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.accentColor};
  font-size: 1.4rem;
  cursor: pointer;
  &:hover{
    color: ${props => props.theme.textColor};
  }
`;
