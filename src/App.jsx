import "./App.css";
import styles from "./test.module.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import Students from "./pages/Students";
import ProfileScreen from "./pages/Profile";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import {OperationsProvider} from "./context/OperationsContext";
import { CourseAttendance } from "./pages/CourseAttendance";
import { AttendanceProcess } from "./pages/AttendanceProcess";
import { AttendanceSheet } from "./pages/AttendanceSheet";
function App() {
  return (
    <OperationsProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/courses/:id/attendance" element={<ProtectedRoutes><CourseAttendance /></ProtectedRoutes>} />
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
              path="/courses/:id/attendance/process"
              element={
                <ProtectedRoutes>
                  <AttendanceProcess />
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
