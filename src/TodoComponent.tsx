import React from 'react'
import type { todo } from "./todo";

type TodoProps = {
  todo: todo;
  checkTodo: (todo: todo, checked: boolean) => void;
}

export default function Todo({ todo, checkTodo }: TodoProps) {
  return (<li>
    <input 
      type="checkbox" 
      defaultChecked={todo.checked} 
      onChange={(e) => checkTodo(todo, e.target.checked)}
      id={todo.id} />

    <label htmlFor={todo.id}>{todo.label}</label>
  </li>)
}
