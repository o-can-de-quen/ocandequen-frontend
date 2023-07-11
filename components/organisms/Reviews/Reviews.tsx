import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import styles from "./Reviews.styles";
import {
  Card,
  CardContent,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import Carousel from "../../molecules/Carousel/Carousel";
import Review from "../../molecules/Review/Review";

const review = {
  name: "Juan Perez",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu libero quis quam aliquam tempor. Donec condimentum varius dui sed porta. Aliquam sem mi, sagittis et suscipit et, posuere a dui. Praesent bibendum facilisis mi eu venenatis. Aenean dui urna, lobortis ut consectetur in, consectetur non eros. Aliquam quis urna ac velit dapibus euismod non id libero. Duis quis dapibus est. Maecenas lobortis metus at nibh sagittis viverra. Proin sodales volutpat nisi, vel porttitor odio elementum id. Quisque lorem erat, facilisis sit amet dui ut, dignissim tempus massa. Sed eu efficitur libero. Cras eu consectetur ipsum. In hendrerit, magna id ultricies cursus, massa dolor placerat ligula, feugiat vehicula tellus arcu a lectus. Pellentesque et magna nec odio dapibus elementum. Aliquam ultrices leo ultricies semper tincidunt.",
};

const MAX = 100;
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

export default function Reviews() {
  const reviewText =
    review.content.length > MAX
      ? review.content.substring(0, MAX - 3) + "..."
      : review.content;
  return (
    <Box sx={styles.background}>
      <Container maxWidth="lg" sx={styles.container}>
        <Box sx={styles.circleWrapper}>
          <Box sx={styles.circle} />
        </Box>
        <Box sx={styles.titleWrapper}>
          <Typography sx={styles.title}>Reseñas</Typography>
        </Box>
        <Box sx={styles.subtitleWrapper}>
          <Typography sx={styles.subtitle}>
            Esto es lo que opinan nuestros clientes de nosotros
          </Typography>
        </Box>

        <Box sx={styles.reviews}>
          <Carousel
            width={250}
            items={[
              <Review key={1} index={1} review={review} />,
              <Review key={2} index={2} review={review} />,
              <Review key={3} index={3} review={review} />,
              <Review key={4} index={4} review={review} />,
              <Review key={5} index={5} review={review} />,
              <Review key={6} index={6} review={review} />,
            ]}
          />
        </Box>
      </Container>
    </Box>
  );
}
