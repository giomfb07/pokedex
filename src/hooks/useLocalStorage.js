import { useState, useEffect } from "react";

// Hook personalizado: funciona igual ao useState, mas guarda o valor no navegador (localStorage).
// Assim os favoritos continuam salvos mesmo depois de fechar a página.
// chave: nome com que o valor fica guardado | valorInicial: usado se ainda não houver nada salvo
export function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const salvo = localStorage.getItem(chave);
      return salvo !== null ? JSON.parse(salvo) : valorInicial;
    } catch {
      return valorInicial; // localStorage indisponível ou conteúdo inválido
    }
  });

  // useEffect: roda depois da renderização, sempre que "valor" muda
  useEffect(() => {
    try {
      localStorage.setItem(chave, JSON.stringify(valor));
    } catch {
      // se não der para salvar, a aplicação continua funcionando normalmente
    }
  }, [chave, valor]);

  return [valor, setValor];
}
