interface Format {
  idString: string;
  idNumber: number;
  urlImage: string;
}

export const formatNamePokemon = (name: string = ''): string => {
  let result = '';
  result = name.charAt(0).toUpperCase() + name.slice(1);
  return result;
};

export const formatGenerationName = (name: string): string => {
  const result: string[] = name.split('-');
  return `${formatNamePokemon(result[0])} ${result[1].toUpperCase()}`;
};

export const formatHeightAndWeight = (params: number = 0): number => {
  return params / 10;
};

export const handleUrlPokemon = (url: string): Format => {
  const s = url.split('/');
  const idNumber: number = parseInt(s[6], 0);
  let idString = '';
  if (idNumber < 10) {
    idString = `00${idNumber}`;
  } else if (idNumber > 99) {
    idString = `${idNumber}`;
  } else {
    idString = `0${idNumber}`;
  }

  const urlImage: string =
    idNumber < 10000
      ? `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idString}.png`
      : 'https://upload.wikimedia.org/wikipedia/commons/5/55/Question_Mark.svg';
  return {
    idNumber,
    idString,
    urlImage,
  };
};
