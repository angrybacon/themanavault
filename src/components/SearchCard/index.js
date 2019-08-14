import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';


const useStyles = makeStyles(theme => ({
  art: {
    alignSelf: 'center',
    borderRadius: theme.shape.borderRadius,
    maxHeight: 60,
    maxWidth: 60,
    minHeight: 60,
    minWidth: 60,
    objectFit: 'cover',
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  oracle: {
    flexGrow: 1,
    paddingLeft: theme.spacing(2),
  },
  root: {
    cursor: 'pointer',
    display: 'flex',
    padding: theme.spacing(1, 2),
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));


export default function SearchCard({ card }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img alt={card.name} className={classes.art} src={card.image_uris.art_crop} />
      <div className={classes.oracle}>
        <div className={classes.heading}>
          <Typography children={`${card.name} ${card.mana_cost}`} />
          <Typography children={card.type_line} />
        </div>
        <Typography children={card.oracle_text} variant="caption" />
      </div>
    </div>
  );
}
