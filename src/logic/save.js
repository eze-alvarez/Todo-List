export default function save (todos) {
  window.localStorage.setItem('todos', JSON.stringify(todos))
}
