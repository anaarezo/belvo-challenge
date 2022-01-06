import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  Box,
  Toolbar,
  Grid,
} from "@mui/material";

import { BasicCard, DrawerMenu } from "../../components";
import { renderColorStatus } from "../../utils";
import * as S from "./styles";

import { getWallet } from "../../services";

const Wallet = () => {
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
        })
        .catch((err) => {
          handleOnError("/login");
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
      }}
    >
      <DrawerMenu />
      <Toolbar />
      <S.Content>
        <Box component="main" sx={{ flexGrow: 1, mt: 12 }}>
          <Grid container>
            <Container maxWidth="lg">
              <Grid item sm={8} md={12} lg={12}>
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
                          <TableCell>To:</TableCell>
                          <TableCell>Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>{renderTransactions()}</TableBody>
                    </Table>
                  </S.Wrap>
                </Paper>
              </Grid>
            </Container>
          </Grid>
        </Box>
      </S.Content>
    </Box>
  );
};

export default Wallet;
