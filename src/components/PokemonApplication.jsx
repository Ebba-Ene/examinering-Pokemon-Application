import { useEffect, useState } from 'react'
import Pokemon from './Pokemon'

const PokemonApplication = () => {

    const [currentPokemon, setCurrentPokemon] = useState("")
    const [showDetails, setShowDetails] = useState(false)
    const [pokemons, setPokemons] = useState([])

    useEffect (() => {
      const getPokemon = async () =>{
        let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        let json = await response.json()

        setPokemons(json.results)
    }
    getPokemon()
  }, [])

  return(
    <div>
      <select onChange={(e) => {setCurrentPokemon(e.target.value)}}>
        <option value="">Select a Pokémon</option>
        {pokemons.map((pokemon, id) => <option key={id} value={pokemon.url}>{pokemon.name}</option>)}
      </select>
      <button onClick={() => {setShowDetails(true)}}>Mer info</button>
      {showDetails && 
      <Pokemon link={currentPokemon}/>}
    </div>
  )
}

export default PokemonApplication