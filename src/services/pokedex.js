import dados from "../data/pokedex-data.json";

// Listas vindas do JSON
export const todosPokemon = dados.pokemon;
export const todosTipos = dados.types.filter((t) => t.name !== "Typeless"); // "Typeless" não é usado
export const todosTreinadores = dados.trainers;

// Monta a URL da imagem de um Pokémon a partir do ID (fonte: repositório de sprites da PokéAPI)
export function urlImagem(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

// FILTRO PRINCIPAL: recebe o texto da busca e o tipo escolhido e devolve só os Pokémon que combinam com os dois
export function filtrarPokemon(busca, tipo) {
  const texto = busca.trim().toLowerCase();

  return todosPokemon.filter((p) => {
    // 1) Busca: o texto aparece no nome OU é igual ao número do ID
    const combinaBusca =
      texto === "" ||
      p.name.toLowerCase().includes(texto) ||
      String(p.id) === texto.replace("#", "");

    // 2) Tipo: "todos" aceita qualquer Pokémon; senão o Pokémon precisa ter aquele tipo
    const combinaTipo = tipo === "todos" || p.types.some((t) => t.name === tipo);

    // O Pokémon só aparece se passar nas duas condições
    return combinaBusca && combinaTipo;
  });
}

// RELAÇÃO TREINADOR -> POKÉMON: o treinador guarda só os IDs (pokemonIds), então procuramos cada ID na lista de Pokémon para pegar os dados completos
export function pokemonDoTreinador(treinador) {
  return treinador.pokemonIds
    .map((id) => todosPokemon.find((p) => p.id === id))
    .filter(Boolean); // remove IDs que não existam na lista
}

// Lista (já em ordem) dos treinadores que possuem um determinado Pokémon
export function treinadoresDoPokemon(pokemonId) {
  return todosTreinadores.filter((t) => t.pokemonIds.includes(pokemonId));
}
