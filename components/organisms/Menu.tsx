import * as React from "react";
import Box from "@mui/material/Box";
import TopBar from "./TopBar/TopBar";
import CollapsibleMenu from "./CollapsibleMenu/CollapsibleMenu";

interface MenuProps {}

const Menu: React.FC<MenuProps> = (props) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <TopBar toggleMenu={toggleMenu} />
      <CollapsibleMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </Box>
  );
};

export default Menu;