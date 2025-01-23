import React, { useEffect } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "../../redux/userAction";

const AdminUserPage = () => {
  const { users } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  //useeffect to fetch all the users
  useEffect(() => {
    dispatch(getAllUsersAction());
  }, []);

  return (
    <Container className="my-4">
      <h2 className="mb-4">Admin User Management</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>
                {user.first_name} {user.last_name}
              </td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Button variant="primary" size="sm" className="me-2">
                  Edit
                </Button>
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminUserPage;
