import PropTypes from 'prop-types';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';


export default function DeckHeader({ deck }) {
  const classes = useStyles();
  return (
    <Toolbar classes={{root: classes.root}}>
      <Typography children={deck.name} variant="h6" />
    </Toolbar>
  );
}


DeckHeader.defaultProps = {
  deck: {},
};


DeckHeader.propTypes = {
  deck: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};
