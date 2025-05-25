import { useEffect, useState } from "react";
import SingleItem from "./SingleItem";

type FormData = {
  task: string;
  date: string;
  id: number;
  isCompleted: boolean;
};

const List = ({ filter }: { filter: "all" | "complete" | "incomplete" }) => {
  const [items, setItems] = useState<FormData[]>([]);

  useEffect(() => {
    const todos: FormData[] = JSON.parse(localStorage.getItem("todo") || "[]");
    setItems(todos);
  }, []);

  useEffect(() => {
    const todos: FormData[] = JSON.parse(localStorage.getItem("todo") || "[]");
    let filtered = todos;
    if (filter === "complete") {
      filtered = todos.filter((todo) => todo.isCompleted);
    } else if (filter === "incomplete") {
      filtered = todos.filter((todo) => !todo.isCompleted);
    }
    setItems(filtered);
  }, [filter]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items.length > 0 ? (
        items.map((todo) => <SingleItem key={todo.id} {...todo} />)
      ) : (
        <p className="text-gray-500 text-center col-span-full">
          No tasks to display.
        </p>
      )}
    </div>
  );
};

export default List;
