import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({

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
    '& > :not(:last-child)': {
      marginRight: theme.spacing(1),
    },
    display: 'flex',
  },

  headingMana: {
    flexShrink: 0,
  },

  headingName: {
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  headingType: {
    flexShrink: 0,
    marginLeft: 'auto',
  },

  oracle: {
    flexGrow: 1,
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },

  oracleText: {
    '-webkitBoxOrient': 'vertical',
    '-webkitLineClamp': 2,
    color: theme.palette.text.secondary,
    display: '-webkit-box',
    height: `${theme.typography.caption.lineHeight * 2}em`,
    overflowY: 'hidden',
    position: 'relative',
    textOverflow: 'ellipsis',
  },

  root: {
    cursor: 'pointer',
    display: 'flex',
    height: theme.spacing(10),
    padding: theme.spacing(0, 2),
  },
}));
