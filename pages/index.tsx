import Head from "next/head";
import Image from "next/image";
import Appbar from "../components/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Tooltip from "@mui/material/Tooltip";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Theme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import Hero from "../components/Hero";
import ShowerIcon from "@mui/icons-material/Shower";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import PetsIcon from "@mui/icons-material/Pets";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import Services from "../components/Services";
import Contact from "../components/Contact";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Home() {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  return (
    <>
      <Head>
        <title>O can de quen - Peluquería canina en Pontedeume-</title>
        <meta
          name="description"
          content="Peluquería canina en Pontedeume con servicios de peluquería para mascotas, incluyendo corte, peinado y baño. ¡Reserva tu cita en nuestra peluquería de animales!"
          key="desc"
        />
      </Head>
      <Appbar>
        <Hero />
        <Services />
        <Contact />
        <Box>
          <a
            href='https://wa.me/34613651290'
            target='_blank'
            rel='noopener noreferrer'
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
        </Box>
      </Appbar>
    </>
  );
}
