import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import PublicRoute from "./Components/PublicRoute";
import ProtectedRoute from "./Components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import ApplyDoctor from "./Pages/ApplyDoctor";
import Notifications from "./Pages/Notifications";
import UsersList from "./Pages/Admin/UsersList";
import DoctorsList from "./Pages/Admin/DoctorsList";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      <BrowserRouter>
        {loading && (
          <div className="spinner-parent">
            <div className="spinner-border" role="status"></div>
          </div>
        )}
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/apply-doctor"
            element={
              <ProtectedRoute>
                <ApplyDoctor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                < Notifications/>
              </ProtectedRoute>
            }
          />
            <Route
          path="/admin/userslist"
          element={
            <ProtectedRoute>
              <UsersList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/doctorslist"
          element={
            <ProtectedRoute>
              <DoctorsList />
            </ProtectedRoute>
          }
        />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
