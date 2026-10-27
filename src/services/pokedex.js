import dados from "../data/pokedex-data.json";

// Listas vindas do JSON
export const todosPokemon = dados.pokemon;
export const todosTipos = dados.types.filter((t) => t.name !== "Typeless"); // "Typeless" não é usado
export const todosTreinadores = dados.trainers;

// Atributos (chave do JSON -> texto exibido). Usado nos detalhes.
export const atributos = [
  ["hp", "HP"],
  ["attack", "Attack"],
  ["defense", "Defense"],
  ["specialAttack", "Special Attack"],
  ["specialDefense", "Special Defense"],
  ["speed", "Speed"],
];

// Opções do seletor "Ordenar por"
export const opcoesOrdenacao = [
  { valor: "id", rotulo: "Número (ID)" },
  { valor: "name", rotulo: "Nome (A-Z)" },
  { valor: "hp", rotulo: "HP (maior primeiro)" },
  { valor: "attack", rotulo: "Attack (maior primeiro)" },
  { valor: "defense", rotulo: "Defense (maior primeiro)" },
  { valor: "specialAttack", rotulo: "Special Attack (maior primeiro)" },
  { valor: "specialDefense", rotulo: "Special Defense (maior primeiro)" },
  { valor: "speed", rotulo: "Speed (maior primeiro)" },
];

// Monta a URL da imagem de um Pokémon a partir do ID (fonte: repositório de sprites da PokéAPI)
export function urlImagem(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

// Tipos de um Pokémon para exibir. No JSON o Mew vem sem nenhum tipo (lista vazia),
// então mostramos "Typeless" (que existe na lista de tipos do JSON) em vez de deixar o espaço em branco.
export function tiposDoPokemon(pokemon) {
  return pokemon.types.length > 0 ? pokemon.types : [{ id: 0, name: "Typeless" }];
}

// Procura um Pokémon pelo ID
export function pokemonPorId(id) {
  return todosPokemon.find((p) => p.id === id);
}

// FILTRO PRINCIPAL: recebe o texto da busca, o tipo escolhido e (opcional) a lista de IDs favoritos.
// Devolve só os Pokémon que combinam com TODAS as condições.
// favoritos = null  -> não filtra por favoritos
export function filtrarPokemon(busca, tipo, favoritos = null) {
  const texto = busca.trim().toLowerCase().replace("#", "");

  return todosPokemon.filter((p) => {
    // 1) Busca: o texto aparece no nome OU é igual ao número do ID (aceita "25", "025" e "#25")
    const combinaBusca =
      texto === "" ||
      p.name.toLowerCase().includes(texto) ||
      (/^\d+$/.test(texto) && Number(texto) === p.id);

    // 2) Tipo: "todos" aceita qualquer Pokémon; senão o Pokémon precisa ter aquele tipo
    const combinaTipo = tipo === "todos" || p.types.some((t) => t.name === tipo);

    // 3) Favoritos: se a lista foi informada, o Pokémon precisa estar nela
    const combinaFavorito = favoritos === null || favoritos.includes(p.id);

    // O Pokémon só aparece se passar em todas as condições
    return combinaBusca && combinaTipo && combinaFavorito;
  });
}

// ORDENAÇÃO: devolve uma CÓPIA da lista ordenada (não altera a original).
// id e nome: ordem crescente | atributos: do maior para o menor (empate desempata pelo ID)
export function ordenarPokemon(lista, criterio) {
  const copia = [...lista];
  if (criterio === "id") return copia.sort((a, b) => a.id - b.id);
  if (criterio === "name") return copia.sort((a, b) => a.name.localeCompare(b.name));
  return copia.sort((a, b) => b.stats[criterio] - a.stats[criterio] || a.id - b.id);
}

// Soma de todos os atributos de um Pokémon
export function somaAtributos(pokemon) {
  return Object.values(pokemon.stats).reduce((total, valor) => total + valor, 0);
}

// Cor da barra de atributo: vai do vermelho (valor baixo) ao verde (valor alto)
export function corDoValor(valor) {
  const matiz = (Math.min(valor, 150) / 150) * 120;
  return `hsl(${matiz}, 65%, 45%)`;
}

// RELAÇÃO TREINADOR -> POKÉMON: o treinador guarda só os IDs (pokemonIds), então procuramos cada ID na lista de Pokémon para pegar os dados completos
export function pokemonDoTreinador(treinador) {
  return treinador.pokemonIds.map(pokemonPorId).filter(Boolean); // remove IDs que não existam na lista
}

// Lista (já em ordem) dos treinadores que possuem um determinado Pokémon
export function treinadoresDoPokemon(pokemonId) {
  return todosTreinadores.filter((t) => t.pokemonIds.includes(pokemonId));
}
