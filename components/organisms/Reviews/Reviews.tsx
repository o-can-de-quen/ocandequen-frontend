import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import styles from "./Reviews.styles";
import { Card, CardContent, IconButton, Rating, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useEffect, useState } from "react";
import Carousel from "../../molecules/Carousel/Carousel";
import Review from "../../molecules/Review/Review";
import { IReview } from "../../../@types/Review.type";

const review = {
  name: "Juan Perez",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu libero quis quam aliquam tempor. Donec condimentum varius dui sed porta. Aliquam sem mi, sagittis et suscipit et, posuere a dui. Praesent bibendum facilisis mi eu venenatis. Aenean dui urna, lobortis ut consectetur in, consectetur non eros. Aliquam quis urna ac velit dapibus euismod non id libero. Duis quis dapibus est. Maecenas lobortis metus at nibh sagittis viverra. Proin sodales volutpat nisi, vel porttitor odio elementum id. Quisque lorem erat, facilisis sit amet dui ut, dignissim tempus massa. Sed eu efficitur libero. Cras eu consectetur ipsum. In hendrerit, magna id ultricies cursus, massa dolor placerat ligula, feugiat vehicula tellus arcu a lectus. Pellentesque et magna nec odio dapibus elementum. Aliquam ultrices leo ultricies semper tincidunt.",
};

const MAX = 100;

export default function Reviews() {
  const reviewText = review.content.length > MAX ? review.content.substring(0, MAX - 3) + "..." : review.content;
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      fetch("http://localhost:8080/review")
        .then((response) => response.json())
        .then((json) => setReviews(json));
    };
    fetchData();
  }, []);

  console.log(reviews);

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
          <Typography sx={styles.subtitle}>Esto es lo que opinan nuestros clientes de nosotros</Typography>
        </Box>

        <Box sx={styles.reviews}>
          <Carousel
            width={250}
            items={reviews.map((review, index) => (
              <Review key={index} review={review} />
            ))}
          />
        </Box>
      </Container>
    </Box>
  );
}
