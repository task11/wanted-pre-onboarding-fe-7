import styled from 'styled-components';

import TodoButton from "../components/Todo/TodoButton";
import TodoInput from "../components/Todo/TodoInput";

export default function TodoForm({ inputTodo, handleChange, handleSubmitTodo }) {
  return (
    <StyledWrapper>
      <TodoInput
        onChange={handleChange}
        placeholder='할 일을 입력하세요'
        value={inputTodo}
      />
      <TodoButton onClick={handleSubmitTodo}>
        추가
      </TodoButton>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: 100%;
  justify-content: space-around;
`;