// Cabeçalho no estilo do aparelho Pokédex: lente azul, três luzes e as abas de navegação.
// aba: aba aberta agora ("pokedex" ou "treinadores") | onMudarAba: troca de aba
function Header({ aba, onMudarAba }) {
  return (
    <header className="topo">
      <div className="marca">
        <div className="lente" aria-hidden="true" />
        <div>
          <div className="leds" aria-hidden="true">
            <span className="led" style={{ color: "#ff5a5f" }} />
            <span className="led" style={{ color: "#ffd23f" }} />
            <span className="led" style={{ color: "#4ad66d" }} />
          </div>
          <h1>Pokédex</h1>
        </div>
      </div>

      <nav aria-label="Seções">
        <button
          className={aba === "pokedex" ? "aba ativo" : "aba"}
          onClick={() => onMudarAba("pokedex")}
        >
          Pokémon
        </button>
        <button
          className={aba === "treinadores" ? "aba ativo" : "aba"}
          onClick={() => onMudarAba("treinadores")}
        >
          Treinadores
        </button>
      </nav>
    </header>
  );
}

export default Header;
