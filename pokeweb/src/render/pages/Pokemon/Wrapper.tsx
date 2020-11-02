import React, { useEffect, useState } from 'react';
import CardPokemon from './Card';
import { handleUrlPokemon, formatNamePokemon } from 'src/util/formatString';
import { API_URL } from 'src/config/contraints';
import { useFetch } from 'src/hook/useFetch';

type Props = {
  url: string;
  name: string;
};

const Wrapper: React.FC<Props> = (props: Props) => {
  const [types, setTypes] = useState<string[]>([]);
  const { url, name } = props;
  const { idNumber, idString, urlImage } = handleUrlPokemon(url);
  const { data } = useFetch(`${API_URL}/pokemon/${idNumber}`);

  useEffect(() => {
    setTypes(data.types);
  }, [data.types]);

  return (
    <>
      <CardPokemon
        name={formatNamePokemon(name)}
        idString={idString}
        idNumber={idNumber}
        urlImage={urlImage}
        types={types}
      />
    </>
  );
};
export default Wrapper;
