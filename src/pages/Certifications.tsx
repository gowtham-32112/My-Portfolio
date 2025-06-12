import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, Award, ExternalLink, Search, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "AWS Cloud Practitioner-CP",
      issuer: "Amazon Web Services in Academy",
      date: "May 2024",
      expiry: "May 2027",
      description: "AWS Cloud Practitioner is an entry-level certification that validates foundational knowledge of AWS cloud services, security concepts, and pricing, suitable for individuals new to cloud computing seeking a basic understanding of AWS",
      skills: ["Cloud Computing", "Cloud Services", "Cloud Engineering"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwJifGCxTAFfckU3CntqMxamm3jM4kI8hChg&s",
      credentialId: "963375c936d3412b916bd3d1e99d0658",
      credentialURL: "https://www.credly.com/badges/8b2b4304-b916-4a1c-9efc-4d1b446a4fd3/public_url"
    },
    {
      title: "Red Hat Certified Enterprise Application Developer",
      issuer: "Red Hat Academy",
      date: "September 2024",
      expiry: "September 2027",
      description: "A Red Hat® Certified Enterprise Application Developer possesses the skills, knowledge, and abilities required to to undertake real-world Java development tasks. The credential is earned after successfully passing the Red Hat Certified Enterprise Application Developer exam (EX183).",
      skills: ["Java Development", "Java Enterprise Edition (JEE)", "SQL Operations", "Red Hat Academy"],
      image: "https://www.tcc-consulting.com.hk/wp-content/uploads/2021/05/RED-HAT-LOGO-%E9%80%8F%E6%98%8E%E5%BA%95-EX183.png",
      credentialId: "240-198-846",
      credentialURL: "https://www.credly.com/badges/2bd27595-ed94-4d66-a615-6a72986e303b"
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce Trailhead",
      date: "October 2024",
      expiry: "No Expiration",
      description: "Salesforce AI Associate certification is designed for individuals who want to demonstrate their proficiency in the capabilities of AI and data as they apply to CRM.",
      skills: ["Validates skills in using AI", "AI Associate with Cloud"],
      image: "https://salesforcegeek.in/wp-content/uploads/2023/11/complete-salesforce-ROADMAP-300x169.png",
      credentialURL: "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=waPO8tcW7KGyT5zKjaIeLHQwphAQKeNO4qCHB2zNL0PNj3Nrf4yy49K/Qx6HsYP3"
    },
    
  ];

  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredCertifications, setFilteredCertifications] = React.useState(certifications);

  React.useEffect(() => {
    const results = certifications.filter(cert => 
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredCertifications(results);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Certifications</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of professional certifications and credentials that validate my expertise and knowledge in various engineering domains.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 max-w-2xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Search by certification name, issuer, or skill..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">{cert.title}</h2>
                  <div className="bg-green-100 text-green-800 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center text-gray-700 mb-2">
                    <Award className="h-5 w-5 mr-2 text-indigo-600" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center text-gray-700 mb-2">
                    <Calendar className="h-5 w-5 mr-2 text-indigo-600" />
                    <span>Issued: {cert.date}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-5 w-5 mr-2 text-indigo-600" />
                    <span>Expires: {cert.expiry}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{cert.description}</p>
                
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <div className="text-sm text-gray-500 mb-2">
                  Credential ID: {cert.credentialId}
                </div>
                <a 
                  href={cert.credentialURL} 
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify Credential
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCertifications.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No certifications found</h3>
            <p className="text-gray-600">Try adjusting your search terms</p>
          </div>
        )}

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-indigo-50 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Continuing Education</h2>
          <p className="text-gray-700 mb-6">
            I'm committed to continuous learning and regularly update my skills through various professional development programs.
            Here are some of the platforms I use for ongoing education:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2 text-indigo-700">Online Learning</h3>
              <p className="text-gray-600 mb-4">Coursera, edX, Udemy, LinkedIn Learning</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2 text-indigo-700">Professional Associations</h3>
              <p className="text-gray-600 mb-4">IEEE, ASME, PMI, ACM</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2 text-indigo-700">Conferences & Workshops</h3>
              <p className="text-gray-600 mb-4">Regularly attend industry events and technical workshops</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;