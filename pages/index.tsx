import Head from "next/head";
import Appbar from "../components/AppBar";
import Box from "@mui/material/Box";
import { Theme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Script from "next/script";

export default function Home() {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6R7T7JPYD3"></script>
        {/* <!-- Google Tag Manager --> */}
        <title>O can de quen - Peluquería canina en Pontedeume-</title>
        <meta
          name="description"
          content="O can de quen, peluquería canina en Pontedeume con servicios de  corte, peinado, baño y deslanado. ¡Pide tu cita en nuestra peluquería de mascotas!"
          key="desc"
        />
      </Head>
      <Appbar>
        <Hero />
        <Services />
        <Contact />
        <Box>
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
        </Box>
      </Appbar>
    </>
  );
}
