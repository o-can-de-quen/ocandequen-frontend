import { ComponentStyle } from "../../../@types/Styles.type";
import { headerHeightInPx, paddingVerticalToolbar } from "../../../constants";

const styles: ComponentStyle = {
  carouselContainer: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    justifyContent: "center",
    gap: 2,
  },

  carouselWrapper: {
    transition: "transform 0.5s ease-in-out",
  },

  carouselContent: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    overflow: "hidden",
  },

  carouselControls: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 2,
  },

  button: {
    backgroundColor: `rgba(249,197,22,0.53) !important`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&.Mui-disabled": {
      backgroundColor: `lightgray !important`,
    },
  },
};

export default styles;
