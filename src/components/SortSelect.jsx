import { opcoesOrdenacao } from "../services/pokedex";

// Seletor "Ordenar por"
// valor: critério atual | onChange: chamada ao escolher outro critério
function SortSelect({ valor, onChange }) {
  return (
    <select
      className="campo"
      aria-label="Ordenar por"
      value={valor}
      onChange={(e) => onChange(e.target.value)}
    >
      {opcoesOrdenacao.map((o) => (
        <option key={o.valor} value={o.valor}>
          Ordenar: {o.rotulo}
        </option>
      ))}
    </select>
  );
}

export default SortSelect;
