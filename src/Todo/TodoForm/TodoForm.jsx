import TodoButton from '../../components/Todo/TodoButton/TodoButton';
import TodoInput from '../../components/Todo/TodoInput/TodoInput';

import { StyledWrapper } from './TodoForm.style';

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
