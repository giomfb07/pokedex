import PokemonCard from "./PokemonCard";

// Grade com todos os cards.
// lista: Pokémon que devem aparecer (já filtrados pelo App)
// onSelecionar: repassada para cada card
function PokemonList({ lista, onSelecionar }) {
  // Tratamento do caso "nenhum Pokémon encontrado"
  if (lista.length === 0) {
    return <p className="vazio">Nenhum Pokémon encontrado 😕</p>;
  }
  return (
    <div className="lista">
      {/* map(): um PokemonCard para cada item. A "key" ajuda o React a identificar cada card */}
      {lista.map((p) => (
        <PokemonCard key={p.id} pokemon={p} onClick={onSelecionar} />
      ))}
    </div>
  );
}

export default PokemonList;
