import { useEffect } from "react";

// Hook para os modais: fecha com a tecla Esc e trava a rolagem da página enquanto o modal está aberto.
export function useModal(onFechar) {
  useEffect(() => {
    function aoTeclar(e) {
      if (e.key === "Escape") onFechar();
    }
    document.addEventListener("keydown", aoTeclar);

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Função de limpeza: desfaz tudo quando o modal fecha
    return () => {
      document.removeEventListener("keydown", aoTeclar);
      document.body.style.overflow = overflowAnterior;
    };
  }, [onFechar]);
}
