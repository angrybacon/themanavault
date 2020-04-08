import { fade, makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({

  icon: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: theme.spacing(6),
  },

  root: {
    backgroundColor: fade(theme.palette.common.white, .15),
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    flexGrow: 1,
    position: 'relative',
  },

  searchContainer: {
    width: '100%',
  },

  searchInput: {
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, .25),
    },
    color: 'inherit',
    width: '100%',
  },

  searchInputInput: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(6),
    width: '100%',
  },

  suggestion: {
  },

  suggestionHighlighted: {
    backgroundColor: theme.palette.action.hover,
  },

  suggestions: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    left: 0,
    marginTop: theme.spacing(1),
    maxHeight: '70vh',
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: theme.spacing(1, 0),
    position: 'absolute',
    right: 0,
  },

  suggestionsList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
}));
