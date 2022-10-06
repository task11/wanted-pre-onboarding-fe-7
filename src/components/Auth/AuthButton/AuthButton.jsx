import { StyledWrapper } from "./AuthButton.style";

export default function AuthButton({ children, onClick, ...rest }) {
  return (
    <StyledWrapper onClick={onClick} {...rest}>
      {children}
    </StyledWrapper>
  );
};


