import "./App.css";
import styles from "./test.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import Students from "./pages/Students";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/courses"
            element={
              <ProtectedRoutes>
                <Courses />
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
  );
}

export default App;
