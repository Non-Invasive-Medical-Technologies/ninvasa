import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Anesa from "./pages/Anesa";
import Kolibri from "./pages/Kolibri";
import Technology from "./pages/Technology";
import Parameters from "./pages/Parameters";
import Business from "./pages/Business";
import Investment from "./pages/Investment";
import Strategy from "./pages/Strategy";
import Download from "./pages/Download";
import BioPromin from "./components/about/BioPromin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="about" element={<About />} />
        <Route path="about/biopromin" element={<BioPromin />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="anesa" element={<Anesa />} />
        <Route path="kolibri" element={<Kolibri />} />
        <Route path="technology" element={<Technology />} />
        <Route path="parameters" element={<Parameters />} />
        <Route path="business" element={<Business />} />
        <Route path="investment" element={<Investment />} />
        <Route path="strategy" element={<Strategy />} />
        <Route path="download" element={<Download />} />
      </Route>
    </Routes>
  );
}

export default App;