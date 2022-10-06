import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import TodoWrapper from '../components/Todo/TodoWrapper/TodoWrapper';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';

import { StyledLogout, StyledTodoForm } from './Todo.style';
import { RiLogoutBoxRLine } from '@react-icons/all-files/ri/RiLogoutBoxRLine';

import { API_TODO } from '../api';

export default function Todo() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState('');

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const result = await API_TODO.getTodos();
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
      const result = await API_TODO.submitTodo({
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
      const result = await API_TODO.updateTodo(todoId, {
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

      await API_TODO.deleteTodo(todoId);

      setTodos((currentState) => {
        return currentState.filter(({ id }) => id !== todoId);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onLogout = () => {
    if (!window.confirm('로그아웃 하시겠습니까?')) {
      return;
    }

    localStorage.removeItem('accessToken');
    navigate('/');
  };

  return (
    <StyledTodoForm>
      <TodoWrapper>
        <StyledLogout onClick={onLogout}>
          <RiLogoutBoxRLine />
        </StyledLogout>
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
