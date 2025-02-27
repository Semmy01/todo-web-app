import {  useState } from 'react'
import './App.css'

const Todo = () => {
 
  const [todosArray , setTodosArray] = useState([])
  const  [todo, setTodo] = useState("")
  // const [ completed , setCompleted] = useState(false)

  const addTodo = () => {
    const item = {
    id: new Date().toString(),
    title: todo,
    status: "uncomplete"
  }
    if (todo ==='') {
      alert('please enter a valid todo')
    return 
   }

   setTodosArray([...todosArray , item])
  setTodo('')


  }

   const deleteTodo = (id) => {   
    const remainTodos = todosArray.filter((item)=> item.id !== id)
    setTodosArray([...remainTodos])
    console.log()
   }

  const completedTask  = (id ) => {
    const matchID = todosArray.find((item)=> item.id ===id)
    const newTodo = {
    ...matchID, status:"completed"
   }

   const remainTodos = todosArray.filter((item)=> item.id !== id)
    setTodosArray([...remainTodos, newTodo])

  }
  
  return (
    <>
    <div className='container'>
      <input type="text" className='todo' placeholder='Enter Todo' value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button className='todo-button' onClick={addTodo}>Add Todo</button>
    </div> 

    <div className='todo-display-container'>
        <ul className='todo-list'>
          {
            todosArray.map((todo) => {
                return (
                <div key={`${todo.id}`} className='display-todos' >
                  <div className={`${todo.status === 'completed'? "completed-signal" : "completed-sign" }`}></div>
                  <li className={`${todo.status === "completed" ? 'disable' : 'todos'}`}>{todo.title}</li>
                  <div>
                  <button className='del-btn' onClick={()=>deleteTodo(todo.id)} >Delete</button>
                  <button disabled={todo.status === "completed"} className='completed' onClick={() => { completedTask(todo.id)}}>{todo.status === "completed" ? "Completed" :"Complete"}</button>
                  </div>
                </div>
                )
            })
          }
        </ul>
      </div>
    </>
  )
  
}

export default Todo