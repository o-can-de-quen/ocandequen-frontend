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
import Image from "next/image";

export default function Contact() {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  return (
    <Box sx={{ background: "#fff", py: "200px" }}>
      <Container maxWidth='md'>
        <Grid container spacing={6} flexDirection='row'>
          <Grid item container xs={12} sm={12} md={6} justifyContent={"center"} spacing={3} flexDirection='column'>
            <Grid item justifyContent={"center"}>
              <Typography variant='h4'>Contacta con nosotros</Typography>
            </Grid>
            <Grid item justifyContent={"center"}>
              <Typography variant='h6'>Número de telefono: 613 65 12 90</Typography>
            </Grid>
            <Grid item justifyContent={"center"}>
              <Typography variant='h6'>Dirección: Calle Iglesia, numero 1, bajo derecha.</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
