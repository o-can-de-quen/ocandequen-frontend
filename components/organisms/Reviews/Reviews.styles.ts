import { ComponentStyle } from "../../../@types/Styles.type";
import { headerHeightInPx, paddingVerticalToolbar } from "../../../constants";

const styles: ComponentStyle = {
  background: {
    background: "#F3F4F6",
  },
  container: {
    paddingTop: { xs: 5, md: 10 },
    paddingBottom: { xs: 5, md: 10 },
    display: "grid",
    gridTemplateColumns: "[col0] 1fr [col1] ",
    gridTemplateRows:
      "[row0] auto [row1] auto [row2] auto [row3] auto [row4]  ",
    gap: 2,
  },
  circleWrapper: {
    gridColumnStart: "col0",
    gridColumnEnd: "col1",
    gridRowStart: "row0",
    gridRowEnd: "row3",
    display: "flex",
    justifyContent: "center",
  },
  titleWrapper: {
    gridColumnStart: "col0",
    gridColumnEnd: "col1",
    gridRowStart: "row0",
    gridRowEnd: "row1",
    display: "flex",
    justifyContent: "center",
  },
  subtitleWrapper: {
    gridColumnStart: "col0",
    gridColumnEnd: "col1",
    gridRowStart: "row1",
    gridRowEnd: "row2",
    display: "flex",
    justifyContent: "center",
  },
  reviews: {
    gridColumnStart: "col0",
    gridColumnEnd: "col1",
    gridRowStart: "row2",
    gridRowEnd: "row4",
    display: "flex",
    width: "100%",
    overflow: "hidden",
  },

  circle: {
    backgroundColor: "rgba(249,197,22,0.53)",
    borderRadius: 500,
    width: "100%",
    maxWidth: "400px",
    aspectRatio: "1",
  },
  title: {
    mt: 3,
    color: "#1e1e1e",
    fontSize: "32px",
    fontWeight: "400",
    lineHeight: "40px",
  },
  subtitle: {
    textAlign: "center",
    px: 5,
    color: "#1e1e1e",
    fontSize: "24px",
    fontWeight: "400",
    lineHeight: "32px",
    maxWidth: "400px",
  },
  review: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    pt: 4,
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
