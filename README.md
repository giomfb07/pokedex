# Pokédex com React + Vite

Pokédex interativa feita com **React + Vite** (Atividade 03). Permite pesquisar Pokémon por nome ou ID, filtrar por tipo, ver os detalhes com barras de atributos e consultar os treinadores.

## Como executar

```bash
npm install
npm run dev
```

Depois abra no navegador: **http://localhost:5173**

Para gerar a versão de produção: `npm run build`.

## Funcionalidades

- Lista com os 151 Pokémon (ID, nome, tipos e todos os atributos)
- Pesquisa por nome ou ID, atualizando enquanto digita
- Filtro por tipo (os tipos vêm do `pokedex-data.json`)
- Modal de detalhes com barras de atributos
- Aba de treinadores (nome, insígnias e Pokémon de cada um)
- Mensagem quando nenhum Pokémon é encontrado
- Layout responsivo

## Onde estão os dados

`src/data/pokedex-data.json` (campos `types`, `pokemon` e `trainers`). Não há banco de dados nem servidor.

## Imagens

As imagens usam o repositório público de sprites da **PokéAPI**
(`https://github.com/PokeAPI/sprites`), carregadas pelo ID do Pokémon. Sem internet, a Pokédex continua funcionando, só sem as imagens.

## Organização do projeto

```text
src/
├── components/
│   ├── SearchBar.jsx       # campo de pesquisa
│   ├── TypeFilter.jsx      # filtro por tipo
│   ├── TypeBadge.jsx       # etiqueta colorida do tipo
│   ├── PokemonList.jsx     # grade de cards (e mensagem "não encontrado")
│   ├── PokemonCard.jsx     # card de um Pokémon
│   ├── PokemonDetails.jsx  # modal com detalhes e barras
│   └── TrainerList.jsx     # aba de treinadores
├── services/
│   ├── pokedex.js          # "backend": lê o JSON, filtra, relaciona treinadores e Pokémon
│   └── cores.js            # cores dos tipos
├── css/App.css             # estilos
├── data/pokedex-data.json  # dados
├── App.jsx                 # estados (useState) e montagem da tela
├── main.jsx
└── index.css
```

## Conceitos de React usados

Componentes funcionais, props, `useState`, eventos, `map()` para listas, renderização condicional, filtragem e estado derivado.
