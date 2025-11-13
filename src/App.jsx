import { useState } from 'react'
import './App.css'
import PokemonApplication from './components/PokemonApplication'

function App() {

  const [show, setShow] = useState(false)

  return (
    <>
      <h1>Pokemon Application</h1>
      <button onClick={() => {setShow(!show)}}>Start Pokemon App</button>
    </>
  )
}

export default App
