import axios from 'axios';
import React, { useState } from 'react'

const Pokemon = () => {
   const [pokeList, setPokeList] = useState([]);

   const handleOnClick = (e) => {
      e.preventDefault();

      if (pokeList.length < 1) {
         getPokemon().then(response => setPokeList( response ));
      } else {
         setPokeList([]);
      }
      console.log(pokeList);
   }

   async function getPokemon() {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=897')
      console.log(response.data.results);
      return response.data.results
   }

   return (
      <>
         <div className="col-6 mt-4 p-2">
            <button className="col-4 btn btn-sm btn-primary" onClick={ handleOnClick }>{pokeList.length > 0 ? 'Clear the Pokémon List' : 'Show all the Pokémon'}</button>
         
            <div className="mt-4 ms-2">
               { pokeList.length > 0 && pokeList.map((poke, i) => {
               return (<div key={i} className="mb-3">・ { poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</div>)
               })}
            </div>
         </div>
      </>
   )
}

export default Pokemon

// useEffect(() => { }, []);