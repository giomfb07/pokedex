import { corDoTipo, corTextoDoTipo } from "../services/cores";

// Etiqueta colorida com o nome de um tipo.
// A cor do texto muda (branco ou escuro) para sempre ficar legível sobre o fundo.
function TypeBadge({ nome }) {
  const cor = corDoTipo(nome);
  return (
    <span className="tipo" style={{ background: cor, color: corTextoDoTipo(cor) }}>
      {nome}
    </span>
  );
}

export default TypeBadge;
