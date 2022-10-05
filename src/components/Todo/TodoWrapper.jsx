import styled from 'styled-components';

import TodoTitle from "./TodoTitle";

export default function TodoWrapper({ children }) {
  return (
    <StyledPositioner>
      <TodoTitle />
      <StyledContents>
        {children}
      </StyledContents>
    </StyledPositioner>
  );
};


const StyledPositioner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 2rem;
  width: 100%;
  height: 100%;
`;

const StyledContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;