import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTodos } from './hooks/useTodos'

function App() {
  const {todos,loading} = useTodos(2)


  return (
    <>
      {loading? (<div>Loading....</div>): (todos.map(todo=> <Todo title={todo.title} description={todo.description}/>))}
    </>
  )
}


function Todo({title, description}){
  return <div>
    <h1>{title}</h1>
    <h2>{description}</h2>
    <br/>
  </div>
}

export default App
