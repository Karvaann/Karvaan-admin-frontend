import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import MyBookings from "./pages/MyBookings";
import "./App.css";
import Leads from "./pages/Leads";
import Tasks from "./pages/Tasks";
import { useAuth } from "./context/AuthContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  const { isAuthenticated } = useAuth();
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);

  if (!isAuthenticated) {
    return <SignIn />;
  }

  return (
    <>
      <Header />
      <BreadCrumb />
      <BrowserRouter>
        <Header isOpen={isSideBarOpen} />
        <Sidebar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sales/other-services" element={<MyBookings />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
