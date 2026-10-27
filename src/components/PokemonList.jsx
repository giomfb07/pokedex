import PokemonCard from "./PokemonCard";

// Grade com todos os cards.
// lista: Pokémon que devem aparecer (já filtrados e ordenados pelo App)
// favoritos: lista de IDs favoritados | mensagemVazia: texto para quando a lista está vazia
function PokemonList({ lista, favoritos, mensagemVazia, onSelecionar, onFavoritar }) {
  // Tratamento do caso "nenhum Pokémon encontrado"
  if (lista.length === 0) {
    return <p className="vazio">{mensagemVazia}</p>;
  }
  return (
    <div className="lista">
      {/* map(): um PokemonCard para cada item. A "key" ajuda o React a identificar cada card */}
      {lista.map((p) => (
        <PokemonCard
          key={p.id}
          pokemon={p}
          favorito={favoritos.includes(p.id)}
          onClick={onSelecionar}
          onFavoritar={onFavoritar}
        />
      ))}
    </div>
  );
}

export default PokemonList;
