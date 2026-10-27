import TypeBadge from "./TypeBadge";
import PokemonImage from "./PokemonImage";
import { corDoTipo } from "../services/cores";
import { tiposDoPokemon } from "../services/pokedex";

// Card de UM Pokémon na lista
// pokemon: objeto com id, name, stats e types
// favorito: se está marcado como favorito
// onClick: abre os detalhes | onFavoritar: marca/desmarca o favorito
function PokemonCard({ pokemon, favorito, onClick, onFavoritar }) {
  const { id, name, types, stats } = pokemon;
  const cor = corDoTipo(types[0]?.name); // a cor do card vem do primeiro tipo

  return (
    <article className="card" style={{ "--cor": cor }}>
      {/* O card inteiro é um botão (funciona com teclado: Tab + Enter) */}
      <button
        className="card-abrir"
        onClick={() => onClick(pokemon)}
        aria-label={`Ver detalhes de ${name}`}
      >
        <span className="card-id">#{String(id).padStart(3, "0")}</span>
        <PokemonImage id={id} nome={name} classe="img-card" />
        <span className="card-nome">{name}</span>

        <span className="tipos">
          {tiposDoPokemon(pokemon).map((t) => (
            <TypeBadge key={t.id} nome={t.name} />
          ))}
        </span>

        {/* Atributos resumidos (todos aparecem completos nos detalhes) */}
        <span className="card-stats">
          <span>HP <b>{stats.hp}</b></span>
          <span>Atk <b>{stats.attack}</b></span>
          <span>Def <b>{stats.defense}</b></span>
          <span>Sp.Atk <b>{stats.specialAttack}</b></span>
          <span>Sp.Def <b>{stats.specialDefense}</b></span>
          <span>Vel <b>{stats.speed}</b></span>
        </span>
      </button>

      {/* O botão de favorito fica fora do botão principal (não pode haver botão dentro de botão) */}
      <div className="card-acoes">
        <button
          className={favorito ? "icone-botao ativo" : "icone-botao"}
          onClick={() => onFavoritar(id)}
          aria-pressed={favorito}
          aria-label={favorito ? `Remover ${name} dos favoritos` : `Favoritar ${name}`}
          title={favorito ? "Remover dos favoritos" : "Favoritar"}
        >
          {favorito ? "♥" : "♡"}
        </button>
      </div>
    </article>
  );
}

export default PokemonCard;
