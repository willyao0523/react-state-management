import { nanoid } from "nanoid";
import { proxy } from "valtio";

export const state = proxy({
  count1: 0,
  count2: 0,
});

export const todoState = proxy({
  todos: [],
});

export const createTodo = (title) => {
  todoState.todos.push({
    id: nanoid(),
    title,
    done: false,
  });
};

export const removeTodo = (id) => {
  const index = todoState.todos.findIndex((item) => item.id === id);
  todoState.todos.splice(index, 1);
};

export const toggleTodo = (id) => {
  const index = todoState.todos.findIndex((item) => item.id === id);
  todoState.todos[index].done = !todoState.todos[index].done;
};
