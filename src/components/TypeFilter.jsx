// Filtro por tipo
// tipos: lista de tipos vinda do JSON
// valor: tipo escolhido agora 
// onChange: função chamada quando o usuário escolhe outro tipo
function TypeFilter({ tipos, valor, onChange }) {
  return (
    <select
      className="filtro"
      value={valor}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="todos">Todos os tipos</option>
      {/* map(): cria uma <option> para cada tipo do arquivo JSON */}
      {tipos.map((t) => (
        <option key={t.id} value={t.name}>
          {t.name}
        </option>
      ))}
    </select>
  );
}

export default TypeFilter;
