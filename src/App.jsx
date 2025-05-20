import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CryptoProcessingPage from "./pages/CryptoProcessingPage";
import Services from "./pages/Services";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CryptoProcessingPage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}