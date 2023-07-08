import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { Button, Container, Stack } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import styles, { iconHeight, iconWidth } from "./TopBar.styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const links = [
  {
    title: "INICIO",
    ref: "#inicio",
  },
  {
    title: "RESEÑAS",
    ref: "#reseñas",
  },
  {
    title: "SERVICIOS",
    ref: "#servicios",
  },
  {
    title: "CONTACTO",
    ref: "#contacto",
  },
];

interface TopBarProps {
  toggleMenu: () => void;
}

const TopBar: React.FC<TopBarProps> = (props) => {
  const { toggleMenu } = props;

  return (
    <MuiAppBar component="nav" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton
            sx={styles.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleMenu}
          >
            <MenuIcon fontSize={"large"} />
          </IconButton>

          <Image
            src="/logoBar.svg"
            alt="Vercel Logo"
            width={iconWidth}
            height={iconHeight}
            priority
          />

          <Stack
            sx={styles.menuBox}
            spacing={1}
            direction="row"
            alignItems="center"
          >
            {links.map(({ title, ref }) => (
              <Button key={title} variant="header" href={ref}>
                {title}
              </Button>
            ))}
          </Stack>

          <IconButton
            aria-label="open drawer"
            size="large"
            onClick={toggleMenu}
            href="/auth/login"
          >
            <AccountCircleIcon fontSize={"large"} />
          </IconButton>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};

export default TopBar;
