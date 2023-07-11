import styles from "./Review.styles";
import { Card, CardContent, Rating, Typography } from "@mui/material";

const MAX = 100;

export default function Reviews({ review, index }: any) {
  const reviewText =
    review.content.length > MAX
      ? review.content.substring(0, MAX - 3) + "..."
      : review.content;
  return (
    <Card key={6} sx={styles.review}>
      <Rating readOnly name="size-large" defaultValue={5} size="large" />

      <Typography sx={styles.text}>{reviewText}</Typography>
      <CardContent sx={styles.reviewContent}>
        <Typography variant="cardTitle" component="div">
          {review.name + " " + index}
        </Typography>
      </CardContent>
    </Card>
  );
}
