import { todo } from "./todo";
import { useState, useEffect } from "react";

function validateTodos(todos: any[]) {
  let isValid = true;

  todos.forEach((todo) => {
    if (typeof todo === "object") {
      if (!("label" in todo && "id" in todo && "checked" in todo)) {
        isValid = false;
      }
    }
  });

  return isValid;
}

export default function useTodos(): [
  todo[],
  React.Dispatch<React.SetStateAction<todo[]>>
] {
  const [todos, setTodos] = useState<todo[]>([]);

  // useEffect(() => {
  //   console.log(todos, "effect", localStorage.getItem("todos"));
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  useEffect(() => {
    let localTodos = localStorage.getItem("todos");

    if (localTodos) {
      let parsedLocalTodos = JSON.parse(localTodos);

      if (parsedLocalTodos instanceof Array) {
        if (validateTodos(parsedLocalTodos)) {
          setTodos(parsedLocalTodos);
        }
      }
    }
  }, []);

  return [todos, setTodos];
}
