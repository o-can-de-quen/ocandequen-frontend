import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Theme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

export default function Hero() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(rgba(249, 197, 22, 0.7), rgba(249, 197, 22, 0.95)),url(/img/fondoweb.webp)",
        backgroundColor: "#363f48",
        backgroundSize: "cover",
        backgroundAttachment: "scroll",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        py: "100px",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={8}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              background: "transparent",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="/logo_blanco.svg"
              alt="o can de quen"
              style={{
                width: "100%",
                filter: "drop-shadow(3px 5px 12px rgb(0 0 0 / 0.3))",
              }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ background: "white", backgroundColor: "transparent" }}
          >
            <Card sx={{ p: 1 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="/img/agosto.jpg"
                  alt="fot o de un perro"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Peluquería de mascotas
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Especialistas en el cuidado de tus mascotas.
                  </Typography>

                  <Typography variant="subtitle1" color="textSecondary">
                    Lunes - Jueves: 09:30-13:30 y 15:30-19:30
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Viernes: 11:00-19:00
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Sabado: 09:30-13:30
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  startIcon={<CallIcon />}
                >
                  Llamanos
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
