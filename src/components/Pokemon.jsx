import { useEffect, useState } from "react"

const Pokemon = (props) => {

  const [pokemonInfo, setPokemonInfo] = useState(null)

  console.log(props.link)

    useEffect (() => {
      const getPokemonInfo = async () =>{
        let response = await fetch(props.link)
        let json = await response.json()

        setPokemonInfo(json)
      }

    getPokemonInfo()
  }, [props.link])

  return(
    <div>
      {!pokemonInfo && <p>Loading...</p>}
      {pokemonInfo && 
        <div>
          <h1>{pokemonInfo.name}</h1>
          <p>Base experience: {pokemonInfo.base_experience}</p>
        </div>
      }
    </div>
  )
}

export default Pokemon