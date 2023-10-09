import { FaTrash } from 'react-icons/fa'
export default function TodoItem ({ todo, onCompleted, onDeleteItem }) {
  const classname = todo.completed ? 'item item-completed' : 'item'
  return (
    <li className={classname}>
      <div>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => onCompleted(todo.id)}
        />
        <span>{todo.task}</span>
      </div>

      <button
        className='delete-btn'
        onClick={() => onDeleteItem(todo.id)}
      >
        <FaTrash className='trash' />
      </button>
    </li>
  )
}
