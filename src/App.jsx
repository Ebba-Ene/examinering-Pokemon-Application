import { useState } from 'react'
import './App.css'
import PokemonApplication from './components/PokemonApplication'

function App() {

  const [show, setShow] = useState(false)

  return (
    <>
      <h1>Pokemon Application</h1>
      <button onClick={() => {setShow(true)}}>Start Pokemon App</button>
      {show && 
        <ul>
          {pokemons.map((pokemon, id) => <PokemonApplication data = {pokemon} key = {id}/>)}
        </ul>
      }
    </>
  )
}

export default App
