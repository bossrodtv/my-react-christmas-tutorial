/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";

export type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export function Todos() {
  const { todos, loading } = useFetchTodos();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export function useFetchTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTodos = async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await response.json();
    setTodos(json);
    setLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return { todos, loading };
}
