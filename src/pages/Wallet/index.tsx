import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { alpha } from "@mui/material/styles";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";

import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Alert,
  Chip,
} from "@mui/material";

import { BasicCard, DrawerMenu } from "../../components";
import { renderColorStatus } from "../../utils";
import * as S from "./styles";

import { getWallet } from "../../services";

interface Props {
  window?: () => Window;
}

const Wallet = (props: Props) => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState<any>();
  const [cryptoBalance, setCryptoBalance] = useState<any>();

  const handleOnError = useCallback(
    (navigateTo: string) => {
      navigate(navigateTo);
    },
    [navigate]
  );

  useEffect(() => {
    if (!transactions) {
      //TODO: Should be inside a CustomHook or another loader.ts file
      getWallet()
        .then((response) => {
          setTransactions(response?.transactions);
          setCryptoBalance(response?.balance);
          console.log("[Info] - GetWallet: ", response);
        })
        .catch((err) => {
          handleOnError("/login");
          console.log("[Error] - GetWallet: ", err);
        });
    }
  }, [transactions, handleOnError]);

  //TODO: Should create a external JSX.component
  const renderTransactions = () => {
    if (!transactions || transactions >= 0) {
      return (
        <TableRow>
          <TableCell component="th" scope="row" colSpan={6}>
            <Alert
              severity="info"
              sx={{
                my: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              You don't have any transactions!
            </Alert>
          </TableCell>
        </TableRow>
      );
    } else {
      return transactions?.map((row: any, index: number) => (
        <TableRow key={index}>
          <TableCell component="th" scope="row">
            {row.description}
          </TableCell>
          <TableCell>{row.amount}</TableCell>
          <TableCell>{row.currency}</TableCell>
          <TableCell>{row.sender}</TableCell>
          <TableCell>{row.receiver}</TableCell>
          <TableCell>
            <Chip label={row.status} color={renderColorStatus(row.status)} />
          </TableCell>
        </TableRow>
      ));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
      }}
    >
      <CssBaseline />

      <DrawerMenu />

      <Box component="main">
        <Toolbar />
        <S.Content>
          <Container maxWidth="lg">
            <BasicCard balanceCrypto={cryptoBalance} />
            <Paper>
              <S.Wrap>
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
                  <TableBody>{renderTransactions()}</TableBody>
                </Table>
              </S.Wrap>
            </Paper>
          </Container>
        </S.Content>
      </Box>
    </Box>
  );
};

export default Wallet;
