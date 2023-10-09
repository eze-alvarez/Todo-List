import React from 'react'
import TodoItem from './TodoItem'
export default function TodoList ({ filteredTodos, onCompleted, onDeleteItem }) {
  return (
    <div className='itemArea'>
      <ul>
        {
          filteredTodos.map(todo => (
            <TodoItem
              key={`${todo.id}-${todo.task}`}
              todo={todo}
              onCompleted={onCompleted}
              onDeleteItem={onDeleteItem}
            />
          ))
        }
      </ul>
    </div>
  )
}
