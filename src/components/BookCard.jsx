import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const BookCard = ({ book }) => {
  const { _id, title, thumbnail, author } = book;

  return (
    <Card
      className="h-100 shadow-sm transition-all hover:shadow-lg"
      style={{
        maxWidth: "300px",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Link to={`/book/${_id}`} className="text-decoration-none">
        <div
          className="position-relative overflow-hidden"
          style={{ height: "250px" }}
        >
          <Card.Img
            variant="top"
            src={thumbnail}
            className="w-100 h-100"
            style={{
              objectFit: "cover",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
        </div>
      </Link>

      <Card.Body className="d-flex flex-column">
        <Card.Title
          className="h5 mb-2 text-dark"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Card.Title>

        <Card.Text className="text-muted mb-3 fst-italic">
          by {author}
        </Card.Text>

        <div className="mt-auto text-end">
          <Link to={`/book/${_id}`}>
            <Button
              variant="outline-primary"
              className="px-4 rounded-pill"
              style={{ transition: "all 0.2s ease-in-out" }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              View Details
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
