// Cor de cada tipo de Pokémon
export const coresTipos = {
  Normal: "#a8a77a",
  Fire: "#ee8130",
  Water: "#6390f0",
  Grass: "#7ac74c",
  Electric: "#f7d02c",
  Ice: "#96d9d6",
  Fighting: "#c22e28",
  Poison: "#a33ea1",
  Ground: "#e2bf65",
  Flying: "#a98ff3",
  Psychic: "#f95587",
  Bug: "#a6b91a",
  Rock: "#b6a136",
  Ghost: "#735797",
  Dark: "#705746",
  Dragon: "#6f35fc",
  Steel: "#b7b7ce",
};

export function corDoTipo(nome) {
  return coresTipos[nome] || "#888888";
}

// Luminância relativa de uma cor (fórmula de acessibilidade WCAG)
function luminancia(hex) {
  const [r, g, b] = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Escolhe texto branco ou escuro, o que tiver mais contraste com a cor de fundo.
// (Texto branco em cima de "Electric" amarelo, por exemplo, fica ilegível.)
export function corTextoDoTipo(hex) {
  const L = luminancia(hex);
  const contrasteBranco = 1.05 / (L + 0.05);
  const contrasteEscuro = (L + 0.05) / (luminancia("#1b1b1b") + 0.05);
  return contrasteEscuro > contrasteBranco ? "#1b1b1b" : "#ffffff";
}
