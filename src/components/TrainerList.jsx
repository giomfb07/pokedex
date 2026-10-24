import { todosTreinadores, pokemonDoTreinador, urlImagem } from "../services/pokedex";

// Seção que lista os treinadores, suas insígnias e seus Pokémon.
// onSelecionar: abre os detalhes de um Pokémon ao clicar na miniatura
function TrainerList({ onSelecionar }) {
  return (
    <div className="treinadores">
      {todosTreinadores.map((t) => (
        <div className="treinador" key={t.id}>
          <h3>{t.name}</h3>
          <p>🏅 Insígnias: {t.badges}</p>

          <div className="miniaturas">
            {/* Busca os Pokémon completos a partir dos IDs guardados no treinador */}
            {pokemonDoTreinador(t).map((p) => (
              <img
                key={p.id}
                src={urlImagem(p.id)}
                alt={p.name}
                title={p.name}
                onClick={() => onSelecionar(p)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TrainerList;
