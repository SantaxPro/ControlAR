import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { AuthProvider } from "./context/AuthContext";
import { OperationsProvider } from "./context/OperationsContext";
import { AttendanceProcess } from "./pages/AttendanceProcess";
import { AttendanceSheet } from "./pages/AttendanceSheet";
import { CourseAttendance } from "./pages/CourseAttendance";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import ProfileScreen from "./pages/Profile";
import { Registry } from "./pages/Registry";
import Students from "./pages/Students";
import styles from "./test.module.css";
function App() {
  return (
    <OperationsProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/courses/:id/attendance"
              element={
                <ProtectedRoutes>
                  <CourseAttendance />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/courses"
              element={
                <ProtectedRoutes>
                  <Courses />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/courses/:id/sheet"
              element={
                <ProtectedRoutes>
                  <AttendanceSheet />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/courses/attendance/process/:id/:registryId"
              element={
                <ProtectedRoutes>
                  <AttendanceProcess />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/courses/:id/sheet/:registryId"
              element={
                <ProtectedRoutes>
                  <Registry />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoutes>
                  <ProfileScreen />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/students"
              element={
                <ProtectedRoutes>
                  <Students />
                </ProtectedRoutes>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </OperationsProvider>
  );
}

export default App;
