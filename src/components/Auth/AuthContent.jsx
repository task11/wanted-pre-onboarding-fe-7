import styled from 'styled-components';

export default function AuthContent({ title, children }) {
  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </div>
  );
};

const StyledTitle = styled.div`
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    text-align: center;
`;