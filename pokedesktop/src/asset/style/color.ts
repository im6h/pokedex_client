const colorStore = {
  background: "#F5F5F5",

  // color type pokemon.
  typeFire: "#FD7D24",
  typeWater: "#4592C4",
  typeGrass: "#9BCC50",
  typeElectric: "#EED535",
  typeDragon: "linear - gradient(180deg, #53a4cf 50 %, #f16e57 50 %)",
  typeDark: "#707070",
  typePsychic: "#F366B9",
  typeIce: "#51C4E7",
  typeFlying: "linear - gradient(180deg, #3dc7ef 50 %, #bdb9b8 50 %)",
  typeBug: "#729F3F",
  typeFairy: "#FDB9E9",
  typeGround: "linear - gradient(180deg, #f7de3f 50 %, #ab9842 50 %)",
  typeNormal: "#A4ACAF",
  typeRock: "#A38C21",
  typeFighting: "#D56723",
  typePoison: "#B97FC9",
  typeGhost: "#7B62A3",
  typeSteel: "#84B7B8",

  // color category.
  pokedex: "#4FC1A6",
  moves: "#FA6555",
  abilities: "#58ABF6",
  item: "#FFCE4B",
  generation: "#A06EB4",
  type: "#B1736C",
};
export const getColor = (color: string) => {
  switch (color) {
    case "fire":
      return colorStore.typeFire;
    case "water":
      return colorStore.typeWater;
    case "grass":
      return colorStore.typeGrass;
    case "electric":
      return colorStore.typeElectric;
    case "dragon":
      return colorStore.typeDragon;
    case "dark":
      return colorStore.typeDark;
    case "psychic":
      return colorStore.typePsychic;
    case "ice":
      return colorStore.typeIce;
    case "flying":
      return colorStore.typeFighting;
    case "bug":
      return colorStore.typeBug;
    case "fairy":
      return colorStore.typeFairy;
    case "ground":
      return colorStore.typeGround;
    case "normal":
      return colorStore.typeNormal;
    case "rock":
      return colorStore.typeRock;
    case "fighting":
      return colorStore.typeFighting;
    case "poison":
      return colorStore.typePoison;
    case "ghost":
      return colorStore.typeGhost;
    case "steel":
      return colorStore.typeSteel;
  }
};
export default colorStore;
