import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getBooksAction } from "../../redux/bookAction";
import LibraryCarousel from "../components/LibraryCarousel";
import BookCard from "../components/BookCard";

const HomePage = () => {
  const { books } = useSelector((state) => state.book);

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8;

  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);

  // Calculate total pages
  const totalPages = Math.ceil(books.length / booksPerPage);

  // Get books for the current page
  const currentBooks = books.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  // Handler for page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5">
        <h1>Welcome to the Library</h1>
        <p>
          Explore a wide variety of books and discover your next favorite read!
        </p>
      </div>

      {/* Carousel Section */}
      <div className="m-4">
        <LibraryCarousel />
      </div>

      {/* Featured Books Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Books</h2>
        <Row className="justify-content-center">
          {books.slice(0, 4).map((book) => (
            <Col key={book._id} md={3} className="my-2">
              <BookCard book={book} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Categories Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Browse by Category</h2>
        <Row className="justify-content-center">
          {["Fiction", "Non-Fiction", "Mystery", "Sci-Fi", "Romance"].map(
            (category, index) => (
              <Col key={index} md={2} className="text-center my-2">
                <Card className="shadow-sm p-3">
                  <Card.Body>
                    <h5>{category}</h5>
                  </Card.Body>
                </Card>
              </Col>
            )
          )}
        </Row>
      </Container>

      {/* All Books Section with Pagination */}
      <Container>
        <h2 className="text-center mb-4">All Books</h2>
        <Row>
          {currentBooks.map((book) => (
            <Col key={book._id} md={3} className="my-2">
              <BookCard book={book} />
            </Col>
          ))}
        </Row>

        {/* Pagination Controls */}
        <div className="d-flex justify-content-center mt-4">
          <nav>
            <ul className="pagination">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <li
                    key={pageNumber}
                    className={`page-item ${
                      pageNumber === currentPage ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
