import './App.css'
import TodoList from './components/TodoList'
// import data from './data.json'
import TodoForm from './components/TodoForm'
import { useItems } from './hooks/useItems'
import { useFilter } from './hooks/useFilter'

function App () {
  const { todos, onCompleted, onDeleteItem, addTodoItem } = useItems()
  const { optionChoice, filteredTodos } = useFilter({ todos })

  return (
    <>
      <div className='container'>
        <header>
          <h1>Todo List</h1>
        </header>
        <TodoForm
          addTodoItem={addTodoItem}
          optionChoice={optionChoice}
        />
        {
          todos.length > 0 && (
            <TodoList
              filteredTodos={filteredTodos}
              onCompleted={onCompleted}
              onDeleteItem={onDeleteItem}
            />)
        }
      </div>
    </>
  )
}

export default App
