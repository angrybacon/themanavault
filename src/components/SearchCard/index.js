import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';


const useStyles = makeStyles(theme => ({
  art: {
    alignSelf: 'center',
    borderRadius: '50%',
    maxHeight: theme.spacing(8),
    maxWidth: theme.spacing(8),
    minHeight: theme.spacing(8),
    minWidth: theme.spacing(8),
    objectFit: 'cover',
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  oracle: {
    flexGrow: 1,
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
  oracleText: {
    color: theme.palette.text.secondary,
    display: '-webkit-box',
    height: `${theme.typography.caption.lineHeight * 2}em`,
    overflowY: 'hidden',
    position: 'relative',
    textOverflow: 'ellipsis',
    '-webkitBoxOrient': 'vertical',
    '-webkitLineClamp': 2,
  },
  root: {
    cursor: 'pointer',
    display: 'flex',
    height: theme.spacing(10),
    padding: theme.spacing(0, 2),
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));


export default function SearchCard({ card={} }) {
  const classes = useStyles();
  card = card.card_faces && card.card_faces.length ? card.card_faces[0] : card
  const { image_uris: art={}, name, mana_cost: mana, oracle_text: text, type_line: type } = card;
  return (
    <div className={classes.root}>
      <img alt={name} className={classes.art} src={art.art_crop} />
      <div className={classes.oracle}>
        <div className={classes.heading}>
          <Typography children={`${name} ${mana}`} />
          <Typography children={type} />
        </div>
        <Typography children={text} className={classes.oracleText} component="p" variant="caption" />
      </div>
    </div>
  );
}
