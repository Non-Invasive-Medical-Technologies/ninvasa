import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Technology from "./pages/Technology";
import Business from "./pages/Business";
import Investment from "./pages/Investment";
import Competition from "./pages/Competition";
import Team from "./pages/Team";
import Portfolio from "./pages/Portfolio";
import Anesa from "./pages/Anesa";
import Kolibri from "./pages/Kolibri";
import Parameters from "./pages/Parameters";
import Strategy from "./pages/Strategy";
import Roadmap from "./pages/Roadmap";
import Download from "./pages/Download";
import Slideshow from "./pages/Slideshow";
import AnesaOnePager from "./pages/AnesaOnePager";
import KolibriOnePager from "./pages/KolibriOnePager";
import InvestmentSlideshow from "./pages/InvestmentSlideshow";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="about" element={<About />} />
        <Route path="technology" element={<Technology />} />
        <Route path="business" element={<Business />} />
        <Route path="investment" element={<Investment />} />
        <Route path="business/investment-slideshow" element={<InvestmentSlideshow />} />
        <Route path="competition" element={<Competition />} />
        <Route path="team" element={<Team />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="anesa" element={<Anesa />} />
        <Route path="anesa/onepager" element={<AnesaOnePager />} />
        <Route path="kolibri" element={<Kolibri />} />
        <Route path="kolibri/onepager" element={<KolibriOnePager />} />
        <Route path="parameters" element={<Parameters />} />
        <Route path="strategy" element={<Strategy />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="download" element={<Download />} />
        <Route path="slideshow" element={<Slideshow />} />
      </Route>
    </Routes>
  );
}

export default App;