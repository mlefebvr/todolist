import Link from 'next/link'
import db from '../../lib/db'

export default function NewTodo() {
  const submitForm = async (data: FormData) => {
    'use server'
    const todo = data.get('txtTodo')
    const todoQuery = 'INSERT INTO todos (todo) values (?)'
    db.query(todoQuery, [todo])
  }

  return (
    <div className="w-1/2 mx-auto p-2">
      <h1>New Todo</h1>
      <Link href="/">Home</Link>
      <hr />
      <form action={submitForm}>
        <input
          className="bg-[#427cbc] border border-white p-2 rounded m-2 w-full"
          type="text"
          placeholder="Todo Text"
          name="txtTodo"
        />
        <button
          type="submit"
          className="bg-[#427cbc] border border-white p-2 rounded m-2 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
