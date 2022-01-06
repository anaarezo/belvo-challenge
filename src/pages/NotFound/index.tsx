import React from "react";

import Container from "@mui/material/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";

import { Header } from "../../components";
import * as S from "./styles";

const NotFound = () => {
  return (
    <>
      <Header />
      <S.Container>
        <Container maxWidth="lg">
          <Box
            sx={{
              mx: "auto",
              mt: 15,
              p: 1,
              borderRadius: 1,
              textAlign: "center",
            }}
          >
            <Typography component="h1" variant="h3">
              Page not found!!!
            </Typography>
            <Typography component="h2" variant="h4">
              Go back
            </Typography>
          </Box>
        </Container>
      </S.Container>
    </>
  );
};
export default NotFound;
