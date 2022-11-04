import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import { Theme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Container from "@mui/material/Container";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement | React.ReactElement[];
}

const drawerWidth = 240;
const navItems = ["Inicio", "Servicios", "Contacto"];

export default function Appbar(props: Props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        O CAN DE QUEN
      </Typography>
      <Divider />
      {/* <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      <Stack spacing={1.5} direction='row' alignItems='center' justifyContent={"center"} sx={{ mt: 5 }}>
        <Tooltip title='Siguenos en Tiktok' placement={"top"}>
          <a target='_blank' rel='noreferrer' href='https://www.tiktok.com/@o.can.de.quen'>
            <Image src='/tiktok.svg' alt='tiktok' width={20} height={20} />
          </a>
        </Tooltip>
        <Tooltip title='Siguenos en facebook' placement={"top"}>
          <a target='_blank' rel='noreferrer' href='https://www.facebook.com/profile.php?id=100087048889549'>
            <Image src='/facebook.svg' alt='facebook' width={20} height={20} />
          </a>
        </Tooltip>
        <Tooltip title='Siguenos en instagram' placement={"top"}>
          <a target='_blank' rel='noreferrer' href='https://www.instagram.com/o.can.de.quen'>
            <Image src='/instagram.svg' alt='instagram' width={20} height={20} />
          </a>
        </Tooltip>
      </Stack>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const logo = <Image src='/logobar.svg' alt='Vercel Logo' width={250} height={50} priority />;

  return (
    <Box sx={{ display: "flex" }}>
      <MuiAppBar component='nav' sx={{ background: "white" }}>
        <Toolbar sx={{ py: "20px" }}>
          <Container maxWidth='md' sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <IconButton color='inherit' aria-label='open drawer' edge='start' onClick={handleDrawerToggle} sx={{ mr: 2, display: { md: "none" } }}>
              <MenuIcon />
            </IconButton>

            {isMobile ? <Box sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>{logo}</Box> : logo}

            {!isMobile ? (
              <Stack spacing={1.5} direction='row' alignItems='center' divider={<Divider orientation='vertical' sx={{ height: 20, my: "auto" }} />}>
                {/* <Box>
                  {navItems.map((item) => (
                    <Button key={item} sx={{ color: "#000" }}>
                      {item}
                    </Button>
                  ))}
                </Box> */}
                <Stack spacing={1.5} direction='row' alignItems='center'>
                  <Tooltip title='Siguenos en Tiktok' placement={"top"}>
                    <a target='_blank' rel='noreferrer' href='https://www.tiktok.com/@o.can.de.quen'>
                      <Image src='/tiktok.svg' alt='tiktok' width={20} height={20} />
                    </a>
                  </Tooltip>
                  <Tooltip title='Siguenos en facebook' placement={"top"}>
                    <a target='_blank' rel='noreferrer' href='https://www.facebook.com/profile.php?id=100087048889549'>
                      <Image src='/facebook.svg' alt='facebook' width={20} height={20} />
                    </a>
                  </Tooltip>
                  <Tooltip title='Siguenos en instagram' placement={"top"}>
                    <a target='_blank' rel='noreferrer' href='https://www.instagram.com/o.can.de.quen'>
                      <Image src='/instagram.svg' alt='instagram' width={20} height={20} />
                    </a>
                  </Tooltip>
                </Stack>
              </Stack>
            ) : null}
          </Container>
        </Toolbar>
      </MuiAppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component='main' sx={{ mt: "90px", width: "100%" }}>
        {children}
      </Box>
    </Box>
  );
}
