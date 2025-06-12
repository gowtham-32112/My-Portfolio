import React from 'react';
import { motion } from 'framer-motion';

import { Code, PenTool as BookOpen, Users, Github, Globe, Award, ExternalLink } from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: "C Programming", level: 90},
    { name: "Java Programming", level: 70},
    { name: "Python", level: 80},
    { name: "HTML/CSS", level: 80},
    { name: "C++", level: 20},
  ];

  const softSkills = [
    { name: "Project Management", description: "Experienced in leading cross-functional teams and managing complex engineering projects from conception to completion." },
    { name: "Problem Solving", description: "Strong analytical thinking and creative approach to solving complex engineering challenges." },
    { name: "Communication", description: "Excellent ability to explain technical concepts to both technical and non-technical stakeholders." },
    { name: "Teamwork", description: "Collaborative team player with experience in diverse, multidisciplinary environments." },
    { name: "Leadership", description: "Proven ability to lead engineering teams, delegate tasks, and mentor junior engineers." },
    { name: "Time Management", description: "Skilled at prioritizing tasks, meeting deadlines, and managing multiple projects simultaneously." }
  ];


  const codingPlatforms = [
    {
      name: "GitHub",
      username: "gowtham-32112",
      stats: {
        repositories: 12,
        contributions: "Working on the contributions"
      },
      achievements: ["Arctic Code Vault", "Progran Deployer"],
      link: "https://github.com/gowtham-32112",
      icon: <Github className="h-8 w-8" />,
      color: "bg-gray-800"
    },
    {
      name: "CodeChef",
      username: "klu_2200032112",
      stats: {
        problems: 442,
        contests: 25,
        ranking: "2 stars🌟🌟"
      },
      achievements: ["Daily Streak - Gold Badge", "Dynamic Programming Badge", "Compitative Coder"],
      link: "https://www.codechef.com/users/klu_2200032112",
      icon: <Code className="h-8 w-8" />,
      color: "bg-yellow-900"
    },
    {
      name: "LeetCode",
      username: "gowtham2200032112",
      stats: {
        problems: 42,
        contests: 10,
        rating: "Top 85%"
      },
      achievements: [],
      link: "https://leetcode.com/u/gowtham2200032112/",
      icon: <Code className="h-8 w-8" />,
      color: "bg-yellow-600"
    },
    {
      name: "HackerRank",
      username: "h2200032112",
      stats: {
        
        certificate: 1 ,
        badges: 4
      },
      achievements: ["Rest API (Intermediate)", "Python", "C Silver"],
      link: "https://www.hackerrank.com/profile/h2200032112",
      icon: <Award className="h-8 w-8" />,
      color: "bg-green-600"
    },

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills & Global Platforms</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical abilities, soft skills in engineering.
          </p>
        </motion.div>

        {/* Coding Platforms Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Globe className="h-6 w-6 mr-2 text-indigo-600" />
            Coding Platforms & Profiles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {codingPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className={`${platform.color} text-white p-4 flex items-center`}>
                  <div className="bg-white/20 p-2 rounded-lg mr-4">
                    {platform.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{platform.name}</h3>
                    <p className="text-white/80">@{platform.username}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Stats</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {Object.entries(platform.stats).map(([key, value], idx) => (
                        <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-gray-500 text-xs capitalize">{key}</p>
                          <p className="text-indigo-600 font-semibold">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Achievements</h4>
                    <ul className="space-y-1">
                      {platform.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a 
                      href={platform.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      View Profile
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Code className="h-6 w-6 mr-2 text-indigo-600" />
            Programming Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg mr-4">
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                  </div>
                </div>
                
                
                <div className="mt-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700"></span>
                    <span className="text-sm font-medium text-gray-700">Entry-Level</span>
                    <span className="text-sm font-medium text-gray-700">Intermediate</span>
                    <span className="text-sm font-medium text-gray-700">Proficient</span>
                    <span className="text-sm font-medium text-indigo-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="h-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Users className="h-6 w-6 mr-2 text-indigo-600" />
            Professional Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-600"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <BookOpen className="h-6 w-6 mr-2" />
            Tools & Technologies
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { category: "Design Software", items: ["Eclipse IDE", "Apache Tomcat", "VS Code", "Postman", "Mongo DB"] },
              { category: "Analysis Tools", items: ["Google Colab", "Tableau", "Vertex AI", "MATLAB", "LabVIEW"] },
              { category: "Programming", items: ["Python", "C", "Java", "SQL", "HTML/CSS"] },
              { category: "Project Management", items: ["AWS Console", "Qwiklabs", "Coursera", "SkillUp", "GitHub"] },
            ].map((group, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold mb-3 text-lg">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-300 rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;