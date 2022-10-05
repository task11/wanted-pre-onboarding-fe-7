import { useEffect, useState } from 'react';

import { axios } from '../lib/axios';

import TodoWrapper from '../components/Todo/TodoWrapper/TodoWrapper';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';

import { StyledTodoForm } from './Todo.style';

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState('');

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const result = await axios.get('/todos');
      setTodos(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = ({ target: { value } }) => {
    setInputTodo(value);
  };

  const handleSubmitTodo = async () => {
    try {
      const result = await axios.post('/todos', {
        todo: inputTodo,
      });

      setTodos((currentState) => {
        return [
          ...currentState,
          result
        ];
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodo = async (todoId, newTodo, isCompleted) => {
    try {
      const result = await axios.put(`/todos/${todoId}`, {
        todo: newTodo,
        isCompleted: isCompleted
      });

      setTodos((currentState) => {
        const newTodos = [...currentState];
        const index = newTodos.findIndex((todo) => todoId === todo.id);

        newTodos[index] = result;

        return newTodos;
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      if (!window.confirm('정말로 삭제하시겠습니까?')) {
        return;
      }

      await axios.delete(`/todos/${todoId}`);

      setTodos((currentState) => {
        return currentState.filter(({ id }) => id !== todoId);
      });

      alert('삭제가 완료되었습니다.');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledTodoForm>
      <TodoWrapper>
        <TodoForm
          inputTodo={inputTodo}
          handleChange={handleChange}
          handleSubmitTodo={handleSubmitTodo}
        />
        <TodoList
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </TodoWrapper>
    </StyledTodoForm>
  );
};
