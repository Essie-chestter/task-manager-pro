
import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">TaskManager Pro</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              A modern task management application built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-medium text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Tasks</a></li>
              <li><a href="/posts" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Posts</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-medium text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © 2024 TaskManager Pro. Made with <Heart className="inline h-4 w-4 text-red-500" /> for Week 3 Assignment.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 md:mt-0">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
