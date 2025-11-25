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
          <img src={pokemonInfo.sprites.front_default} alt={`Sprite of ${pokemonInfo.name}`} />
          <p><strong>Typ: </strong>{pokemonInfo.types[0].type.name}</p>
          {pokemonInfo.types[1] && 
            <p><strong>Typ 2: </strong>{pokemonInfo.types[1].type.name}</p>
          }
          <p><strong>Vikt: </strong>{pokemonInfo.height} kg</p>
          <p><strong>Längd: </strong>{pokemonInfo.weight} cm</p>

        </div>
      }
    </div>
  )
}

export default Pokemon