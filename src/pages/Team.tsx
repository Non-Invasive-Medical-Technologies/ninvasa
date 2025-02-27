import { motion } from "framer-motion";
import TeamMember from "@/components/team/TeamMember";

const Team = () => {
  const team = [
    {
      name: "Mr. Anatolii Pulavskyi",
      role: "Chief Technology Officer & Founder - KOLIBRI",
      description: "Inventor and technical visionary behind KOLIBRI's non-invasive diagnostic technology. Master of Science in Engineering with extensive experience in biomedical signal processing and medical device development. Member of the New York Academy of Sciences.",
      extendedProfile: {
        qualifications: [
          "Master of Science in Engineering - Kharkiv Higher Air Force Communications School",
          "Member of the New York Academy of Sciences",
          "Multiple patent holder in non-invasive medical diagnostics"
        ],
        expertise: [
          "Non-invasive diagnostic technologies",
          "Medical device development",
          "Software development and programming",
          "International business development",
          "ISO 13485 Medical devices quality management"
        ],
        patents: [
          "US Patent 10,531,836 B2 - Device and system for signal decomposition",
          "CN Patent 202210905914 - Non-invasive physiological testing cabin",
          "Multiple Ukrainian patents in medical diagnostics and analysis"
        ],
        publications: [
          "Author of numerous scientific papers on non-invasive diagnostics",
          "Published research on glucose concentration measurement",
          "Contributions to medical device methodology and guidelines"
        ]
      }
    },
    {
      name: "Mr. Mykola Akhtemiychuk",
      role: "Chief Engineer - KOLIBRI",
      description: "Leading engineer at SC KOLIBRI LLC with extensive experience in mechanical and technical systems development. Certified specialist in ISO standards with expertise in programming and development of high-tech medical equipment.",
      extendedProfile: {
        qualifications: [
          "Chernivtsi National University of Engineer - Designer, Programmer of Electronic Equipment",
          "Snyatyn Agricultural College - Mechanical Machinery",
          "Certified specialist according to ISO 13485: 2016 and ISO 19011: 2018 standards from 2021"
        ],
        expertise: [
          "Programming (Pascal, Delphi)",
          "Mechanical and Technical Systems Development",
          "Kinematic Schemes Development",
          "CAD Software Proficiency"
        ],
        experience: [
          "Chief Engineer at SC KOLIBRI LLC since 2021",
          "BIOPROMIN LTD - Research and development of medical equipment since 2010"
        ],
        software: [
          "Kompas 3D",
          "SolidWorks",
          "AutoCAD Invertor"
        ],
        languages: [
          "Ukrainian (Native)",
          "Russian (Basic)",
          "Polish (Basic)"
        ]
      }
    },
    {
      name: "Dr. Sergii Kryvenko",
      role: "PhD, Data Scientist",
      description: "Over 15 years of experience in Data Science with a PhD in Remote Sensing. Expert in digital signal processing, biomedical signal processing, and machine learning. Senior member of IEEE and chairman of IEEE Engineering in Medicine and Biology Society (Ukraine section).",
      extendedProfile: {
        qualifications: [
          "PhD in Remote Sensing - National Aerospace University 'KhAI'",
          "MS in Information Communication Networks - National University of Radioelectronics",
          "BS in Information Communication Networks - National University of Radioelectronics",
          "Certified in Data Analysis and Machine Learning by AWS, Coursera and Kaggle",
          "Certified for Biomedical Responsible Conduct of Research by CITI program"
        ],
        expertise: [
          "Digital signal processing",
          "Biomedical signal processing",
          "Machine learning and data analysis",
          "Image preprocessing and filtering",
          "Scientific research and clinical trials",
          "Advanced programming skills"
        ],
        location: "Kharkiv, Ukraine",
        publications: [
          "Multiple research papers on signal processing and data compression",
          "Dissertation: 'Methods for compression and filtering of remote sensing data with providing high visual quality'"
        ]
      }
    },
    {
      name: "Dr. Ahmad Al-Rashid",
      role: "General Manager - MENA Region",
      description: "With over 20 years of experience in biotechnology and healthcare technology, Dr. Al-Rashid leads our operations in Dubai. He holds a Ph.D. in Biomedical Engineering and an MBA, combining scientific expertise with strategic business acumen.",
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
      description: "Spearheading the development of our non-invasive diagnostic technologies."
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