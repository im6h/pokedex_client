import React from 'react';
import styled from 'styled-components';
import { Chip, Card, CardContent, Typography } from '@material-ui/core';
import { useFetch } from 'src/hook/useFetch';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { getColor } from 'src/util/color';
import { formatNamePokemon } from 'src/util/formatString';

type Props = {
  name: string;
  url: string;
  idString: string;
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      height: '100%',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      width: '100%',
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
const CardMove: React.FC<Props> = (props: Props) => {
  const { name, url, idString } = props;
  const classes = useStyles();
  const { data } = useFetch(url);

  return (
    <>
      <Card variant="outlined" className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <WrapperChip>
              <Chip
                className={classes.chip}
                style={{
                  background: getColor(data?.type?.name || ''),
                }}
                size="small"
                label={formatNamePokemon(data?.type?.name || '')}
              />
            </WrapperChip>
            <CardTop>
              <Typography variant="subtitle1" color="textSecondary">
                #{idString}
              </Typography>
              <Typography gutterBottom variant="h6">
                {formatNamePokemon(name)}
              </Typography>
            </CardTop>
          </CardContent>
        </div>
        {/* <CardMedia className={classes.cover} image={urlImage} title={name} /> */}
      </Card>
    </>
  );
};
const WrapperChip = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;
export default CardMove;
