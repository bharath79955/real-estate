import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Agents from "./pages/Agents";
import Wishlist from "./pages/Wishlist";
import PropertyDetails from "./pages/PropertyDetails";
import AgentDetails from "./pages/AgentDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/contact" element={<Contact />} />

      {/* Details Pages */}
      <Route
        path="/property/:id"
        element={<PropertyDetails />}
      />

      <Route
        path="/agent/:id"
        element={<AgentDetails />}
      />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;