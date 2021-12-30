import * as React from "react";

import Typography from "@mui/material/Typography";
import AttachMoney from "@mui/icons-material/AttachMoney";
import { Grid } from "@mui/material";

import * as S from "./styles";

const BasicCard = () => {
  return (
    <Grid container spacing={2} sx={{ mt: 1, mb: 3 }}>
      <Grid item xs={12} md={4}>
        <S.Item>
          <AttachMoney sx={{ height: 38, width: 38 }} />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Balance:
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            20,00
          </Typography>
        </S.Item>
      </Grid>

      <Grid item xs={12} md={4}>
        <S.Item>
          <AttachMoney sx={{ height: 38, width: 38 }} />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Property 1:
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            20,00
          </Typography>
        </S.Item>
      </Grid>

      <Grid item xs={12} md={4}>
        <S.Item>
          <AttachMoney sx={{ height: 38, width: 38 }} />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Property 2:
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            20,00
          </Typography>
        </S.Item>
      </Grid>
    </Grid>
  );
};

export default BasicCard;
