import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import SocialLinks from "../../molecules/SocialLinks";
import { drawerWidth } from "../../../constants";
import { Button } from "@mui/material";
import Image from "next/image";
import { iconHeight, iconWidth } from "../TopBar/TopBar.styles";
import styles from "./CollapsibleMenu.styles";

interface CollapsibleMenuProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

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

const CollapsibleMenu: React.FC<CollapsibleMenuProps> = (props) => {
  const { menuOpen, toggleMenu } = props;

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={menuOpen}
        onClose={toggleMenu}
        ModalProps={{ keepMounted: true }}
        sx={styles.drawer}
      >
        <Box onClick={toggleMenu} sx={styles.container}>
          <Image
            src="/logobar.svg"
            alt="Vercel Logo"
            width={iconWidth}
            height={iconHeight}
            priority
          />
          <Box sx={styles.linksContainer}>
            {links.map(({ title, ref }) => (
              <Button key={title} variant="header" href={ref}>
                {title}
              </Button>
            ))}
          </Box>

          <SocialLinks
            spacing={1.5}
            direction="row"
            alignItems="center"
            justifyContent={"center"}
          />
        </Box>
      </Drawer>
    </Box>
  );
};

export default CollapsibleMenu;
