import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  root: {
    '& > :not(:last-child)': {
      marginRight: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        marginRight: theme.spacing(2),
      },
    },
  },
}));
