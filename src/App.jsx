import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SortSelect from "./components/SortSelect";
import TypeFilter from "./components/TypeFilter";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import TrainerList from "./components/TrainerList";
import { useLocalStorage } from "./hooks/useLocalStorage";
import {
  filtrarPokemon,
  ordenarPokemon,
  todosTipos,
} from "./services/pokedex";
import "./css/App.css";

function App() {
  // ---------- ESTADOS (useState) ----------
  // Cada vez que um estado muda, o React redesenha a tela automaticamente.
  const [busca, setBusca] = useState("");              // texto digitado na pesquisa
  const [tipo, setTipo] = useState("todos");           // tipo escolhido no filtro
  const [ordem, setOrdem] = useState("id");            // critério de ordenação
  const [soFavoritos, setSoFavoritos] = useState(false); // mostrar só os favoritos?
  const [selecionado, setSelecionado] = useState(null);  // Pokémon aberto no modal (null = nenhum)
  const [aba, setAba] = useState("pokedex");           // "pokedex" ou "treinadores"

  // Estado que fica salvo no navegador (hook personalizado com localStorage)
  const [favoritos, setFavoritos] = useLocalStorage("pokedex-favoritos", []);

  // ---------- ESTADOS DERIVADOS ----------
  // A lista exibida NÃO é um estado: é calculada a partir de busca + tipo + favoritos + ordem.
  // Assim ela sempre acompanha o que o usuário digita/escolhe.
  const filtrados = filtrarPokemon(busca, tipo, soFavoritos ? favoritos : null);
  const pokemonExibidos = ordenarPokemon(filtrados, ordem);

  // ---------- FUNÇÕES DE EVENTOS ----------
  // Marca ou desmarca um favorito
  function alternarFavorito(id) {
    setFavoritos((atuais) =>
      atuais.includes(id) ? atuais.filter((f) => f !== id) : [...atuais, id]
    );
  }

  // Mensagem mostrada quando a lista fica vazia (depende do motivo)
  const mensagemVazia =
    soFavoritos && favoritos.length === 0
      ? "Você ainda não tem favoritos. Toque no ♡ de um Pokémon para adicioná-lo."
      : "Nenhum Pokémon encontrado. Tente outro nome, número ou tipo.";

  return (
    <div className="app">
      <Header aba={aba} onMudarAba={setAba} />

      {/* Renderização condicional: mostra uma aba ou outra */}
      {aba === "pokedex" ? (
        <main>
          <div className="controles">
            <SearchBar valor={busca} onChange={setBusca} />
            <SortSelect valor={ordem} onChange={setOrdem} />
            <button
              className={soFavoritos ? "botao ativo" : "botao"}
              aria-pressed={soFavoritos}
              onClick={() => setSoFavoritos(!soFavoritos)}
            >
              ♥ Favoritos ({favoritos.length})
            </button>
          </div>

          <TypeFilter tipos={todosTipos} valor={tipo} onChange={setTipo} />

          <p className="contador" aria-live="polite">
            {pokemonExibidos.length} Pokémon
          </p>

          <PokemonList
            lista={pokemonExibidos}
            favoritos={favoritos}
            mensagemVazia={mensagemVazia}
            onSelecionar={setSelecionado}
            onFavoritar={alternarFavorito}
          />
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
          favorito={favoritos.includes(selecionado.id)}
          onFavoritar={alternarFavorito}
          onFechar={() => setSelecionado(null)}
        />
      )}
    </div>
  );
}

export default App;
