import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "../../redux/userAction";
import { getBorrowsAction } from "../../redux/borrowAction";

const AdminDashboard = () => {
  const { books } = useSelector((state) => state.book);
  const { users } = useSelector((state) => state.user);
  const { borrows } = useSelector((state) => state.borrow);

  //count borrow books

  const notReturnedCount = borrows.filter(
    (borrow) => borrow.has_returned === false
  ).length;

  const dispatch = useDispatch();

  //useeffect to fetch all the users
  useEffect(() => {
    dispatch(getAllUsersAction());
  }, []);

  //useeffect to fetch all the users
  useEffect(() => {
    dispatch(getBorrowsAction());
  }, []);

  const totalUsers = users.length;
  const totalBooks = books.length;

  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">Library Admin Dashboard</h1>
      <Row>
        {/* Total Users Card */}
        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text className="display-4 fw-bold">{totalUsers}</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Total Books Card */}
        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Total Books</Card.Title>
              <Card.Text className="display-4 fw-bold">{totalBooks}</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Borrowed Books Card */}
        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Borrowed Books</Card.Title>
              <Card.Text className="display-4 fw-bold">
                {notReturnedCount}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
