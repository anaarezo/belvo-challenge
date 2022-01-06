import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Box,
  Divider,
  Drawer,
  List,
  ListItemText,
  ListItemIcon,
  Toolbar,
  Button,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MenuIcon from "@mui/icons-material/Menu";
import Paid from "@mui/icons-material/Paid";
import SendIcon from "@mui/icons-material/Send";

import * as S from "./styles";

const DRAWER_WIDTH = 240;

interface Props {
  window?: () => Window;
}

const DrawerMenu = (props: Props) => {
  const { window } = props;
  const navigate = useNavigate();
  const handleGoToTranfer = () => navigate("/transfer");
  const handleGoToRequest = () => navigate("/receive");
  const handleGoToWallet = () => navigate("/wallet");

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <Button onClick={handleGoToWallet}>
          <ListItemIcon>
            <Paid />
          </ListItemIcon>
          <ListItemText primary="Wallet" />
        </Button>

        <Button onClick={handleGoToTranfer}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Transfer" />
        </Button>
        <Button onClick={handleGoToRequest}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Request" />
        </Button>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        style={{ background: "#0663f9" }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon color="inherit" />
          </IconButton>

          <a href="/" title="belvo">
            <Box
              sx={{
                width: 83,
                height: 24,
              }}
            >
              <S.Logo />
            </Box>
          </a>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default DrawerMenu;
