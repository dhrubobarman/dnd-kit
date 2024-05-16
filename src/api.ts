import { Todo, User } from "./types";

export const api = async <T>(url: string): Promise<T | undefined> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = async () => {
  return await api<User[]>("https://jsonplaceholder.org/users");
};

export const getTodos = async () => {
  return await api<Todo[]>("https://jsonplaceholder.typicode.com/todos");
};
