import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homeComponents/HomePage";
import NavBar from "./components/navComponents/NavBar";
import ServicesPage from "./components/servicesComponents/ServicesPage";
import QuotePage from "./components/quoteComponents/QuotePage";
import GalleryPage from "./components/workGallerComponents.js/GalleryPage";

function App() {
  return (
      <div>
          <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-services" element={<ServicesPage />} />
          <Route path="/get-quote" element={<QuotePage />} />
          <Route path="/our-work" element={<GalleryPage />} />
        </Routes>
      </div>
  );
}

export default App;
