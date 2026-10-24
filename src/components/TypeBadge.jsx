import { corDoTipo } from "../services/cores";

// Etiqueta colorida com o nome de um tipo 
function TypeBadge({ nome }) {
  return (
    <span className="tipo" style={{ background: corDoTipo(nome) }}>
      {nome}
    </span>
  );
}

export default TypeBadge;
