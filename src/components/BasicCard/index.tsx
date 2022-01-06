import * as React from "react";

import Typography from "@mui/material/Typography";
import AttachMoney from "@mui/icons-material/AttachMoney";
import { Grid } from "@mui/material";

import * as S from "./styles";

interface IBasicCard {
  balanceCrypto: any;
}

const BasicCard = ({ balanceCrypto }: IBasicCard) => {
  //TODO: Should have Money Mask at cryptos value
  return (
    <Grid container spacing={2} sx={{ mt: 1, mb: 3 }}>
      <Grid item xs={12} md={4}>
        <S.Item>
          <AttachMoney sx={{ height: 38, width: 38 }} />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            ETH:
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {balanceCrypto?.ETH}
          </Typography>
        </S.Item>
      </Grid>

      <Grid item xs={12} md={4}>
        <S.Item>
          <AttachMoney sx={{ height: 38, width: 38 }} />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            BTC:
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {balanceCrypto?.BTC}
          </Typography>
        </S.Item>
      </Grid>

      <Grid item xs={12} md={4}>
        <S.Item>
          <AttachMoney sx={{ height: 38, width: 38 }} />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            DOGE:
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {balanceCrypto?.DOGE}
          </Typography>
        </S.Item>
      </Grid>
    </Grid>
  );
};

export default BasicCard;
