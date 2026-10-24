import TypeBadge from "./TypeBadge";
import { urlImagem, treinadoresDoPokemon } from "../services/pokedex";

// Nome de cada atributo (chave do JSON -> texto exibido)
const atributos = [
  ["hp", "HP"],
  ["attack", "Attack"],
  ["defense", "Defense"],
  ["specialAttack", "Special Attack"],
  ["specialDefense", "Special Defense"],
  ["speed", "Speed"],
];

// Modal com os detalhes de um Pokémon.
// pokemon: Pokémon selecionado
// onFechar: função que fecha o modal
function PokemonDetails({ pokemon, onFechar }) {
  const donos = treinadoresDoPokemon(pokemon.id);

  return (
    // Clicar no fundo escuro fecha o modal
    <div className="modal-fundo" onClick={onFechar}>
      {/* stopPropagation: clicar DENTRO da janela não deve fechar */}
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="fechar" onClick={onFechar}>
          ✕
        </button>

        <img src={urlImagem(pokemon.id)} alt={pokemon.name} />
        <h2>
          #{String(pokemon.id).padStart(3, "0")} {pokemon.name}
        </h2>

        <div className="tipos">
          {pokemon.types.map((t) => (
            <TypeBadge key={t.id} nome={t.name} />
          ))}
        </div>

        {/* Barras de atributos: a largura é proporcional ao valor (máximo 255 no jogo) */}
        <div className="barras">
          {atributos.map(([chave, rotulo]) => {
            const valor = pokemon.stats[chave];
            return (
              <div className="barra-linha" key={chave}>
                <span className="barra-nome">{rotulo}</span>
                <div className="barra-fundo">
                  <div
                    className="barra-valor"
                    style={{ width: `${(valor / 255) * 100}%` }}
                  />
                </div>
                <span className="barra-numero">{valor}</span>
              </div>
            );
          })}
        </div>

        {donos.length > 0 && (
          <p className="donos">
            Treinadores: {donos.map((t) => t.name).join(", ")}
          </p>
        )}
      </div>
    </div>
  );
}

export default PokemonDetails;
