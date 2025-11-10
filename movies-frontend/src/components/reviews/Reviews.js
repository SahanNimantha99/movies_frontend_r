import { useEffect, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";
import "./Reviews.css"; // 👈 new CSS file

const Reviews = ({ getMovieData, movie, reviews = [], setReviews }) => {
  const revText = useRef();
  const { movieId } = useParams();

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();
    const rev = revText.current;

    try {
      await api.post("/reviews", {
        reviewBody: rev.value,
        imdbId: movieId,
      });

      const updatedReviews = [...reviews, { body: rev.value }];
      rev.value = "";
      setReviews(updatedReviews);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="reviews-container py-4">
      <Row className="mb-4">
        <Col>
          <h3 className="reviews-title">
            🎬 Reviews for <span className="movie-title">{movie?.title}</span>
          </h3>
        </Col>
      </Row>

      <Row className="g-4 align-items-start">
        <Col md={5} className="text-center">
          <img
            src={movie?.poster}
            alt={movie?.title || "Movie Poster"}
            className="movie-poster rounded-4 shadow-lg"
          />
        </Col>

        <Col md={7}>
          <ReviewForm
            handleSubmit={addReview}
            revText={revText}
            labelText="Write a Review"
          />
          <hr className="divider" />
          <div className="reviews-list mt-3">
            {reviews.length > 0 ? (
              reviews.map((r, i) => (
                <div key={i} className="review-item p-3 rounded-3 mb-3">
                  <p className="review-text">{r.body}</p>
                </div>
              ))
            ) : (
              <p className="no-reviews">No reviews yet. Be the first!</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
