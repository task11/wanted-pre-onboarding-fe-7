import { axios } from "../lib/axios";

export const API_TODO = {
  getTodos: async function () {
    return await axios.get('/todos');
  },
  submitTodo: async function (body = {}) {
    return await axios.post('/todos', body);
  },
  updateTodo: async function (id, body = {}) {
    return await axios.put(`/todos/${id}`, body);
  },
  deleteTodo: async function (id) {
    return await axios.delete(`/todos/${id}`);
  },
};
