import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";

// import Pages
import Home from "./pages/Home.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Artist from "./pages/Artist.tsx";
import Contact from "./pages/Contact.tsx";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/ReactSoundStage/Home" element={<Home />} />
          <Route path="/ReactSoundStage/Dashboard" element={<Dashboard />} />
          <Route path="/ReactSoundStage/Artist" element={<Artist />} />
          <Route path="/ReactSoundStage/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
