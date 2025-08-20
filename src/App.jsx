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
import Vendors from "./pages/directory/Vendors";
import Customers from "./pages/directory/Customer";
import Teams from "./pages/directory/Teams";
import Settings from "./pages/Settings";
import ProfileSummary from "./components/ProfileSummary";

function App() {
  const { isAuthenticated } = useAuth();
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);

  if (!isAuthenticated) {
    return <SignIn />;
  }

  return (
    <>
      <BrowserRouter>
        <Header isOpen={isSideBarOpen} />
        <Sidebar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sales/limitless" element={<MyBookings />} />
          <Route path="/sales/other-services" element={<MyBookings />} />
          <Route path="/operations/limitless" element={<MyBookings />} />
          <Route path="/operations/other-services" element={<MyBookings />} />
          <Route path="/finance/limitless" element={<MyBookings />} />
          <Route path="/finance/other-services" element={<MyBookings />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/directory/vendors" element={<Vendors />} />
          <Route path="/directory/customers" element={<Customers />} />
          <Route path="/directory/team" element={<Teams />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
