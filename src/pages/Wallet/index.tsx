import React from "react";

import Container from "@mui/material/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { Header } from "../../components";
import * as S from "./styles";
import BasicCard from "../../components/BasicCard";

let id = 0;
function createData(
  description: any,
  amount: any,
  currency: any,
  sender: any,
  receiver: any,
  status: any
) {
  id += 1;
  return { id, description, amount, currency, sender, receiver, status };
}

// {
//   "email": "user@example.com",
//   "transactions": [
//     {
//       "description": "string",
//       "amount": 0,
//       "currency": "ETH",
//       "sender": "user@example.com",
//       "receiver": "user@example.com",
//       "status": "Pending"
//     }
//   ],
//   "balance": {
//     "property1": 0,
//     "property2": 0
//   }
// }

const transactions = [
  createData(
    "transaction 1",
    "159,00",
    "ETH",
    "mail**@gmail.com",
    "mail**@gmail.com",
    "Pending"
  ),
  createData(
    "transaction 1",
    "237,00",
    "ETH",
    "mail**@gmail.com",
    "mail**@gmail.com",
    "Pending"
  ),
  createData(
    "transaction 1",
    "262,00",
    "DOGE",
    "mail**@gmail.com",
    "mail**@gmail.com",
    "Pending"
  ),
  createData(
    "transaction 1",
    "305,00",
    "BTC",
    "mail**@gmail.com",
    "mail**@gmail.com",
    "Pending"
  ),
  createData(
    "transaction 1",
    "356,00",
    "ETH",
    "mail**@gmail.com",
    "mail**@gmail.com",
    "Pending"
  ),
];

const Wallet = () => {
  return (
    <>
      <Header />
      <S.Container>
        <Container maxWidth="lg">
          <BasicCard />
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Currency</TableCell>
                  <TableCell>From:</TableCell>
                  <TableCell className="hidden-xs">To:</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.map((row: any) => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.description}
                      </TableCell>
                      <TableCell>{row.amount}</TableCell>
                      <TableCell>{row.currency}</TableCell>
                      <TableCell>{row.sender}</TableCell>
                      <TableCell>{row.receiver}</TableCell>
                      <TableCell>{row.status}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </Container>
      </S.Container>
    </>
  );
};

export default Wallet;
