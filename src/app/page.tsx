import Link from 'next/link'
import { getTodos } from '../lib/db'

export default async function Home() {
  const todos = await getTodos()
  return (
    <div className="w-1/2 mx-auto p-2">
      <h1>Todo List</h1>
      <Link href="/new">New Todo</Link>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li>{todo.todo}</li>
        ))}
      </ul>
    </div>
  )
}
