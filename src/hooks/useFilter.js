import { useEffect, useState } from 'react'
import save from '../logic/save'
export function useFilter ({ todos }) {
  const [selected, setSelected] = useState('All')
  const [filteredTodos, setFilteredTodos] = useState([])

  const optionChoice = (option) => {
    setSelected(option)
  }

  const filterHandler = () => {
    switch (selected) {
      case 'completed':
        setFilteredTodos([...todos].filter((item) => item.completed))
        break
      case 'uncompleted':
        setFilteredTodos([...todos].filter((item) => !item.completed))
        break
      default:
        setFilteredTodos(todos)
    }
  }

  useEffect(() => {
    filterHandler()
    save(todos)
  }, [todos, selected])

  return { optionChoice, filteredTodos }
}
