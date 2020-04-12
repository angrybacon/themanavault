import { PackageVariant, Pound } from 'mdi-material-ui';
import PropTypes from 'prop-types';
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import useStyles from './styles';


export default function DeckBody({ cards }) {

  const [ selection, setSelection ] = React.useState([]);
  const classes = useStyles();
  const overrides = {
    MuiCheckbox: {root: {'&:hover': {background: 'none'}}},
    MuiTableCell: {root: {whiteSpace: 'nowrap'}},
  };

  const isSelected = (name = '*') => {
    return name === '*' ? Object.keys(selection).length === cards.length : !!selection[name];
  };

  const onSelect = (name = '*') => () => {
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
            <PackageVariant className={classes.icon} fontSize="small" />
          </TableCell>
          <TableCell align="center" padding="checkbox">
            <Pound className={classes.icon} fontSize="small" />
          </TableCell>
          <TableCell children="Name" />
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
            </TableRow>
          );
        })}
      </TableBody>
    </ThemeProvider>
  );
}


DeckBody.defaultProps = {
  cards: [],
};


DeckBody.propTypes = {
  cards: PropTypes.array,
};
