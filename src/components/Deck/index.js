import axios from 'axios';
import React from 'react';
import { useMount } from 'react-use';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Body from './Body';
import Header from './Header';
import useStyles from './styles';


export default function Deck() {

  const desktop = useMediaQuery(theme => theme.breakpoints.up('md'));
  const classes = useStyles();
  const [ deck, setDeck ] = React.useState(null);

  const fetch = () => axios.get('/doomsday.json').then(({ data }) => {
    setDeck(data);
  });

  useMount(() => fetch());

  return deck && (
    <Paper className={classes.root}>
      <Header deck={deck} />
      <Table padding={desktop ? 'default' : 'default'} size="small">
        <Body cards={deck.main} />
        <Body cards={deck.side} />
      </Table>
    </Paper>
  );
}
