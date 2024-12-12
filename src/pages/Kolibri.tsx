import { motion } from "framer-motion";
import KolibriPlatform from "@/components/KolibriPlatform";

const Kolibri = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="section-fade-in">
        <h1 className="text-4xl font-bold mb-8 text-center">KOLIBRI System</h1>
        <KolibriPlatform />
      </div>
    </div>
  );
};

export default Kolibri;