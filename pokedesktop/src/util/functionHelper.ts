function convertNumberIdPokemon(id: number): string {
  let result: string;
  if (id < 10) {
    result = `00${id}`;
  } else if (id > 99) {
    result = `${id}`;
  } else {
    result = `0${id}`;
  }
  return result;
}

function splitNumberIdPokemon(url: string): string {
  let s = url.split("/");
  return s[6];
}

function formatNamePokemon(name: string): string {
  let s = name.charAt(0);
  let result = s.toUpperCase() + name.slice(1);
  return result;
}

function formatNumber(index: number): string {
  let result = (index / 10).toFixed(1);
  return result;
}

function formatUrlImage(id: number): string {
  let _id = convertNumberIdPokemon(id);
  let result: string = "";
  if (id < 10000) {
    result = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${_id}.png`;
  } else {
    result =
      "https://upload.wikimedia.org/wikipedia/commons/5/55/Question_Mark.svg";
  }
  return result;
}

function convertInfoPokemon(num: number) {
  return num / 10;
}

function refactorGeneration(name: string): string {
  let tmp = name.split("-");
  let result = formatNamePokemon(tmp[0]) + " " + tmp[1].toUpperCase();
  return result;
}

export {
  convertNumberIdPokemon,
  formatNamePokemon,
  formatNumber,
  formatUrlImage,
  splitNumberIdPokemon,
  convertInfoPokemon,
  refactorGeneration,
};
