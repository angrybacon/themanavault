import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import { useMount } from 'react-use';
import DeckBody from '../DeckBody';
import DeckHeader from '../DeckHeader';


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
    <Paper className={classes.root}>
      <DeckHeader deck={deck} />
      <Table padding={desktop ? 'default' : 'default'} size="small">
        <DeckBody cards={deck.main} />
        <DeckBody cards={deck.side} />
      </Table>
    </Paper>
  );
}
