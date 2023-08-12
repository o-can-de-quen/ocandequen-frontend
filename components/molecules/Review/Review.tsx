import { IReview } from "../../../@types/Review.type";
import styles from "./Review.styles";
import { Card, CardContent, Rating, Typography } from "@mui/material";

const MAX = 100;

interface IReviews {
  review: IReview;
}

const Reviews: React.FC<IReviews> = (props) => {
  const { review } = props;
  const reviewText = review.text.length > MAX ? review.text.substring(0, MAX - 3) + "..." : review.text;
  return (
    <Card key={6} sx={styles.review}>
      <Rating readOnly name="size-large" defaultValue={5} size="large" />

      <Typography sx={styles.text}>{reviewText}</Typography>
      <CardContent sx={styles.reviewContent}>
        <Typography variant="cardTitle" component="div">
          {review.author_name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Reviews;
