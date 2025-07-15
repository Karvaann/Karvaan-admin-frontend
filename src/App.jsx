import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import DashBoard from "./pages/DashBoard";
import "./App.css";
import Leads from "./pages/Leads";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<DashBoard />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
