import TodoItem from '../TodoItem/TodoItem';

import { StyledUl } from './TodoList.style';

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
