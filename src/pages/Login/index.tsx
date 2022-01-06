import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Alert,
  Container,
  FormControl,
  Input,
  InputLabel,
  Grid,
  Paper,
  Box,
  Button,
} from "@mui/material";

import { authenticate, postLogin } from "../../services";
import { Header } from "../../components";
import * as S from "./styles";

const Login = () => {
  const navigate = useNavigate();
  const handleOnClick = () => navigate("/wallet");

  const [inputUserVal, setInputUserVal] = useState<string>("");
  const [inputPassVal, setInputPassVal] = useState<string>("");
  const [enableAlert, setEnableAlert] = useState<boolean>(false);

  const handleSignIn = () => {
    const loginParams = {
      username: inputUserVal,
      password: inputPassVal,
    };
    postLogin(loginParams)
      .then((response) => {
        authenticate(response.access_token);
        handleOnClick();
      })
      .catch((err) => {
        setEnableAlert(true);
      });
  };

  const handleSubmit = () => {
    if (inputUserVal.length <= 0 || inputPassVal.length <= 0) {
      setEnableAlert(true);
    } else {
      setEnableAlert(false);
      handleSignIn();
    }
    return;
  };

  const handleOnKeyPress = (event: any) => {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  };

  const renderAlert = enableAlert ? (
    <Alert severity="error">Error trying sign in!</Alert>
  ) : null;

  return (
    <>
      <Header />
      <S.Container>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ mt: 20 }}
          >
            <Paper variant="outlined" square>
              <form onKeyDown={handleOnKeyPress}>
                <Box sx={{ m: 3 }}>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Username</InputLabel>
                    <Input
                      id="email"
                      name="email"
                      autoFocus
                      onChange={(e) => setInputUserVal(e.target.value)}
                    />
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                      name="password"
                      type="password"
                      id="password"
                      onChange={(e) => setInputPassVal(e.target.value)}
                    />
                  </FormControl>

                  <Box sx={{ mt: 3, mb: 5 }}>
                    {renderAlert}
                    <br />
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit}
                    >
                      Sign in
                    </Button>
                  </Box>
                </Box>
              </form>
            </Paper>
          </Grid>
        </Container>
      </S.Container>
    </>
  );
};

export default Login;
