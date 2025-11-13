import { useEffect, useState } from 'react'
import './App.css'
import PokemonApplication from './components/PokemonApplication'

function App() {

  const [show, setShow] = useState(false)

  const [pokemons, setPokemons] = useState([])

  useEffect (() => {
    if (!show) return
    const getPokemon = async () =>{
      let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      let json = await response.json()

      console.log("HEJ")
      setPokemons(json.results)
    }

    getPokemon()
  }, [show])

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
