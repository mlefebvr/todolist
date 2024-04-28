import mysql, {QueryResult, ResultSetHeader} from 'mysql2/promise';

const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  idleTimeout: 10,
  connectionLimit: 5,
  multipleStatements: true,
});

export interface ITodo extends ResultSetHeader {
  id: number
  todo: string
  createdDate: Date
}

export const getTodos = async (): Promise<ITodo[]> => {
  const todoQuery = 'SELECT id, todo, createdDate FROM todos'
  const [todos] = await db.query<ITodo[]>(todoQuery)
  return todos
}

export const createTodo = async (todo: string): Promise<QueryResult> => {
  const todoQuery = 'INSERT INTO todos (todo) values (?)'
  const [result] = await db.query(todoQuery, [todo])
  return result
}

export default db
