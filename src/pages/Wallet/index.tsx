import React from "react";

import Container from "@mui/material/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";

import { Header } from "../../components";
import * as S from "./styles";

const Wallet = () => {
  return (
    <>
      <Header />
      <S.Container>
        <Container maxWidth="lg">
          <Box
            sx={{
              mx: "auto",
              my: 20,
              p: 1,
              borderRadius: 1,
              textAlign: "center",
            }}
          >
            <Typography component="h1" variant="h2">
              Wallet
            </Typography>
          </Box>
        </Container>
      </S.Container>
    </>
  );
};
export default Wallet;
