import React from 'react';
import CardType from './Card';
import { handleUrlPokemon, formatNamePokemon } from 'src/util/formatString';

type Props = {
  url: string;
  name: string;
};
const Wrapper: React.FC<Props> = (props: Props) => {
  const { url, name } = props;
  return (
    <>
      <CardType
        name={formatNamePokemon(name)}
        idString={handleUrlPokemon(url).idString}
        url={url}
      />
    </>
  );
};
export default Wrapper;
