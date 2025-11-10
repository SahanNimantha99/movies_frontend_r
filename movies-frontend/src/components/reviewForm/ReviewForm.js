import { Form, Button } from "react-bootstrap";
import "./ReviewForm.css"; // 👈 add this stylesheet

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
  return (
    <Form className="review-form p-4 rounded-4 shadow-sm">
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="form-label-custom">{labelText}</Form.Label>
        <Form.Control
          ref={revText}
          as="textarea"
          rows={4}
          defaultValue={defaultValue}
          placeholder="Write your review..."
          className="form-textarea-custom"
        />
      </Form.Group>
      <div className="text-end">
        <Button
          variant="outline-warning"
          onClick={handleSubmit}
          className="submit-btn fw-semibold px-4"
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default ReviewForm;
