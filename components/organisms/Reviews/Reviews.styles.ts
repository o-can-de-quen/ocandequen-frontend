import { ComponentStyle } from "../../../@types/Styles.type";
import { headerHeightInPx, paddingVerticalToolbar } from "../../../constants";

const styles: ComponentStyle = {
  background: {
    // backgroundImage: "url(/img/2.webp)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  container: {
    paddingTop: { xs: 5, md: 10 },
    paddingBottom: { xs: 5, md: 10 },
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "2fr 2fr 3fr" },
    gridTemplateRows: { xs: "auto auto auto", md: "auto auto" },
    gridTemplateAreas: {
      xs: " 'caption' 'title' 'card' 'subtitle' 'buttons'",
      md: "'caption caption card' 'title title card' 'subtitle subtitle card' 'buttons buttons card' '. . card'",
    },
    rowGap: 3,
    columnGap: 15,
  },
  caption: {
    gridArea: "caption",
  },
  title: {
    gridArea: "title",
  },
  subtitle: {
    gridArea: "subtitle",
  },
  imageContainer: {
    position: "relative",
    aspectRatio: "4/3",
  },
  cardContainer: {
    gridArea: "card",
  },
  buttonContainer: {
    gridArea: "buttons",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    gap: 2,
  },
};

export default styles;
