import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Theme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import ShowerIcon from "@mui/icons-material/Shower";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import PetsIcon from "@mui/icons-material/Pets";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

export default function Services() {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  return (
    <Box sx={{ background: "#f2f6fa", py: "100px" }}>
      <Container maxWidth='lg'>
        <Grid container spacing={6}>
          <Grid item container justifyContent={"center"} spacing={3}>
            <Grid item justifyContent={"center"}>
              <Typography variant='h4'>Nuestros principales servicios</Typography>
            </Grid>
            <Grid item justifyContent={"center"}>
              <Typography variant='h6' color='textSecondary'>
                Nuestros packs incluyen los mejores tratamientos para la comodidad y seguridad de tu mascota
              </Typography>
            </Grid>
          </Grid>
          <Grid item container spacing={6}>
            <Grid item xs={12} sm={12} md={4}>
              <Card sx={{ p: 4, height: "100%" }}>
                <Grid item container flexDirection={"column"} alignItems='center' justifyContent={"space-between"}>
                  <Grid item container flexDirection={"column"} alignItems='center'>
                    <Grid item alignSelf={"center"}>
                      <ShowerIcon sx={{ width: 60, height: 60 }} color={"primary"} />
                    </Grid>
                    <Grid item alignSelf={"center"}>
                      <Typography gutterBottom variant='h4' component='div'>
                        Baño
                      </Typography>
                    </Grid>
                    <Grid item alignSelf={"center"}>
                      <Typography gutterBottom variant='subtitle1' component='div'>
                        Baño, secado
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item container flexDirection={"column"} alignItems='center'>
                    <Grid item alignSelf={"center"}>
                      <Typography gutterBottom variant='subtitle2' component='div'>
                        También incluye:
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography variant='subtitle1' color='textSecondary'>
                        - Corte de uñas.
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='subtitle1' color='textSecondary'>
                        - Limpieza de oidos.
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='subtitle1' color='textSecondary'>
                        - Corte higienico.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Card sx={{ p: 4, height: "100%" }}>
                <Grid item container flexDirection={"column"} alignItems='center' justifyContent={"space-between"}>
                  <Grid item container flexDirection={"column"} alignItems='center'>
                    <Grid item alignSelf={"center"}>
                      <ContentCutIcon sx={{ width: 60, height: 60 }} color={"primary"} />
                    </Grid>
                    <Grid item alignSelf={"center"}>
                      <Typography gutterBottom variant='h4' component='div'>
                        Baño y corte
                      </Typography>
                    </Grid>
                    <Grid item alignSelf={"center"}>
                      <Typography gutterBottom variant='subtitle1' component='div'>
                        Baño, secado y corte
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item container flexDirection={"column"} alignItems='center'>
                    <Grid item alignSelf={"center"}>
                      <Typography gutterBottom variant='subtitle2' component='div'>
                        También incluye:
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography variant='subtitle1' color='textSecondary'>
                        - Corte de uñas.
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='subtitle1' color='textSecondary'>
                        - Limpieza de oidos.
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='subtitle1' color='textSecondary'>
                        - Corte higienico.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Card sx={{ p: 4, height: "100%" }}>
                <Grid item container flexDirection={"column"} alignItems='center' justifyContent={"space-between"}>
                  <Grid item container flexDirection={"column"} alignItems='center'>
                    <Grid item alignSelf={"center"}>
                      <PetsIcon sx={{ width: 60, height: 60 }} color={"primary"} />
                    </Grid>
                    <Grid item alignSelf={"center"}>
                      <Typography gutterBottom variant='h4' component='div' textAlign={"center"}>
                        Baño, corte y deslanado
                      </Typography>
                    </Grid>
                    <Grid item alignSelf={"center"}>
                      <Typography gutterBottom variant='subtitle1' component='div' textAlign={"center"}>
                        Baño, secado, corte y eliminación del pelo sobrante y muda
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item container flexDirection={"column"} alignItems='center' sx={{ mt: 2 }}>
                    <Grid item alignSelf={"center"}>
                      <Typography gutterBottom variant='subtitle2' component='div'>
                        También incluye:
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography variant='subtitle1' color='textSecondary'>
                        - Corte de uñas.
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='subtitle1' color='textSecondary'>
                        - Limpieza de oidos.
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='subtitle1' color='textSecondary'>
                        - Corte higienico.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
          <Grid item container justifyContent={"center"} spacing={3} sx={{ mt: 4 }}>
            <Typography variant='h4'>Otros servicios</Typography>
          </Grid>
          <Grid item container spacing={6}>
            <Grid item xs={12} sm={12} md={4}>
              <Card sx={{ p: 4, height: "100%" }}>
                <Grid item container flexDirection={"column"} alignItems='center' justifyContent={"space-between"}>
                  <Grid item alignSelf={"center"}>
                    <ContentCutIcon sx={{ width: 60, height: 60 }} color={"primary"} />
                  </Grid>
                  <Grid item alignSelf={"center"}>
                    <Typography gutterBottom variant='h4' component='div' textAlign={"center"}>
                      Retoque
                    </Typography>
                  </Grid>
                  <Grid item alignSelf={"center"}>
                    <Typography gutterBottom variant='subtitle1' component='div' textAlign={"center"}>
                      Perfeccionamiento del corte del animal.
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Card sx={{ p: 4, height: "100%" }}>
                <Grid item container flexDirection={"column"} alignItems='center' justifyContent={"space-between"}>
                  <Grid item alignSelf={"center"}>
                    <CleaningServicesIcon sx={{ width: 60, height: 60 }} color={"primary"} />
                  </Grid>
                  <Grid item alignSelf={"center"}>
                    <Typography gutterBottom variant='h4' component='div' textAlign={"center"}>
                      Corte de uñas y limpieza de oidos
                    </Typography>
                  </Grid>
                  <Grid item alignSelf={"center"}>
                    <Typography gutterBottom variant='subtitle1' component='div' textAlign={"center"}>
                      Corte de uñas y limpieza de oidos
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Card sx={{ p: 4, height: "100%" }}>
                <Grid item container flexDirection={"column"} alignItems='center' justifyContent={"space-between"}>
                  <Grid item alignSelf={"center"}>
                    <ContentCutIcon sx={{ width: 60, height: 60 }} color={"primary"} />
                  </Grid>
                  <Grid item alignSelf={"center"}>
                    <Typography gutterBottom variant='h4' component='div' textAlign={"center"}>
                      Corte higienico
                    </Typography>
                  </Grid>
                  <Grid item alignSelf={"center"}>
                    <Typography gutterBottom variant='subtitle1' component='div' textAlign={"center"}>
                      Rasurado de zona perianal y barriga
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
