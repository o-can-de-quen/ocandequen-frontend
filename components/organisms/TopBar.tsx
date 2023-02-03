import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Container from "@mui/material/Container";
import SocialLinks from "../molecules/SocialLinks";
import { Theme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { headerHeight } from "../../constants";

interface TopBarProps {
  toggleMenu: () => void;
}

const TopBar: React.FC<TopBarProps> = (props) => {
  const { toggleMenu } = props;
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <MuiAppBar component="nav" sx={{ background: "white" }}>
      <Toolbar>
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: headerHeight,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleMenu}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {isMobile ? (
            <Box sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
              {<Image src="/logobar.svg" alt="Vercel Logo" width={250} height={50} priority />}
            </Box>
          ) : (
            <Image src="/logobar.svg" alt="Vercel Logo" width={250} height={50} priority />
          )}

          {!isMobile ? (
            <Stack
              spacing={1.5}
              direction="row"
              alignItems="center"
              divider={<Divider orientation="vertical" sx={{ height: 20, my: "auto" }} />}
            >
              <SocialLinks spacing={1.5} direction="row" alignItems="center" />
            </Stack>
          ) : null}
        </Container>
      </Toolbar>
    </MuiAppBar>
  );
};

export default TopBar;
