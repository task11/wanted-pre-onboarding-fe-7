import { axios } from "../lib/axios";

export const API_TODO = {
  getTodos: async function () {
    return await axios.get('/todos');
  },
  updateTodo: async function (id, body = {}) {
    return await axios.put(`/todos/${id}`, {
      todo: body.newTodo,
      isCompleted: body.isCompleted
    });
  },
  deleteTodo: async function (id) {
    return await axios.delete(`/todos/${id}`);
  },
};
