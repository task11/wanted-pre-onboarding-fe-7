import { StyledInput, StyledLabel, StyledWrapper } from "./InputWithLabel.style";

export default function InputWithLabel({ label, ...rest }) {
  return (
    <StyledWrapper>
      <StyledLabel htmlFor={label}>
        {label}
      </StyledLabel>
      <StyledInput id={label} {...rest} />
    </StyledWrapper>
  );
};
