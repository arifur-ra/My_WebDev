import ListAltIcon from "@material-ui/icons/ListAlt"
import "./App.css"
import TodoApp from "./ToDoApp/TodoApp"

const App = () => {
  return (
    <div className="todoApp">
      <h2>
        <ListAltIcon className="icon" />
        Todo List
      </h2>
      <TodoApp />
    </div>
  )
}

export default App
