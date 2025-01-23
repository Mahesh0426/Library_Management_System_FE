import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthPage from "./pages/authpage";
import AdminPrivateRoute from "./components/AdminPrivateRoute";
import AdminLayout from "./components/AdminLayout";
import BookPage from "./pages/BookPage";
import StudentLayout from "./components/StudentLayout";
import HomePage from "./pages/HomePage";
import BookDetailPage from "./pages/BookDetailsPage";
import StudentPrivateRoute from "./components/StudentPrivateRoute";
import BorrowsPage from "./pages/BorrowaPage";
import ReviewPage from "./pages/ReviewPage";
import AdminUserPage from "./pages/userPage";
import AdminDashboard from "./pages/adminDashboardPage";
function App() {
  return (
    <>
      <Routes>
        {/* auth route public routes */}
        <Route path="/auth" element={<AuthPage />} />

        {/* admin routes - private routes */}
        <Route
          path="/admin"
          element={
            <AdminPrivateRoute>
              <AdminLayout />
            </AdminPrivateRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="books" element={<BookPage />} />
          <Route path="reviews" element={<ReviewPage />} />
          <Route path="users" element={<AdminUserPage />} />
        </Route>

        {/* client/student Routes */}
        <Route path="/" element={<StudentLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="book/:_id" element={<BookDetailPage />} />

          <Route
            path="borrows"
            element={
              <StudentPrivateRoute>
                <BorrowsPage />
              </StudentPrivateRoute>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
