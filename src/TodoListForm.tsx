import React, { useState } from 'react';

type TodoListFormProps = {
  createTodo: (label: string) => void 
}

export default function TodoListForm({ createTodo }: TodoListFormProps) {
  const [input, setInput] = useState("")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    createTodo(input)

    setInput("");
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} value={input} />
      <button type="submit">Create Todo</button>
    </form>
  )
}
