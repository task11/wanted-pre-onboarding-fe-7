import styled from 'styled-components';

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

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-size: 1rem;  
  margin-bottom: 0.25rem;
`;

const StyledInput = styled.input`
    width: 350px;
    border: 1px solid black;
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;
