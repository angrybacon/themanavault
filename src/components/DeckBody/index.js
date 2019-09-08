import Checkbox from '@material-ui/core/Checkbox';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { mdiPackageVariant, mdiPound } from '@mdi/js'
import Icon from '@mdi/react'
import moment from 'moment';
import React from 'react';
import theme from '../../theme';


const useStyles = makeStyles(theme => ({
  icon: {
    display: 'block',
    fill: theme.palette.text.secondary,
  },
}));


export default function DeckBody({ cards=[] }) {

  const classes = useStyles();
  const [ selection, setSelection ] = React.useState([]);
  const overrides = {
    MuiCheckbox: {root: {'&:hover': {background: 'none'}}},
    MuiTableCell: {root: {whiteSpace: 'nowrap'}},
  };
  const now = moment().format('YYYY.MM.DD HH:mm:ss');

  const isSelected = (name='*') => {
    return name === '*' ? Object.keys(selection).length === cards.length : !!selection[name];
  };

  const onSelect = (name='*') => () => {
    if (name === '*') {
      setSelection(isSelected() ? {} : cards.reduce((accumulator, { name }) => (
        {...accumulator, [name]: true}
      ), {}));
    }
    else {
      const { [name]: value, ...rest } = selection;
      setSelection({ ...rest, ...(value ? undefined : {[name]: true})});
    }
  };

  const isSelectedAll = isSelected();
  return !!cards.length && (
    <ThemeProvider theme={{...theme, overrides}}>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              checked={isSelectedAll}
              indeterminate={!!Object.keys(selection).length && !isSelectedAll}
              onChange={onSelect('*')}
            />
          </TableCell>
          <TableCell align="center" padding="checkbox">
            <Icon className={classes.icon} path={mdiPackageVariant} size={.75} />
          </TableCell>
          <TableCell align="center" padding="checkbox">
            <Icon className={classes.icon} path={mdiPound} size={.75} />
          </TableCell>
          <TableCell children="Name" />
          <TableCell children="Set" />
          <TableCell children="Price" />
          <TableCell children="Type" />
          <TableCell children="Mana" />
          <TableCell children="Updated On" />
        </TableRow>
      </TableHead>
      <TableBody>
        {cards.map((it, index) => {
          const highlight = isSelected(it.name);
          return (
            <TableRow hover key={index} onClick={onSelect(it.name)} selected={highlight}>
              <TableCell children={<Checkbox checked={highlight} />} padding="checkbox" />
              <TableCell align="center" padding="checkbox" children={it.amount} />
              <TableCell align="center" padding="checkbox" children={it.amount} />
              <TableCell children={it.name} component="th" scope="row" />
              <TableCell children={it.set} />
              <TableCell children={`${it.price}€`} />
              <TableCell children={it.type} />
              <TableCell children={it.mana} />
              <TableCell children={now} />
            </TableRow>
          );
        })}
      </TableBody>
    </ThemeProvider>
  );
}
