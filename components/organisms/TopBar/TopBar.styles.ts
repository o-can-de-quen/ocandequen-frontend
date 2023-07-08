import { ComponentStyle } from "../../../@types/Styles.type";
import { headerHeight, paddingVerticalToolbar } from "../../../constants";

export const iconHeight = headerHeight - paddingVerticalToolbar * 2;
export const iconWidth = Math.round((13.022 * iconHeight) / 9.7017);

const styles: ComponentStyle = {
  menuButton: {
    display: { md: "none" },
  },
  menuBox: {
    display: { xs: "none", md: "flex" },
  },
};

export default styles;
