import styled from 'styled-components';

import TodoItem from "./TodoItem";

export default function TodoList(
  { todos,
    updateTodo,
    deleteTodo,
  }) {

  return (
    <StyledUl>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
