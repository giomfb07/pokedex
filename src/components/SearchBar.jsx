// Campo de pesquisa
// valor: texto atual (vem do App)
// onChange: função chamada a cada letra digitada (o App atualiza o estado)
function SearchBar({ valor, onChange }) {
  return (
    <input
      className="campo busca"
      aria-label="Pesquisar Pokémon por nome ou ID"
      type="text"
      placeholder="Pesquisar Pokémon (nome ou ID)..."
      value={valor}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;
