import { useState } from 'react'

export function useItems () {
  const [todos, setTodos] = useState(() => {
    const localTodo = window.localStorage.getItem('todos')
    return localTodo
      ? JSON.parse(localTodo)
      : []
  })

  const onCompleted = (id) => {
    const newTodo = [...todos].map(todo => {
      return todo.id === Number(id) ? { ...todo, completed: !todo.completed } : { ...todo }
    })

    setTodos(newTodo)
  }

  const onDeleteItem = (id) => {
    const newTodos = [...todos].filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const addTodoItem = (newTodo) => {
    const newItem = {
      id: +new Date(),
      task: newTodo,
      completed: false
    }

    const newTodoList = [...todos, newItem]
    setTodos(newTodoList)
  }

  return { todos, onCompleted, onDeleteItem, addTodoItem }
}
