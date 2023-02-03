import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import SocialLinks from "../molecules/SocialLinks";
import { drawerWidth } from "../../constants";

interface CollapsibleMenuProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const CollapsibleMenu: React.FC<CollapsibleMenuProps> = (props) => {
  const { menuOpen, toggleMenu } = props;

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={menuOpen}
        onClose={toggleMenu}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Box onClick={toggleMenu} sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            O CAN DE QUEN
          </Typography>
          <Divider />

          <SocialLinks spacing={1.5} direction="row" alignItems="center" justifyContent={"center"} sx={{ mt: 5 }} />
        </Box>
      </Drawer>
    </Box>
  );
};

export default CollapsibleMenu;
