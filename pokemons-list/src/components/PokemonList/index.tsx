import React, { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import useSelectPokemon,{ addAllPokemons, pokemons as pokemonState } from '../../atoms/Pokemon';
import { IPokemon } from '../../types/Pokemon'; 
import style from "./PokemonList.module.css";


const PokemonList = () => {
  const [, addPokemons] = useAtom(addAllPokemons);
  const [pokemons] = useAtom(pokemonState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState<IPokemon[]>([]); 
  const [, setSelectPokemon] = useSelectPokemon();


  const fetchPokemons = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/kevinuehara/microfrontends/main/mocks/pokemonList.json"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData: IPokemon[] = await response.json(); // Specify the type here
      addPokemons(jsonData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    if (inputValue) {
      const result = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredPokemon(result);
    } else {
      setFilteredPokemon(pokemons);
    }
  }, [inputValue, pokemons]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Pokémon List</h1>
      <div className={style.card}>
        <div >
          <input
            type="text"
            placeholder="Search Pokémon by name"
            value={inputValue}
            onChange={handleInputChange}
          />

          <div className={style.cardPokemon}>
            {filteredPokemon.map((pokemon) => (
              <div key={pokemon.id}>
                <img src={pokemon.sprite} alt={pokemon.name} />
                <label>{pokemon.name}</label>
              </div>
            ))}
          </div>

          <a className='text-blue-500' href='github.com'>hello world</a>
        </div>


        <div className={style.pokemonCardContainer}>
          {pokemons.map((pokemon) => {
            return (
              <div
                className={style.pokemonCard}
                key={pokemon.id}
                onClick={() => setSelectPokemon(pokemon)}
              >
                <img
                  src={pokemon.sprite}
                  aria-label={`Image of pokemon ${pokemon.name}`}
                />
                <label>{pokemon.name}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
