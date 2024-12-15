import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTodos } from './hooks/useTodos'
import useSWR from 'swr'

function App() {
  const fetcher = async (url)=>{
    const res = await fetch(url)
    const json = await res.json()
    return json
  }
  const {data, error, isLoading} = useSWR("http://localhost:3000/", fetcher)


  return (
    <>
      {error? (<div>Error!</div>):isLoading? (<div>Loading....</div>): (data.map(todo=> <Todo title={todo.title} description={todo.description}/>))}
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
