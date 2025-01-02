import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useLocation, Outlet } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="pt-16 flex-grow w-full max-w-full overflow-x-hidden px-4 sm:px-6 lg:px-8"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;