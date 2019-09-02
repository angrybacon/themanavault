import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { ThemeProvider } from '@material-ui/styles';
import moment from 'moment';
import React from 'react';
import theme from '../../theme';


export default function DeckTable({ cards=[] }) {
  const now = moment().format('YYYY.MM.DD HH:mm:ss');
  return (
    <ThemeProvider theme={{...theme, overrides: {MuiTableCell: {root: {whiteSpace: 'nowrap'}}}}}>
      <TableHead>
        <TableRow>
          <TableCell children="Vault" />
          <TableCell children="Amount" />
          <TableCell children="Name" />
          <TableCell children="Set" />
          <TableCell children="Price" />
          <TableCell children="Type" />
          <TableCell children="Mana" />
          <TableCell children="Updated On" />
        </TableRow>
      </TableHead>
      <TableBody>
        {cards.map((it, index) => (
          <TableRow key={index}>
            <TableCell children={it.amount} />
            <TableCell children={it.amount} />
            <TableCell children={it.name} component="th" scope="row" />
            <TableCell children={it.set} />
            <TableCell children={`${it.price}€`} />
            <TableCell children={it.type} />
            <TableCell children={it.mana} />
            <TableCell children={now} />
          </TableRow>
        ))}
      </TableBody>
    </ThemeProvider>
  );
}
