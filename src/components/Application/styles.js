import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  '@global': {
    'body, html, #root': {
      height: '100%',
      margin: 0,
    },
  },
  body: {
    flexGrow: 1,
    overflowY: 'auto',
    padding: [[theme.spacing(4), 0]],
  },
  header: {
  },
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
}));
