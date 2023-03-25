import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import Userprofile from "./pages/Userprofile";
import Report from "./pages/Report";
import Usertable from "./pages/Usertable";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div>
      <Navbar />
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/report" element={<Report />} />
        <Route path="/table" element={<Usertable />} />
      </Routes>
    </div>
  );
}

export default App;
