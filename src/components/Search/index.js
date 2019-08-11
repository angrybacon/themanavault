import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import React from 'react';


const useStyles = makeStyles(theme => ({
  icon: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: theme.spacing(6),
  },
  inputInput: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(6),
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  root: {
    backgroundColor: fade(theme.palette.common.white, .15),
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    flexGrow: 1,
    position: 'relative',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, .25),
    },
  },
}));


export default function Search() {
  const classes = useStyles();
  const [ state, setState ] = React.useState({search: ''});

  const onChange = event => {
    setState({search: event.target.value});
  };

  return (
    <div className={classes.root}>
      <div children={<Icon color="white" path={mdiMagnify} size={1} />} className={classes.icon} />
      <InputBase
        classes={{input: classes.inputInput, root: classes.inputRoot}}
        onChange={onChange}
        placeholder="Search cards..."
        value={state.search}
        variant="outlined"
      />
    </div>
  );
}
