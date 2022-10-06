import styled from 'styled-components';

export const StyledTodoForm = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  width: 600px;
  height: 500px;
  border-radius: 20px;
`;

export const StyledLogout = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2.5rem;
  color: ${props => props.theme.accentColor};
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;

  &:hover{
    color: ${props => props.theme.textColor}
  }
`;