import React from 'react';
import { CircleSlash, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Gowtham's Engineering Portfolio</h3>
            <p className="text-gray-400 mt-1">Building the future through innovation</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/gowtham-32112" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/gowtham-kumar-ratcha-863771285/" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://www.stopstalk.com/user/profile/Gowtham_2005" className="text-gray-400 hover:text-white transition-colors duration-200">
              <CircleSlash size={20} absoluteStrokeWidth className="h-6 w-6" />
            </a>
            <a href="mailto:gowthamratchajob@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        </div>
    </footer>
  );
};

export default Footer;