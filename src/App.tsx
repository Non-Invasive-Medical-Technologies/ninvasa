import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Technology from "./pages/Technology";
import Investment from "./pages/Investment";
import Business from "./pages/Business";
import Strategy from "./pages/Strategy";
import Download from "./pages/Download";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/business" element={<Business />} />
            <Route path="/strategy" element={<Strategy />} />
            <Route path="/download" element={<Download />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;