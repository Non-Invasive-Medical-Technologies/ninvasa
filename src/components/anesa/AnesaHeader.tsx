import { motion } from "framer-motion";

const AnesaHeader = () => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold text-teal-600">ANESA</h1>
      <p className="text-xl text-gray-600">Advanced Non-Invasive Express Screening Analyser</p>
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-md">
          <img 
            src="/lovable-uploads/d9d98ee8-ae0b-4ff3-a92e-49166e1466a8.png"
            alt="ANESA Device Display"
            className="rounded-lg shadow-xl w-full h-auto object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AnesaHeader;