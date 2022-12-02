import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import type {RootState} from '../../redux/store'
import {useDispatch, useSelector} from 'react-redux'
import {despesa} from '../../interface/despesa'


function createData(
  Date: string,
  Item: string,
  TAG: string,
  Payment: string,
  Valor: number,
) {
  return { Date, Item, TAG, Payment, Valor };
}

//const stateGeral = useSelector((state: RootState) => state);

const rows = [
  createData('29/10/22', 'T-shirt', 'clothing', 'money', 21.5),
  createData('29/10/22', 'Candy', 'food', 'money', 40.3),
  createData('20/10/22', 'Coffee', 'food', 'money', 6.12),
  createData('21/10/22', 'Tea', 'food', 'money', 4.3),
  createData('21/10/22', 'lunch', 'food', 'money', 18.9),
];


export function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 50 }} aria-label="simple table">
        <TableHead style={{backgroundColor: "lightsteelblue"}} >
          <TableRow>
            <TableCell> Date </TableCell>
            <TableCell align="right">Item</TableCell>
            <TableCell align="right">TAG</TableCell>
            <TableCell align="right">Payment</TableCell>
            <TableCell align="right">Moeda</TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {stateGeral.geral.despesas.length > 0 && stateGeral.geral.despesasExibidas.map((item: despesa, index: number) => {
                                let data = new Date(item.data.getFullYear(), item.data.getMonth(), item.data.getDate())
                                data.setDate(data.getDate() + 1)
                                const dataFormatada = '' + data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear()
                                return (
            <TableRow
              key={item.moeda}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {dataFormatada}
              </TableCell>
              <TableCell align="right">{item.tag}</TableCell>
              <TableCell align="right">{item.metodoDePagamento}</TableCell>
              <TableCell align="right">{item.moeda}</TableCell>
            </TableRow>
          )})}

        </TableBody> */}
      </Table>
    </TableContainer>
  );
}