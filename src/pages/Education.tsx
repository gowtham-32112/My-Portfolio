import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering in Computer Science Engineering",
      institution: "KL University",
      location: "Vaddeswaram, Guntur.",
      period: "2022 - 2026",
      description: "Graduating with honors.",
      courses: ["Deep Learning", "Machine Learning", "Data Driven Artificial Intelligence", "Operating Systems", "Java Full Stack Development"],
      image: "https://www.kluonline.in/images/introduction.png"
    },
    {
      degree: "Intermediate on MPC",
      institution: "Narayana Junior College",
      location: "Benz Circle, Vijayawada",
      period: "2020 - 2022",
      description: "Take an Academic degree in Intermediate in MPC",
      courses: ["Maths", "Advanced Calculus", "Physics", "Chemistry"],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Education Journey</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic path has equipped me with both theoretical knowledge and practical skills in engineering.
          </p>
        </motion.div>

        <div className="space-y-16">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1 h-64 md:h-auto">
                  <img 
                    src={item.image} 
                    alt={item.institution} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-8">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-6 w-6 text-indigo-600 mr-2" />
                    <h2 className="text-2xl font-bold text-gray-900">{item.degree}</h2>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">{item.institution}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-1" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-1" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.courses.map((course, idx) => (
                        <span 
                          key={idx} 
                          className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <a 
                      href="https://www.kluniversity.in/" 
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      Visit Institution Website
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;