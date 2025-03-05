import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./layouts/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* landing page view */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<p>our services</p>} />
        <Route path="help" element={<p>ask for help</p>} />
        <Route path="contact" element={<p>our contact</p>} />

        {/* login & logout */}
        <Route path="login" element={<p> login</p>} />
        <Route path="logout" element={<p> logout</p>} />

        {/* patient view */}
        <Route path="app" element={<p>patient app view</p>} />

        {/* doctor view */}
        <Route path="dashboard" element={<p>Dashboard</p>} />
      </Routes>
    </BrowserRouter>
  );
}

// npx shadcn-ui@latest add button
