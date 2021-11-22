// Simple Data-fetching
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react';
import {fetchPokemon, PokemonDataView, PokemonErrorBoundary} from '../pokemon';

let pokemon;
let pokemonError;
let pokemonPromise = fetchPokemon('pikachu').then(
  value => (pokemon = value),
  error => (pokemonError = error),
);

function PokemonInfo() {
  if (pokemonError) {
    throw pokemonError;
  }
  if (!pokemon) {
    throw pokemonPromise;
  }

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
        <PokemonErrorBoundary>
          <React.Suspense fallback={<div>Loading Pokémon...</div>}>
            <PokemonInfo />
          </React.Suspense>
        </PokemonErrorBoundary>
      </div>
    </div>
  );
}

export default App;
