import { useState } from "react";
import SearchBar from "./components/SearchBar";
import TypeFilter from "./components/TypeFilter";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import TrainerList from "./components/TrainerList";
import { filtrarPokemon, todosTipos } from "./services/pokedex";
import "./css/App.css";

function App() {
  // ---------- ESTADOS (useState) ----------
  // Cada vez que um estado muda, o React redesenha a tela automaticamente.
  const [busca, setBusca] = useState("");            // texto digitado na pesquisa
  const [tipo, setTipo] = useState("todos");         // tipo escolhido no filtro
  const [selecionado, setSelecionado] = useState(null); // Pokémon aberto no modal (null = nenhum)
  const [aba, setAba] = useState("pokedex");         // "pokedex" ou "treinadores"

  // ---------- ESTADO DERIVADO ----------
  // A lista exibida NÃO é um estado: é calculada a partir de busca + tipo.
  // Assim ela sempre acompanha o que o usuário digita/escolhe.
  const pokemonExibidos = filtrarPokemon(busca, tipo);

  return (
    <div className="app">
      <header>
        <h1>Pokédex</h1>
        <nav>
          <button
            className={aba === "pokedex" ? "ativo" : ""}
            onClick={() => setAba("pokedex")}
          >
            Pokémon
          </button>
          <button
            className={aba === "treinadores" ? "ativo" : ""}
            onClick={() => setAba("treinadores")}
          >
            Treinadores
          </button>
        </nav>
      </header>

      {/* Renderização condicional: mostra uma aba ou outra */}
      {aba === "pokedex" ? (
        <main>
          <div className="controles">
            <SearchBar valor={busca} onChange={setBusca} />
            <TypeFilter tipos={todosTipos} valor={tipo} onChange={setTipo} />
          </div>

          <p className="contador">{pokemonExibidos.length} Pokémon</p>

          <PokemonList lista={pokemonExibidos} onSelecionar={setSelecionado} />
        </main>
      ) : (
        <main>
          <TrainerList onSelecionar={setSelecionado} />
        </main>
      )}

      {/* O modal só aparece quando existe um Pokémon selecionado */}
      {selecionado && (
        <PokemonDetails
          pokemon={selecionado}
          onFechar={() => setSelecionado(null)}
        />
      )}
    </div>
  );
}

export default App;
