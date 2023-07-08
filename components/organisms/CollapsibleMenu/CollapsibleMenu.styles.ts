import { ComponentStyle } from "../../../@types/Styles.type";
import { drawerWidth } from "../../../constants";

const styles: ComponentStyle = {
  drawer: {
    display: { xs: "block", md: "none" },
    "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
  },
  container: {
    flex: 1,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  linksContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
};

export default styles;
