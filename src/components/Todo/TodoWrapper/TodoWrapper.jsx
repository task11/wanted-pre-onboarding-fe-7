import TodoTitle from "../TodoTitle/TodoTitle";

import { StyledContents, StyledPositioner } from "./TodoWrapper.style";

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
