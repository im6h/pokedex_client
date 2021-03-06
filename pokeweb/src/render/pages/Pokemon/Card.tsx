import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import {
  Chip,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { getColor } from 'src/util/color';
import { formatNamePokemon } from 'src/util/formatString';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'src/store';

type Props = {
  name: string;
  idString: string;
  idNumber: number;
  urlImage: string;
  types: string[];
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      height: '100%',
      margin: '2px 0px',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: '90%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    },
    chip: {
      width: 70,
      height: 20,
      margin: '2px 0px',
      color: 'white',
    },
  }),
);
const CardPokemon: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch<Dispatch>();
  const { name, idString, idNumber, urlImage, types } = props;
  const classes = useStyles();
  const handleOnClick = (): void => {
    dispatch.pokemon.getPokemon(idNumber);
    dispatch.pokemon.getSpecial(idNumber);
  };

  return (
    <>
      <Card variant="outlined" className={classes.root} onClick={handleOnClick}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h6">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              #{idString}
            </Typography>
            <WrapperChip>
              {types?.map((e: any, idx: number) => (
                <Chip
                  key={idx}
                  className={classes.chip}
                  style={{
                    background: getColor(e.type?.name),
                  }}
                  size="small"
                  label={formatNamePokemon(e.type?.name)}
                />
              ))}
            </WrapperChip>
          </CardContent>
        </div>
        <CardMedia className={classes.cover} image={urlImage} title={name} />
      </Card>
    </>
  );
};
const WrapperChip = styled.div`
  display: flex;
  flex-direction: column;
`;
export default CardPokemon;
