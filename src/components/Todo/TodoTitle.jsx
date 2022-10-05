import styled from 'styled-components';

export default function TodoTitle() {
  return (
    <StyledTitleWrapper>
      <StyledTitle>Todo</StyledTitle>
    </StyledTitleWrapper>
  );
};


const StyledTitleWrapper = styled.div`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledTitle = styled.div`
    font-size: 3.6rem;
    letter-spacing: 5px;
    text-decoration: none;
    font-weight: bold;
`;