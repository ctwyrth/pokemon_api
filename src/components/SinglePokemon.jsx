import axios from 'axios';
import React, { useState } from 'react'

const Pokemon = () => {
   const [pokemon, setPokemon] = useState("");
   const [pokeData, setPokeData] = useState();

   const handleSubmit = (e) => {
      e.preventDefault();
      let url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon.toLowerCase();
      console.log(url)

      axios.get(url).then(response => setPokeData(response.data)).catch(error => console.log(error));

      setPokemon("");

      console.log(pokeData);
   }


   return (
      <>
         <div className="col-6 mt-4 mb-4 p-2">
            <form onSubmit={ handleSubmit }>
               <div className="input-group mb-3">
                  <span className="input-group-text">Pokémon:</span>
                  <input type="text" name="pokemon" id="pokemon" className="form-control" onChange={(e) => setPokemon(e.target.value) } value={ pokemon } />
               </div>
            </form>

            <div className="col-4 mt-3 mb-4 mx-auto">
                  <div className="mb-3">
                     <strong>{ pokeData ? pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1) : "Gotta catch 'em All!" }</strong>
                     { pokeData && <img src={ pokeData.sprites.front_default } alt="a pokemon" /> }
                  </div>
            </div>
         </div>
      </>
   )
}

export default Pokemon
