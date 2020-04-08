import axios from 'axios';
import React from 'react';
import { useMount } from 'react-use';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DeckBody from '../DeckBody';
import DeckHeader from '../DeckHeader';
import useStyles from './styles';


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
