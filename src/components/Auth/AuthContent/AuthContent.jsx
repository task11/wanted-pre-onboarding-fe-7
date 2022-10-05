import { StyledTitle } from "./AuthContent.style";

export default function AuthContent({ title, children }) {
  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </div>
  );
};
