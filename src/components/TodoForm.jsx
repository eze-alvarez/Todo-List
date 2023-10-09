import { useState } from 'react'

export default function TodoForm ({ addTodoItem, optionChoice }) {
  const [userInput, setUserInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userInput.trim() !== '') {
      addTodoItem(userInput)
      setUserInput('')
    }
  }

  const handleOnChange = (e) => {
    const limit = 20
    setUserInput(e.currentTarget.value.slice(0, limit))
  }

  const selectHandler = (e) => {
    optionChoice(e.currentTarget.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type='text'
          value={userInput}
          onChange={handleOnChange}
          placeholder='Nueva Tarea'
        />
        <button className='addItem-btn'>
          agregar
        </button>
      </form>

      <div className='select'>
        <label>
          <span>
            Ver Lista de Tareas
          </span>
        </label>
        <select className='form-select' name='todos' onChange={selectHandler}>
          <option defaultValue='all'>Todas</option>
          <option value='completed'>Completadas</option>
          <option value='uncompleted'>Por Hacer</option>
        </select>
      </div>
    </div>
  )
}
