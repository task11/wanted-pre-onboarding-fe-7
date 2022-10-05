import styled from 'styled-components';

export default function TodoButton({ children, onClick, ...rest }) {
  return (
    <StyledButton {...rest} onClick={onClick}>{children}</StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: ${props => props.theme.textColor};
  color: white;
  border: none;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;

  &:hover{
    background-color  : ${props => props.theme.accentColor} ;
  }
`;