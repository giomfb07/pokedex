import { corDoTipo, corTextoDoTipo } from "../services/cores";

// Filtro por tipo, em forma de botões ("chips") coloridos.
// tipos: lista de tipos vinda do JSON | valor: tipo escolhido agora
// onChange: função chamada quando o usuário escolhe outro tipo
function TypeFilter({ tipos, valor, onChange }) {
  return (
    <div className="chips" role="group" aria-label="Filtrar por tipo">
      <button
        className={valor === "todos" ? "chip ativo" : "chip"}
        aria-pressed={valor === "todos"}
        style={{ "--cor": "#55657a", "--cor-texto": "#ffffff" }}
        onClick={() => onChange("todos")}
      >
        Todos
      </button>

      {/* map(): cria um botão para cada tipo do arquivo JSON */}
      {tipos.map((t) => {
        const cor = corDoTipo(t.name);
        return (
          <button
            key={t.id}
            className={valor === t.name ? "chip ativo" : "chip"}
            style={{ "--cor": cor, "--cor-texto": corTextoDoTipo(cor) }}
            aria-pressed={valor === t.name}
            onClick={() => onChange(t.name)}
          >
            {t.name}
          </button>
        );
      })}
    </div>
  );
}

export default TypeFilter;
