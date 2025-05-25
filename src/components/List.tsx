import { useEffect, useState } from "react";
import SingleItem from "./SingleItem";
type FormData = {
  task: string;
  date: string;
  id: number;
};
const List = () => {
  const todos: FormData[] = JSON.parse(localStorage.getItem("todo") || "[]");
  const [item, setItem] = useState<FormData[]>([]);
  useEffect(() => {
    setItem(todos);
  }, []);
  return (
    <>
      {item
        ? item?.map((todo: FormData) => {
            return (
              <SingleItem key={todo.id} task={todo.task} date={todo.date} />
            );
          })
        : ""}
    </>
  );
};
export default List;
