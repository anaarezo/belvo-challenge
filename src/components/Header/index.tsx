import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import * as S from "./styles";

const Header = () => {
  return (
    <S.Container>
      <Container maxWidth="lg">
        <a href="/" title="belvo">
          <Box
            sx={{
              width: 83,
              height: 24,
            }}
          >
            <S.Wrap>
              <S.Logo />
            </S.Wrap>
          </Box>
        </a>
      </Container>
    </S.Container>
  );
};
export default Header;
