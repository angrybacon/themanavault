import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import { useMount } from 'react-use';
import DeckTable from '../DeckTable';


const useStyles = makeStyles({
  root: {
    overflowX: 'auto',
  },
});


export default function Deck() {

  const desktop = useMediaQuery(theme => theme.breakpoints.up('md'));
  const classes = useStyles();
  const [ deck, setDeck ] = React.useState(null);

  const fetch = () => axios.get('/echostorm.json').then(({ data }) => {
    setDeck(data);
  });

  useMount(() => fetch());

  return deck && (
    <>
      <Typography children={deck.name} variant="h2" />
      <Paper className={classes.root}>
        <Table padding={desktop ? 'default' : 'checkbox'} size="small">
          <DeckTable cards={deck.main} />
          <DeckTable cards={deck.side} />
        </Table>
      </Paper>
    </>
  );
}
