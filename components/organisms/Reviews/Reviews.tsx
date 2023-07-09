import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import styles from "./Reviews.styles";
import { Card, CardContent, Rating, Typography } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import { useState } from "react";

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
            width={300}
            items={[
              <Card key={1} sx={styles.review}>
                <Rating name="size-large" defaultValue={5} size="large" />

                <Typography sx={styles.text}>{reviewText}</Typography>
                <CardContent sx={styles.reviewContent}>
                  <Typography variant="cardTitle" component="div">
                    {review.name + " 1"}
                  </Typography>
                </CardContent>
              </Card>,
              <Card key={2} sx={styles.review}>
                <Rating name="size-large" defaultValue={5} size="large" />

                <Typography sx={styles.text}>{reviewText}</Typography>
                <CardContent sx={styles.reviewContent}>
                  <Typography variant="cardTitle" component="div">
                    {review.name + " 2"}
                  </Typography>
                </CardContent>
              </Card>,
              <Card key={3} sx={styles.review}>
                <Rating name="size-large" defaultValue={5} size="large" />

                <Typography sx={styles.text}>{reviewText}</Typography>
                <CardContent sx={styles.reviewContent}>
                  <Typography variant="cardTitle" component="div">
                    {review.name + " 3"}
                  </Typography>
                </CardContent>
              </Card>,
              <Card key={4} sx={styles.review}>
                <Rating name="size-large" defaultValue={5} size="large" />

                <Typography sx={styles.text}>{reviewText}</Typography>
                <CardContent sx={styles.reviewContent}>
                  <Typography variant="cardTitle" component="div">
                    {review.name + " 4"}
                  </Typography>
                </CardContent>
              </Card>,
              <Card key={5} sx={styles.review}>
                <Rating name="size-large" defaultValue={5} size="large" />

                <Typography sx={styles.text}>{reviewText}</Typography>
                <CardContent sx={styles.reviewContent}>
                  <Typography variant="cardTitle" component="div">
                    {review.name + " 5"}
                  </Typography>
                </CardContent>
              </Card>,
              <Card key={6} sx={styles.review}>
                <Rating name="size-large" defaultValue={5} size="large" />

                <Typography sx={styles.text}>{reviewText}</Typography>
                <CardContent sx={styles.reviewContent}>
                  <Typography variant="cardTitle" component="div">
                    {review.name + " 6"}
                  </Typography>
                </CardContent>
              </Card>,
            ]}
          />
        </Box>
      </Container>
    </Box>
  );
}

const Carousel = ({ items, width }: any) => {
  const [state, setState] = useState(0);

  const handlePrev = () => {
    setState((prevState) => prevState - 1);
  };
  const handleNext = () => {
    setState((prevState) => prevState + 1);
  };

  return (
    <Box
      className="carousel-container"
      sx={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        className="carousel-wrapper"
        sx={{
          // display: "flex",
          // flex: { xs: "100%", sm: "200%", md: "300%" },
          transform: `translateX(-${state * width}px)`,
        }}
      >
        <Box
          className="carousel-content"
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            overflow: "hidden",
            width: "fit-content",
          }}
        >
          {items.map((item: any, index: number) => (
            <Box
              className="carousel-item"
              key={index}
              sx={{
                width: width,
                // flex: { xs: "0 0 100%", sm: "0 0 50%", md: "0 0 33.33%" },
                // padding: "0 10px",
                // boxSizing: "border-box",
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        className="carousel-controls"
        sx={
          {
            // display: "flex",
            // justifyContent: "space-between",
            // marginTop: "10px",
          }
        }
      >
        {state > 0 && <button onClick={handlePrev}>Prev</button>}
        {state < items.length - 1 && <button onClick={handleNext}>Next</button>}
      </Box>
    </Box>
  );
};
