import { useState } from "react";
import { urlImagem } from "../services/pokedex";

// Imagem de um Pokémon. Se a imagem não carregar (sem internet, por exemplo),
// mostra um quadrado com "?" no lugar, em vez de um ícone de imagem quebrada.
// id: ID do Pokémon | nome: texto alternativo | classe: classe CSS que define o tamanho
function PokemonImage({ id, nome, classe }) {
  // guardamos o ID que falhou (e não só true/false) para a imagem tentar de novo quando o ID mudar
  const [idComErro, setIdComErro] = useState(null);

  if (idComErro === id) {
    return (
      <span className={`${classe} imagem-falha`} role="img" aria-label={nome}>
        ?
      </span>
    );
  }

  return (
    <img
      className={classe}
      src={urlImagem(id)}
      alt={nome}
      loading="lazy"
      onError={() => setIdComErro(id)}
    />
  );
}

export default PokemonImage;
