import React, { useState, useEffect } from 'react'

const Pokemon = () => {
   const [pokeList, setPokeList] = useState([]);

   const handleOnClick = (e) => {
      e.preventDefault();

      if (pokeList.length < 1) {
         fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
            .then(response => response.json())
            .then(response => setPokeList(response.results))
            .catch(err => console.log(err))
      } else {
         setPokeList([]);
      }
   } 

   return (
      <div className="container">
         <div className="mt-4">
            <button className="col-4 btn btn-sm btn-primary" onClick={ handleOnClick }>{pokeList.length > 0 ? 'Clear the Pokémon List' : 'Show all the Pokémon'}</button>
         </div>
         <div className="mt-4 ms-2">
            { pokeList.length > 0 && pokeList.map((poke, i) => {
               return (<div key={i} className="mb-3">・ { poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</div>)
               })}
         </div>
      </div>
   )
}

export default Pokemon

// useEffect(() => { }, []);