# Pokédex com React + Vite

Pokédex interativa feita com **React + Vite** (Atividade 03, em dupla com Pair Programming). Permite pesquisar Pokémon por nome ou ID, filtrar por tipo, ordenar, favoritar, ver os detalhes com barras de atributos e consultar os treinadores.

## Como executar

```bash
npm install
npm run dev
```

Depois abra no navegador: **http://localhost:5173**

Para gerar a versão de produção: `npm run build` (e `npm run preview` para testá-la).

## Funcionalidades

**Requisitos da atividade**

- Lista com os 151 Pokémon (ID, nome, tipos e todos os atributos)
- Pesquisa por nome ou ID (`25`, `025` ou `#25`), atualizando enquanto digita
- Filtro por tipo (os tipos vêm do `pokedex-data.json`)
- Modal de detalhes com barras de atributos
- Aba de treinadores (nome, insígnias e Pokémon de cada um; clicar no Pokémon abre os detalhes)
- Mensagem quando nenhum Pokémon é encontrado
- Layout responsivo (desktop, tablet e celular)

**Desafios opcionais**

- ⭐ **Favoritos**: botão ♡ nos cards e nos detalhes, com filtro "Favoritos". Ficam salvos no navegador (`localStorage`)
- 📊 **Ordenação**: por ID, nome, HP, Attack, Defense, Special Attack, Special Defense e Speed
- 📱 **Responsividade**: grade de cards que se ajusta à largura da tela, com ajustes para celular

**Extras**

- Imagem de reserva ("?") quando a imagem de um Pokémon não carrega
- Navegação por teclado (Tab/Enter), `Esc` fecha os modais, contorno de foco visível
- Respeita a preferência de "reduzir movimento" do sistema

## Onde estão os dados

`src/data/pokedex-data.json` (campos `types`, `pokemon` e `trainers`). Não há banco de dados nem servidor.

## Imagens e fontes

- **Imagens**: usam o repositório público de sprites da **PokéAPI** (`https://github.com/PokeAPI/sprites`), carregadas pelo ID do Pokémon. Sem internet, a Pokédex continua funcionando, só sem as imagens.
- **Fontes**: *Chakra Petch* e *Nunito*, carregadas do Google Fonts (sem internet, o navegador usa uma fonte do sistema).

## Organização do projeto

```text
src/
├── components/
│   ├── Header.jsx          # cabeçalho (lente, luzes e abas)
│   ├── SearchBar.jsx       # campo de pesquisa
│   ├── SortSelect.jsx      # seletor "Ordenar por"
│   ├── TypeFilter.jsx      # filtro por tipo (botões coloridos)
│   ├── TypeBadge.jsx       # etiqueta colorida do tipo
│   ├── PokemonList.jsx     # grade de cards (e mensagem "não encontrado")
│   ├── PokemonCard.jsx     # card de um Pokémon
│   ├── PokemonImage.jsx    # imagem com reserva caso não carregue
│   ├── PokemonDetails.jsx  # modal com detalhes e barras
│   └── TrainerList.jsx     # aba de treinadores
├── hooks/
│   ├── useLocalStorage.js  # useState que salva o valor no navegador (favoritos)
│   └── useModal.js         # Esc fecha o modal e trava a rolagem
├── services/
│   ├── pokedex.js          # "backend": lê o JSON, filtra, ordena, relaciona treinadores e Pokémon
│   └── cores.js            # cores dos tipos
├── css/App.css             # estilos dos componentes
├── data/pokedex-data.json  # dados
├── App.jsx                 # estados (useState) e montagem da tela
├── main.jsx
└── index.css               # cores, fontes e estilos globais
```

## Conceitos de React usados

Componentes funcionais, props, `useState`, `useEffect` (dentro dos hooks personalizados), eventos, `map()` para listas, renderização condicional, filtragem, ordenação e estado derivado (a lista exibida é calculada a partir da busca, do tipo, dos favoritos e da ordem).
