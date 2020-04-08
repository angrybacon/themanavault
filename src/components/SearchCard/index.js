import Typography from '@material-ui/core/Typography';
import React from 'react';
import useStyles from './styles.js';


export default function SearchCard({ card={} }) {
  const classes = useStyles();
  card = card.card_faces && card.card_faces.length ? card.card_faces[0] : card
  const { image_uris: art={}, name, mana_cost: mana, oracle_text: text, type_line: type } = card;
  return (
    <div className={classes.root}>
      <img alt={name} className={classes.art} src={art.art_crop} />
      <div className={classes.oracle}>
        <div className={classes.heading}>
          <Typography children={name} className={classes.headingName} />
          <Typography children={mana} className={classes.headingMana} />
          <Typography children={type} className={classes.headingType} />
        </div>
        <Typography children={text} className={classes.oracleText} component="p" variant="caption" />
      </div>
    </div>
  );
}
