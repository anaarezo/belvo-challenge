import React, { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

import Box from "@mui/material/Box";

import { Header } from "../../components";
import * as S from "./styles";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormLabel from "@mui/material/FormLabel";

import { getContacts, postSending } from "../../services";

interface IContact {
  email: string;
  name: string;
}
const TransferList = () => {
  const [checked, setChecked] = useState<any>();
  const [contacts, setContacts] = useState<any>();
  const [inputDesc, setInputDesc] = useState<string>("");
  const [inputAmount, setInputAmount] = useState<number>(0);
  const [inputCurrency, setInputCurrency] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");

  useEffect(() => {
    if (!contacts) {
      getContacts()
        .then((response) => {
          setContacts(response);
          console.log("SUCCESS GET contact", response);
        })
        .catch((err) => {
          console.log("ERROR GET Contact", err);
        });
      console.log("CONTACTS", contacts);
    }
  }, [contacts]);

  const handleSendClicked = () => {
    console.log("INPUTS", inputDesc, inputAmount, inputCurrency, inputEmail);

    const sendParams = {
      description: inputDesc,
      amount: inputAmount,
      currency: inputCurrency,
      receiver: inputEmail,
    };
    postSending(sendParams)
      .then((response) => {
        console.log("STATE: SENDING SUCCESS", response);
      })
      .catch((err) => {
        console.log("STATE: SENDING FAILED", err);
      });

    console.log("entrou signin");
  };

  const customList = (items: readonly IContact[]) => (
    <Paper sx={{ overflow: "auto" }}>
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

  return (
    <S.Container>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <form>
            <br />
            <br />
            <Grid item>{customList(contacts)}</Grid>
            <Grid item>
              <Box sx={{ m: 3 }}>
                <br />
                <FormControl component="fieldset">
                  <FormLabel component="legend">Crypto Currency</FormLabel>
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
                  <InputLabel htmlFor="description">Description</InputLabel>
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
                    onChange={(e) => setInputAmount(parseFloat(e.target.value))}
                  />
                </FormControl>
              </Box>
              <Grid container direction="column" alignItems="center">
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSendClicked}
                >
                  Send
                </Button>
                <br />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => {}}
                >
                  Receive
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Container>
    </S.Container>
  );
};

export default TransferList;
