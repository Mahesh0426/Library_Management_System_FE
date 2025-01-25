/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Button, Stack, Table } from "react-bootstrap";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deleteBookAction, getBooksAction } from "../../redux/bookAction";

const BooksTable = (props) => {
  const { setShowModal, setInitialFormData } = props;
  const { books } = useSelector((state) => state.book);

  const openEditBookModal = (book) => {
    const bookData = {
      id: book._id,
      thumbnail: book.thumbnail,
      title: book.title,
      author: book.author,
      publish_year: book.publish_year,
      isbn: book.isbn,
      description: book.description,
    };

    setInitialFormData(bookData);
    setShowModal(true);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);

  const deleteBook = (bookId) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      dispatch(deleteBookAction(bookId));
    }
  };

  return (
    <div className="table-responsive">
      <Table striped bordered hover className="align-middle">
        <thead className="table-dark">
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book, index) => (
            <tr key={book._id}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">
                <img
                  src={book.thumbnail}
                  className="img-thumbnail rounded"
                  alt="BookImage"
                  style={{ maxWidth: "80px" }}
                />
              </td>
              <td>
                <strong>{book.title}</strong>
                <div className="text-muted fst-italic">{book.author}</div>
              </td>
              <td className="text-truncate" style={{ maxWidth: "300px" }}>
                {book.description}
              </td>
              <td>
                <Stack
                  direction="horizontal"
                  gap={2}
                  className="justify-content-center"
                >
                  <Button
                    variant="outline-success"
                    size="sm"
                    onClick={() => openEditBookModal(book)}
                  >
                    <BsPencil />
                  </Button>

                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => deleteBook(book._id)}
                  >
                    <BsTrash />
                  </Button>
                </Stack>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BooksTable;
