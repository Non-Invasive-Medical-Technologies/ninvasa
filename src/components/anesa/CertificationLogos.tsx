import React from 'react';
import { motion } from 'framer-motion';

const CertificationLogos = () => {
  const certifications = [
    { name: 'CE Certification', src: '/lovable-uploads/f853533b-8710-42f8-8709-788ea59438ae.png', alt: 'CE Mark' },
    { name: 'CFDA Approval', src: '/lovable-uploads/9176dac2-2466-41fe-8692-12603e4e1527.png', alt: 'CFDA Logo' },
    { name: 'EU Certification', src: '/lovable-uploads/bddec416-6883-4c51-81e9-f6cb9f150828.png', alt: 'EU Logo' },
    { name: 'BSI Certification', src: '/lovable-uploads/f853533b-8710-42f8-8709-788ea59438ae.png', alt: 'BSI Logo' }
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Certifications & Approvals</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg"
          >
            <div className="w-24 h-24 relative mb-2">
              <img
                src={cert.src}
                alt={cert.alt}
                className="object-contain w-full h-full"
              />
            </div>
            <p className="text-sm text-center font-medium text-gray-600">{cert.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificationLogos;