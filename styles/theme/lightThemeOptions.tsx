import { ThemeOptions } from "@mui/material/styles";
import { headerHeightInPx, paddingVerticalToolbar } from "../../constants";

const lightThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: "Roboto",
  },
  palette: {
    mode: "light",
    primary: {
      light: "#fbd760",
      main: "#f9c516",
      dark: "#dba906",
    },
    secondary: {
      light: "#be74fb",
      main: "#9316f9",
      dark: "#7005c7",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#FFF8F1",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: headerHeightInPx,
          paddingTop: `${paddingVerticalToolbar}px`,
          paddingBottom: `${paddingVerticalToolbar}px`,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#4C4639",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "header" },
          style: {
            color: "#4C4639",
          },
        },
        {
          props: { variant: "contained" },
          style: {
            color: "#4C4639",
            boxShadow: "unset",
            borderRadius: 200,
            fontWeight: "bold",
            paddingTop: 8,
            paddingBottom: 8,
          },
        },
        {
          props: { variant: "whatsApp" },
          style: {
            color: "white",
            fontWeight: "bold",
            boxShadow: "unset",
            borderRadius: 200,
            paddingTop: 8,
            paddingBottom: 8,
            background: "#25d366",
            backgroundColor: "#25d366 !important",
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "titleCaption" },
          style: {
            color: "#6A5D3F",
            fontSize: "26px",
            fontWeight: "500",
            lineHeight: "30px",
            display: "block",
            fontFamily: "cookie",
          },
        },
        {
          props: { variant: "title" },
          style: {
            color: "#1e1e1e",
            fontSize: "36px",
            fontWeight: "500",
            lineHeight: "44px",
            display: "block",
          },
        },
        {
          props: { variant: "cardTitle" },
          style: {
            color: "#1e1e1e",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "24px",
          },
        },
        {
          props: { variant: "subtitle" },
          style: {
            color: "#1e1e1e",
            fontSize: "22px",
            fontWeight: "400",
            lineHeight: "28px",
          },
        },
      ],
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          background: "#E8E1D9",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "unset",
          borderRadius: 15,
        },
      },
    },
  },
};

export default lightThemeOptions;
