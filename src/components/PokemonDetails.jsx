import TypeBadge from "./TypeBadge";
import PokemonImage from "./PokemonImage";
import { useModal } from "../hooks/useModal";
import { corDoTipo } from "../services/cores";
import { atributos, somaAtributos, corDoValor, tiposDoPokemon, treinadoresDoPokemon } from "../services/pokedex";

// Modal com os detalhes de um Pokémon.
// pokemon: Pokémon selecionado | favorito: se está favoritado
// onFavoritar: marca/desmarca o favorito | onFechar: fecha o modal
function PokemonDetails({ pokemon, favorito, onFavoritar, onFechar }) {
  useModal(onFechar); // Esc fecha o modal e a rolagem da página fica travada
  const donos = treinadoresDoPokemon(pokemon.id);
  const cor = corDoTipo(pokemon.types[0]?.name);

  return (
    // Clicar no fundo escuro fecha o modal
    <div className="modal-fundo" onClick={onFechar}>
      {/* stopPropagation: clicar DENTRO da janela não deve fechar */}
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={`Detalhes de ${pokemon.name}`}
        style={{ "--cor": cor }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="fechar" onClick={onFechar} aria-label="Fechar" autoFocus>
          ✕
        </button>

        <div className="modal-topo">
          <PokemonImage id={pokemon.id} nome={pokemon.name} classe="img-modal" />
          <h2>
            <span className="modal-id">#{String(pokemon.id).padStart(3, "0")}</span> {pokemon.name}
          </h2>
          <div className="tipos">
            {tiposDoPokemon(pokemon).map((t) => (
              <TypeBadge key={t.id} nome={t.name} />
            ))}
          </div>
        </div>

        <div className="modal-corpo">
          <div className="acoes">
            <button className={favorito ? "botao ativo" : "botao"} onClick={() => onFavoritar(pokemon.id)} aria-pressed={favorito}>
              {favorito ? "♥ Favoritado" : "♡ Favoritar"}
            </button>
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
                      style={{ width: `${(valor / 255) * 100}%`, background: corDoValor(valor) }}
                    />
                  </div>
                  <span className="barra-numero">{valor}</span>
                </div>
              );
            })}
            <div className="barra-linha total">
              <span className="barra-nome">Total</span>
              <span className="barra-numero">{somaAtributos(pokemon)}</span>
            </div>
          </div>

          {donos.length > 0 && (
            <p className="donos">Treinadores: {donos.map((t) => t.name).join(", ")}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
