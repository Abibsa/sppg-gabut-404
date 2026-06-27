import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import ScanlineOverlay from "./components/ScanlineOverlay";
import CornerDecor from "./components/CornerDecor";
import Home from "./pages/Home";
import Arsip from "./pages/Arsip";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/arsip" element={<ProtectedRoute><Arsip /></ProtectedRoute>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen flex flex-col relative grid-bg">
          <ParticleBackground />
          <ScanlineOverlay />
          <CornerDecor />
          
          {loading ? (
            <LoadingScreen onComplete={() => setLoading(false)} />
          ) : (
            <Router>
              <Navbar />
              <AnimatedRoutes />
              <Footer />
            </Router>
          )}
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
