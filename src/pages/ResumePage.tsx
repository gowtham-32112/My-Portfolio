import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';

const ResumePage: React.FC = () => {
  const resumes = [
    {
      label: 'Product Based Resume',
      fileUrl: '/online.pdf'
    },
    {
      label: 'Service Based Resume',
      fileUrl: '/resume-prod.pdf'
    },
    {
      label: 'Resume 3',
      fileUrl: '/resume-3.pdf'
    }
  ];

  const [selectedResume, setSelectedResume] = useState(resumes[0].fileUrl);

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Resumes</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These are my Resumes that can Preferable to download.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-8">
          {resumes.map((resume, index) => (
            <button
              key={index}
              onClick={() => setSelectedResume(resume.fileUrl)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200 ${selectedResume === resume.fileUrl ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border-indigo-600 hover:bg-indigo-50'}`}
            >
              {resume.label}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-indigo-600">
              <FileText className="w-5 h-5 mr-2" />
              <span className="font-medium">{resumes.find(r => r.fileUrl === selectedResume)?.label}</span>
            </div>
            <a
              href={selectedResume}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
            >
              Download PDF
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>

          <iframe
            src={selectedResume}
            title="Resume Preview"
            className="w-full h-[600px] border rounded-lg"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage;
