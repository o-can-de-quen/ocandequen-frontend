import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Theme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import styles from "./Hero.styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";

export default function Hero() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <Box sx={styles.background}>
      <Container maxWidth="lg" sx={styles.container}>
        <Typography variant="titleCaption" sx={styles.caption}>
          Peluquería canina y otras mascotas 😉
        </Typography>
        <Typography variant="title" sx={styles.title}>
          Las mejores cosas de la vida son peludas
        </Typography>

        <Card sx={styles.cardContainer}>
          <Box sx={styles.imageContainer}>
            <Image
              src={"/img/mandi.webp"}
              alt={"Cliente del mes"}
              style={{ aspectRatio: "4/3", objectFit: "cover" }}
              fill
            />
          </Box>

          <CardContent>
            <Typography gutterBottom variant="cardTitle" component="div">
              ¡Portada del mes!
            </Typography>
          </CardContent>
        </Card>

        <Typography variant="subtitle" sx={styles.subtitle}>
          En o can de quen, amamos lo que hacemos, por eso amamos a tu mascota.
        </Typography>

        <Box sx={styles.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            href="tel:+34613651290"
            fullWidth
            disableElevation
          >
            ¡Llama y pide cita!
          </Button>

          <Button
            variant="whatsApp"
            color="primary"
            fullWidth
            disableElevation
            href="https://wa.me/34613651290"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<WhatsAppIcon />}
          >
            Pide cita por Whats App
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
