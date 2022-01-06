import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  FormControl,
  Input,
  InputLabel,
  Box,
  Grid,
  Button,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Toolbar,
  Typography,
  Alert,
} from "@mui/material";

import { DrawerMenu } from "../../components";
import * as S from "./styles";

import { getContacts, postRequest } from "../../services";

interface IContact {
  email: string;
  name: string;
}

const ReceiveCrypto = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<any>();
  const [inputDesc, setInputDesc] = useState<string>("");
  const [inputAmount, setInputAmount] = useState<number>(0);
  const [inputCurrency, setInputCurrency] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [enableAlert, setEnableAlert] = useState<boolean>(false);
  const [valEnableAlert, setValEnableAlert] = useState<string>("");
  const [valEnableAlertColor, setValEnableAlertColor] = useState<any>();

  //TODO: should be a util function
  const handleGoBack = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  useEffect(() => {
    if (!contacts) {
      getContacts()
        .then((response) => {
          setContacts(response);
        })
        .catch((err) => {
          handleGoBack();
        });
    }
  }, [contacts, handleGoBack]);

  const handleRequestClicked = () => {
    const requestParams = {
      description: inputDesc,
      amount: inputAmount,
      currency: inputCurrency,
      sender: inputEmail,
    };
    postRequest(requestParams)
      .then((response) => {
        setEnableAlert(true);
        setValEnableAlert("Successfully to send cryptocurrencies!");
        setValEnableAlertColor("success");
      })
      .catch((err) => {
        setEnableAlert(true);
        setValEnableAlert("Failure to send cryptocurrencies!");
        setValEnableAlertColor("error");
      });
  };

  const customList = (items: readonly IContact[]) => (
    <Paper sx={{ overflow: "auto" }} elevation={0}>
      <Typography variant="h5">Request Cryptocurrency</Typography>
      <br />
      <RadioGroup
        aria-label="user"
        name="radio-buttons-group"
        onChange={(e) => setInputEmail(e.target.value)}
      >
        {items?.map((value: IContact, index: number) => {
          return (
            <FormControlLabel
              key={index}
              value={value.email}
              control={<Radio />}
              label={`${value.name} - ${value.email}`}
            />
          );
        })}
      </RadioGroup>
    </Paper>
  );

  const renderAlert = enableAlert ? (
    <Alert severity={valEnableAlertColor}>{valEnableAlert}</Alert>
  ) : null;

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        mt: 13,
      }}
    >
      <DrawerMenu />
      <Toolbar />
      <S.Content>
        <Container maxWidth="lg">
          <Grid container justifyContent="center" alignItems="center">
            <S.Wrap>
              <Paper>
                <form>
                  <br />
                  <br />
                  <Box sx={{ m: 3 }}>{customList(contacts)}</Box>
                  <Grid item>
                    <Box sx={{ m: 3 }}>
                      <br />
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Crypto Currency
                        </FormLabel>
                        <RadioGroup
                          aria-label="currency"
                          name="radio-buttons-group"
                          onChange={(e) => setInputCurrency(e.target.value)}
                        >
                          <FormControlLabel
                            value="ETH"
                            control={<Radio />}
                            label="ETH"
                          />
                          <FormControlLabel
                            value="BTC"
                            control={<Radio />}
                            label="BTC"
                          />
                          <FormControlLabel
                            value="DOGE"
                            control={<Radio />}
                            label="DOGE"
                          />
                        </RadioGroup>
                      </FormControl>
                      <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="description">
                          Description
                        </InputLabel>
                        <Input
                          id="description"
                          name="description"
                          autoFocus
                          onChange={(e) => setInputDesc(e.target.value)}
                        />
                      </FormControl>
                      <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="amount">Amount</InputLabel>
                        <Input
                          name="amount"
                          type="number"
                          id="amount"
                          onChange={(e) =>
                            setInputAmount(parseFloat(e.target.value))
                          }
                        />
                      </FormControl>
                    </Box>
                    <Grid container direction="column" alignItems="center">
                      {renderAlert}
                      <br />
                      <Button
                        sx={{ mb: 4, minWidth: "240px" }}
                        variant="contained"
                        color="primary"
                        onClick={handleRequestClicked}
                      >
                        Request Cryptocurrency
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </S.Wrap>
          </Grid>
        </Container>
      </S.Content>
    </Box>
  );
};

export default ReceiveCrypto;
