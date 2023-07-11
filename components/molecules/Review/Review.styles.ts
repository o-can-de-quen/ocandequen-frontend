import { ComponentStyle } from "../../../@types/Styles.type";
import { headerHeightInPx, paddingVerticalToolbar } from "../../../constants";

const styles: ComponentStyle = {
  review: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    pt: 4,
    userSelect: "none",
    cursor: "pointer",
  },
  text: {
    px: 4,
    py: 2,
  },
  reviewContent: {
    background: "white",
    display: "flex",
    justifyContent: "center",
  },
};

export default styles;
