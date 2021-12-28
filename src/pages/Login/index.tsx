import React from "react";

import Container from "@mui/material/Container";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@mui/material/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { Header } from "../../components";
import * as S from "./styles";

const Login = () => {
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
                  <Box sx={{ m: 3 }}>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="email">Username</InputLabel>
                      <Input
                        id="email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                      />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Input
                        name="password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                    </FormControl>
                    <Box sx={{ mt: 3, mb: 5 }}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                      >
                        Sign in
                      </Button>
                    </Box>
                  </Box>
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
