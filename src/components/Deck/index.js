import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';
import React from 'react';
import deck from './deck';


export default function Deck() {
  const now = moment().format('YYYY.MM.DD HH:mm:ss');
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell children="Vault" padding="checkbox" />
          <TableCell children="Amount" padding="checkbox" />
          <TableCell children="Name" />
          <TableCell children="Set" />
          <TableCell children="Price" />
          <TableCell children="Type" />
          <TableCell children="Mana" />
          <TableCell children="Updated On" />
        </TableRow>
      </TableHead>
      <TableBody>
        {deck.main.map((it, index) => (
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
      <TableHead>
        <TableRow>
          <TableCell children="Vault" padding="checkbox" />
          <TableCell children="Amount" padding="checkbox" />
          <TableCell children="Name" />
          <TableCell children="Set" />
          <TableCell children="Price" />
          <TableCell children="Type" />
          <TableCell children="Mana" />
          <TableCell children="Updated On" />
        </TableRow>
      </TableHead>
      <TableBody>
        {deck.side.map((it, index) => (
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
    </Table>
  );
}
