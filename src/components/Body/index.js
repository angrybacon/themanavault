import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      padding: theme.spacing(2),
      '&:not(:last-child)': {
        marginBottom: theme.spacing(2),
      },
    },
  },
}));


export default function Body() {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={10} md={8} className={classes.root}>
        <Paper>
          <Typography>
            Nulla posuere sollicitudin aliquam ultrices sagittis orci, a
            scelerisque purus semper eget duis at tellus at urna condimentum
            mattis. Sed ullamcorper morbi tincidunt ornare massa, eget egestas
            purus viverra accumsan.
          </Typography>
        </Paper>
        <Paper>
          <Typography>
            Nunc, sed blandit libero volutpat sed cras ornare arcu dui vivamus
            arcu felis, bibendum ut tristique et, egestas quis ipsum suspendisse
            ultrices. Orci phasellus egestas tellus rutrum tellus pellentesque eu!
          </Typography>
        </Paper>
        <Paper>
          <Typography>
            Eu tincidunt tortor aliquam nulla facilisi cras fermentum, odio eu
            feugiat pretium, nibh ipsum! Lobortis feugiat vivamus at augue eget
            arcu dictum varius duis at consectetur lorem donec massa sapien!
          </Typography>
        </Paper>
        <Paper>
          <Typography>
            Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar
            proin gravida hendrerit lectus a molestie lorem ipsum! Donec ac odio
            tempor orci dapibus ultrices in iaculis nunc sed augue.
          </Typography>
        </Paper>
        <Paper>
          <Typography>
            Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam
            ultrices sagittis orci, a scelerisque purus! Habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas integer eget
            aliquet.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
