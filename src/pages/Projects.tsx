import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, HeartPulse, ExternalLink, Landmark, CalendarClock,BookOpenText, BusFront } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "Time Table Management System",
      date: "August 2023",
      description: "An Online Timetable Management System is a digital platform designed to streamline and simplify the process of creating, managing, and accessing schedules and timetables.",
      team: "Led a team of 3 engineering students",
      category: "Mini Projects",
      icon: <CalendarClock className="h-8 w-8" />
    },
    {
      title: "Banking and Finance System",
      date: "February 2024",
      description: "It is a Project for Banking Systems is a digital platform designed to streamline and simplify the process of creating, managing, and accessing. It serves as a centralized platform where customers can perform banking transactions, and bank administrators can manage accounts, transactions, loans, and other financial services.",
      team: "Collaboration with 3 students",
      link: "https://github.com/gowtham-32112/Banking_Finance_Management",
      category: "Academic Projects",
      icon: <Landmark className="h-8 w-8" />
    },
    {
      title: "Online BMI and Health System",
      date: "October 2024",
      description: "I Developed a website using JSP and make the online BMI calculator using the parameters as height and weight. In that we make the suggestions and a mini timetable and health resources also.",
      team: "Individual project with faculty mentorship",
      link: "https://github.com/gowtham-32112/Online_BMI_Checker-Consult",
      category: "Academic Projects",
      icon: <HeartPulse className="h-8 w-8" />
    },
    {
      title: "Online Student Work-Study Programs",
      date: "October 2024",
      description: "The Project Online system for Student work study program aims to create a platform to manage work-study opportunities, including job postings, student applications, and work performance tracking. The app should help students find and manage work-study positions while supporting program administration.",
      team: "Individual achievement",
      link: "https://github.com/gowtham-32112/Student_Study_Management",
      category: "Academic Projects",
      icon: <BookOpenText className="h-8 w-8" />
    },

    {
      title: "AI-Driven Traffic Accident Prediction and Prevention System",
      date: "October 2024",
      description: "AI-powered safe route recommendation system designed to optimize route selection for drivers while incorporating simulated risk detection. Leveraging the OpenRouteService (ORS) API, the system generates driving routes between selected cities, while simultaneously evaluating potential risk points along the route. To ensure accuracy in risk detection, the system uses a simulated ground truth mechanism and applies machine learning techniques to predict risk points. The risk assessment process incorporates random simulation and accuracy calculation, with the system providing real-time feedback on predicted and actual risk points.",
      team: "Individual achievement",
      link: "",
      category: "Publish",
      icon: <BusFront className="h-8 w-8" />
    },

    {
      title: "AI-Driven Traffic Accident Prediction and Prevention System",
      date: "March 2023",
      description: "AI-powered safe route recommendation system designed to optimize route selection for drivers while incorporating simulated risk detection. Leveraging the OpenRouteService (ORS) API, the system generates driving routes between selected cities, while simultaneously evaluating potential risk points along the route. To ensure accuracy in risk detection, the system uses a simulated ground truth mechanism and applies machine learning techniques to predict risk points. The risk assessment process incorporates random simulation and accuracy calculation, with the system providing real-time feedback on predicted and actual risk points.",
      team: "Individual achievement",
      link: "https://drive.google.com/drive/folders/1Shp-Q308KY4xROLGgi_9JKo04e7b6uvL?usp=sharing",
      category: "Innovation",
      icon: <BusFront className="h-8 w-8" />
    },
    
  ];

  const categories = [
    { name: "All", color: "bg-gray-100 text-gray-800" },
    { name: "Academic Projects", color: "bg-blue-100 text-blue-800" },
    { name: "Mini Projects", color: "bg-green-100 text-green-800" },
    { name: "Innovation", color: "bg-purple-100 text-purple-800" },
    { name: "Publish", color: "bg-yellow-100 text-yellow-800" },
  ];

  const [activeCategory, setActiveCategory] = React.useState("All");
  const [filteredAchievements, setFilteredAchievements] = React.useState(achievements);

  React.useEffect(() => {
    if (activeCategory === "All") {
      setFilteredAchievements(achievements);
    } else {
      setFilteredAchievements(achievements.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my notable Projects and recognition in the field of engineering.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.name 
                    ? `${category.color} shadow-md` 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-indigo-600"
            >
              <div className="p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="p-3 bg-indigo-100 text-indigo-600 rounded-full">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                      <h2 className="text-2xl font-bold text-gray-900">{achievement.title}</h2>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        categories.find(c => c.name === achievement.category)?.color
                      }`}>
                        {achievement.category}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-6 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-1 text-indigo-600" />
                        <span>{achievement.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 mr-1 text-indigo-600" />
                        <span>{achievement.team}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{achievement.description}</p>
                    
                    <a 
                      href={achievement.link}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      Check Details
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Total Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-sm">Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">1</div>
              <div className="text-sm">Publications</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">1</div>
              <div className="text-sm">Innovation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-sm">Hackathon Participated</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;