
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun, CheckSquare } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <CheckSquare className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              TaskManager Pro
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Tasks
            </Link>
            <Link
              to="/posts"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/posts') 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Posts
            </Link>
          </div>

          <Button
            variant="secondary"
            size="sm"
            onClick={toggleTheme}
            className="p-2"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
