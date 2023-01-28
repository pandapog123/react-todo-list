import useTodos from './useTodos';
import TodoListForm from './TodoListForm';
import { todo } from './todo';
import Todo from './TodoComponent';

function App() {
  const [todos, setTodos] = useTodos();

  function checkTodo(todo: todo, checked: boolean) {
    let indexOfTodo = todos.indexOf(todo);

    todos[indexOfTodo].checked = checked;
    setTodos(() => todos)

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function createTodo(label: string) {
    setTodos([...todos, {
      label,
      checked: false,
      id: Math.random().toString()
    }])

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function removeAllCheckedTodos() {
    setTodos((prev) => prev.filter(todo => !todo.checked))

    localStorage.setItem("todos", JSON.stringify(todos.filter(todo => !todo.checked)));
  }

  return (
    <div className="App">
      <h1>React Todo List</h1>

      <TodoListForm createTodo={createTodo}/>

      <ul style={{ listStyle: "none" }}>
        {todos.map(todo => {
          return <Todo key={todo.id} todo={todo} checkTodo={checkTodo} />
        })}
      </ul>

      <button onClick={removeAllCheckedTodos}>Remove all Checked</button>
    </div>
  )
}

export default App
