import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, PanelsTopLeft, BookOpen, Code, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Ratcha Gowtham Kumar
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Passionate engineering student with a focus on creating impactful solutions through technology and design.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/ResumePage"
                  className="bg-white text-indigo-900 px-6 py-3 rounded-md font-medium flex items-center hover:bg-blue-50 transition-colors"
                >
                  View Resume <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/achievements"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium flex items-center hover:bg-white/10 transition-colors"
                >
                  See Projects & more.. <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:block"
            >
              <img
                src="/my.png"
                alt="Profile"
                className="scale-125 -mb-28 drop-shadow-2xl object-contain transition-all duration-500"
                style={{
                  borderRadius: '20px',
                  maxHeight: '700px',
                  transform: 'translateY(-88px)',
                }}
              />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Portfolio Sections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Education', icon: <GraduationCap className="h-10 w-10" />, path: '/education', color: 'bg-blue-100 text-blue-600' },
              { title: 'Projects', icon: <PanelsTopLeft className="h-10 w-10" />, path: '/achievements', color: 'bg-green-100 text-green-600' },
              { title: 'Certifications', icon: <BookOpen className="h-10 w-10" />, path: '/certifications', color: 'bg-purple-100 text-purple-600' },
              { title: 'Skills', icon: <Code className="h-10 w-10" />, path: '/skills', color: 'bg-orange-100 text-orange-600' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={item.path} className="block">
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                    <div className={`${item.color} p-4 rounded-full inline-block mb-4`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mb-4">Explore my {item.title.toLowerCase()} journey and qualifications.</p>
                    <div className="flex items-center text-indigo-600 font-medium">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">About Me</h2>
              <p className="text-gray-600 mb-4">
                I am a dedicated engineering student passionate about solving complex problems and creating innovative solutions. With a strong foundation in both theoretical knowledge and practical applications, I strive to make a positive impact through my work.
              </p>
              <p className="text-gray-600 mb-6">
                My journey in engineering has been marked by continuous learning, collaboration with diverse teams, and a commitment to excellence in every project I undertake.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-indigo-600">4+</h4>
                  <p className="text-gray-600">Years of Study</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-indigo-600">5+</h4>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-indigo-600">3+</h4>
                  <p className="text-gray-600">Certifications</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-indigo-600">3+</h4>
                  <p className="text-gray-600">Internships</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Engineering Student"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Collaboration?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <Link to="/ContactUs">
          <button className="bg-white text-indigo-700 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
            Get In Touch
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;