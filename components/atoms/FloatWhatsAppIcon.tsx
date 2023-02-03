import * as React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

interface FloatWhatsAppIconProps {}

const FloatWhatsAppIcon: React.FC<FloatWhatsAppIconProps> = (props) => {
  return (
    <a
      href="https://wa.me/34613651290"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        width: "60px",
        height: "60px",
        bottom: "40px",
        right: "40px",
        backgroundColor: "#25d366",
        color: "#FFF",
        borderRadius: "100%",
        textAlign: "center",
        zIndex: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <WhatsAppIcon sx={{ width: 40, height: 40 }} />
    </a>
  );
};

export default FloatWhatsAppIcon;
