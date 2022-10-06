import { StyledButton } from "./TodoButton.style";

export default function TodoButton({ children, onClick, ...rest }) {
  return (
    <StyledButton {...rest} onClick={onClick}>{children}</StyledButton>
  );
}
