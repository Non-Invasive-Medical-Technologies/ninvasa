import { motion } from "framer-motion";
import TeamMember from "@/components/team/TeamMember";

const Team = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Scientific Officer",
      description: "Leading our research initiatives with over 15 years of experience in medical diagnostics and bioengineering.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      name: "Dr. Ahmad Al-Rashid",
      role: "General Manager - MENA Region",
      description: "With over 20 years of experience in biotechnology and healthcare technology, Dr. Al-Rashid leads our operations in Dubai. He holds a Ph.D. in Biomedical Engineering and an MBA, combining scientific expertise with strategic business acumen.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      extendedProfile: {
        qualifications: [
          "Ph.D. in Biomedical Engineering from Imperial College London",
          "MBA from INSEAD",
          "Master's in Clinical Research from Johns Hopkins University"
        ],
        expertise: [
          "Clinical Research Management",
          "Healthcare Technology Implementation",
          "Strategic Business Development",
          "Project Management (PMP Certified)",
          "Regulatory Compliance (MENA Region)"
        ],
        experience: [
          "15+ years managing clinical research programs",
          "10+ years in healthcare technology implementation",
          "Led successful market entries in 5 MENA countries",
          "Published researcher with 20+ peer-reviewed papers"
        ]
      }
    },
    {
      name: "Michael Roberts",
      role: "Head of Research & Development",
      description: "Spearheading the development of our non-invasive diagnostic technologies.",
      imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
    },
    {
      name: "Dr. Emily Thompson",
      role: "Lead Research Scientist",
      description: "Expert in biomedical signal processing and machine learning applications in healthcare.",
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold text-medical-900">Our Team</h1>
        <p className="mx-auto max-w-2xl text-lg text-medical-600">
          Meet the dedicated professionals driving innovation in non-invasive medical diagnostics
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
          >
            <TeamMember {...member} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-lg text-medical-600">
          Our team continues to grow as we expand our research and development efforts.
          Together, we're working to revolutionize medical diagnostics and improve patient care worldwide.
        </p>
      </motion.div>
    </div>
  );
};

export default Team;