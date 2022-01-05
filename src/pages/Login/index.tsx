import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@mui/material/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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

  const renderAlert = enableAlert ? (
    <Alert severity="error">Error trying sign in!</Alert>
  ) : null;

  return (
    <>
      <Header />
      <S.Container>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} lg={8}>
              <Box sx={{ marginTop: "200px" }}>
                <Typography component="h1" variant="h2">
                  Enter the world
                </Typography>
                <Typography component="h1" variant="h2">
                  of crypto currencies
                </Typography>
                <Typography component="h1" variant="h2">
                  with Open Banking
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box sx={{ marginTop: "200px" }}>
                <Paper variant="outlined" square>
                  <form>
                    <Box sx={{ m: 3 }}>
                      <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Username</InputLabel>
                        <Input
                          id="email"
                          name="email"
                          autoComplete="email"
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
                          autoComplete="current-password"
                          onChange={(e) => setInputPassVal(e.target.value)}
                        />
                      </FormControl>

                      {renderAlert}

                      <Box sx={{ mt: 3, mb: 5 }}>
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
              </Box>
            </Grid>
          </Grid>
        </Container>
      </S.Container>
    </>
  );
};
export default Login;
