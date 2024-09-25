import PokemonList from "pokemonList/PokemonList";
import usePokemonSelected from "pokemonList/Pokemon";
import "./App.css";



function App() {
  const [pokemon] = usePokemonSelected();

  console.log(pokemon);
  

  return (
    <>
      <h3 style={{ color: "#1e3a8a", fontSize: "20px" }}>
        Created using Vite + vite-plugin-federation
      </h3>
      <PokemonList />
      {pokemon && (
        <div className="container">
          <h1 style={{ color: "#1e3a8a" }}>Selected Pokémon:</h1>
          <div className="pokemon-card-container">
            <img
              src={pokemon?.sprite}
              className="pokemon-image"
              aria-label="Image of Pokemon Selected"
            />
            <label className="pokemon-name">{pokemon?.name}</label>
          </div>
        </div>
      )}

    </>
  );
}

export default App;