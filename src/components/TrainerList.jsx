import PokemonImage from "./PokemonImage";
import { todosTreinadores, pokemonDoTreinador } from "../services/pokedex";

// Seção que lista os treinadores, suas insígnias e seus Pokémon.
// onSelecionar: abre os detalhes de um Pokémon ao clicar na miniatura
function TrainerList({ onSelecionar }) {
  return (
    <div className="treinadores">
      {todosTreinadores.map((t) => (
        <section className="treinador" key={t.id}>
          <h3>{t.name}</h3>
          <p>
            🏅 {t.badges} {t.badges === 1 ? "insígnia" : "insígnias"}
          </p>

          <div className="miniaturas">
            {/* Busca os Pokémon completos a partir dos IDs guardados no treinador.
                A key usa também a posição (i), pois o JSON repete alguns Pokémon no mesmo treinador. */}
            {pokemonDoTreinador(t).map((p, i) => (
              <button
                key={`${p.id}-${i}`}
                className="mini"
                title={p.name}
                aria-label={`Ver detalhes de ${p.name}`}
                onClick={() => onSelecionar(p)}
              >
                <PokemonImage id={p.id} nome={p.name} classe="img-mini" />
              </button>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default TrainerList;
