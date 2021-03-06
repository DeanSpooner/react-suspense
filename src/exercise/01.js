// Simple Data-fetching
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react';
// π¨ you'll also need to get the fetchPokemon function from ../pokemon:
import {fetchPokemon, PokemonDataView} from '../pokemon';

// π° use it like this: fetchPokemon(pokemonName).then(handleSuccess, handleFailure)

// π¨ create a variable called "pokemon" (using let)

// π£ delete this now...
let pokemon;

// We don't need the app to be mounted to know that we want to fetch the pokemon
// named "pikachu" so we can go ahead and do that right here.
// π¨ assign a pokemonPromise variable to a call to fetchPokemon('pikachu')

let pokemonPromise = fetchPokemon('pikachu').then(value => (pokemon = value));

// π¨ when the promise resolves, assign the "pokemon" variable to the resolved value
// π° For example: somePromise.then(resolvedValue => (someValue = resolvedValue))

function PokemonInfo() {
  // π¨ if there's no pokemon yet, then throw the pokemonPromise
  // π° (no, for real. Like: `throw pokemonPromise`)
  if (!pokemon) {
    throw pokemonPromise;
  }

  // if the code gets it this far, then the pokemon variable is defined and
  // rendering can continue!
  return (
    <div>
      <div className="pokemon-info__img-wrapper">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}

function App() {
  return (
    <div className="pokemon-info-app">
      <div className="pokemon-info">
        {/* π¨ Wrap the PokemonInfo component with a React.Suspense component with a fallback */}
        <React.Suspense fallback={<div>Loading PokΓ©mon...</div>}>
          <PokemonInfo />
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
