import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Secure from "./components/Secure";
import UserDashboard from "./pages/userDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Secure />}>
          <Route path="/dashboard/*" element={<UserDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
