import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTodos } from './hooks/useTodos'
import { useIsOnline } from './hooks/useIsOnline'

function App() {
  const online = useIsOnline()

  return <div>
    {online? <h1 style={{color:"green"}}>We're Online :) </h1>:<h1 style={{color:"red"}}> We're Offline :( </h1>}
  </div>
}

export default App
