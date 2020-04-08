import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  root: {
    '& > *': {
      '&:not(:last-child)': {
        marginBottom: theme.spacing(2),
      },
    },
  },
}));
