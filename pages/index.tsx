import Head from "next/head";
import Image from "next/image";
import AppLayout from "../components/templates/AppLayout";
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
import { description, title } from "../constants";
import Hero2 from "../components/Hero2";

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" key="desc" content={description} />
      </Head>
      <AppLayout>
        <Hero />
        <Hero2 />
        <Services />
        <Contact />
      </AppLayout>
    </>
  );
}
