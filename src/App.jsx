import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
<<<<<<< HEAD
import DashBoard from "./pages/MyBookings";
=======
import MyBookings from "./pages/MyBookings";
>>>>>>> ad8d0e8d0ff1fbc912361777d76a72550aa8acb3
import "./App.css";
import Leads from "./pages/Leads";
import Tasks from "./pages/Tasks";
import { useAuth } from "./context/AuthContext";
import Header from "./components/Header";
import BreadCrumb from "./components/BreadCrumb";

function App() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <SignIn />;
  }

  return (
    <>
      <Header />
      <BreadCrumb />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/MyBookings" replace />} />
          <Route path="/MyBookings" element={<MyBookings />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
