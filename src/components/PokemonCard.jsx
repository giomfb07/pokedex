import TypeBadge from "./TypeBadge";
import { urlImagem } from "../services/pokedex";

// Card de UM Pokémon na lista
// pokemon: objeto com id, name, stats e types
// onClick: função chamada ao clicar (o App guarda qual Pokémon foi selecionado)
function PokemonCard({ pokemon, onClick }) {
  const { id, name, types, stats } = pokemon;

  return (
    <div className="card" onClick={() => onClick(pokemon)}>
      <span className="card-id">#{String(id).padStart(3, "0")}</span>
      <img src={urlImagem(id)} alt={name} loading="lazy" />
      <h3>{name}</h3>

      <div className="tipos">
        {types.map((t) => (
          <TypeBadge key={t.id} nome={t.name} />
        ))}
      </div>

      {/* Atributos resumidos (todos aparecem completos nos detalhes) */}
      <ul className="card-stats">
        <li>HP: {stats.hp}</li>
        <li>Atk: {stats.attack}</li>
        <li>Def: {stats.defense}</li>
        <li>Sp.Atk: {stats.specialAttack}</li>
        <li>Sp.Def: {stats.specialDefense}</li>
        <li>Vel: {stats.speed}</li>
      </ul>
    </div>
  );
}

export default PokemonCard;
