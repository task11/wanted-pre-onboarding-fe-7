import styled from 'styled-components';

export default function TodoInput({ ...rest }) {
  return (
    <StyledInput {...rest} />
  );
};

const StyledInput = styled.input`
  width: 80%;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  line-height: 2.5rem;
  font-size: 1.4rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;
