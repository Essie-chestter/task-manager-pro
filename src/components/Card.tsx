
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, className, hover = false, style }) => {
  return (
    <div
      className={cn(
        'bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-200',
        hover && 'hover:shadow-lg hover:scale-[1.02]',
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
