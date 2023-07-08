import * as React from "react";
import Box from "@mui/material/Box";
import { headerHeightInPx } from "../../constants";
import Menu from "../organisms/Menu";
import FloatWhatsAppIcon from "../atoms/FloatWhatsAppIcon";

interface AppLayoutProps {
  children?: React.ReactElement | React.ReactElement[];
}

const AppLayout: React.FC<AppLayoutProps> = (props) => {
  const { children } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <Menu />
      <FloatWhatsAppIcon />
      <Box component="main" sx={{ mt: headerHeightInPx, width: "100%" }}>
        {children}
      </Box>
    </Box>
  );
};

export default AppLayout;
