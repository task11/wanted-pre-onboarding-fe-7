import { useState } from 'react';

import { useToggleState } from '../../utils/hooks';

import TodoButton from '../../components/Todo/TodoButton/TodoButton';

import {
  StyledButtonWrapper,
  StyledInput,
  StyledLi,
  StyledTodo
} from './TodoItem.style';

export default function TodoItem(
  { todo,
    updateTodo,
    deleteTodo,
  }) {

  const { toggleState, handleToggleState } = useToggleState();
  const [newInputTodo, setNewInputTodo] = useState(todo.todo);

  const handleModifyButton = () => {
    handleToggleState();
  };

  const handleNewInputTodo = ({ target: { value } }) => {
    setNewInputTodo(value);
  };

  const submitUpdateTodo = () => {
    updateTodo(todo.id, newInputTodo, todo.isCompleted);
    handleModifyButton();
  };

  return (
    <StyledLi>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => updateTodo(todo.id, newInputTodo, !todo.isCompleted)}
      />
      {
        !toggleState ?
          <StyledTodo>
            {todo.todo}
          </StyledTodo>
          :
          <StyledInput
            value={newInputTodo}
            onChange={handleNewInputTodo}
          />
      }
      <StyledButtonWrapper>
        {
          !toggleState ?
            <>
              <TodoButton onClick={handleModifyButton}>수정</TodoButton>
              <TodoButton onClick={() => deleteTodo(todo.id)}>삭제</TodoButton>
            </>
            :
            <>
              <TodoButton onClick={submitUpdateTodo}>제출</TodoButton>
              <TodoButton onClick={handleModifyButton}>취소</TodoButton>
            </>
        }
      </StyledButtonWrapper>
    </StyledLi >
  );
};
