import { create } from "zustand";

export type StoreState = {
  count1: number;
  count2: number;
  total: number;
  inc1: () => void;
  inc2: () => void;
};

export const useStore = create<StoreState>((set) => ({
  count1: 0,
  count2: 0,
  total: 0,
  inc1: () =>
    set((prev) => ({
      ...prev,
      count1: prev.count1 + 1,
      total: prev.count1 + 1 + prev.count2,
    })),
  inc2: () =>
    set((prev) => ({
      ...prev,
      count2: prev.count2 + 1,
      total: prev.count1 + prev.count2 + 1,
    })),
}));

export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

export type TodoStoreState = {
  todos: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

let nextId = 0;

export const useTodoStore = create<TodoStoreState>((set) => ({
  todos: [],
  addTodo: (title) =>
    set((prev) => ({
      todos: [
        ...prev.todos,
        {
          id: ++nextId,
          title,
          done: false,
        },
      ],
    })),
  removeTodo: (id) =>
    set((prev) => ({
      todos: prev.todos.filter((todo) => todo.id !== id),
    })),
  toggleTodo: (id) => {
    set((prev) => ({
      todos: prev.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      ),
    }));
  },
}));
