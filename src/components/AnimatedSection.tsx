import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in' | 'rotate-in';
  delay?: number;
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0 
}: AnimatedSectionProps) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClass} opacity-0 translate-y-12`;
        case 'fade-in':
          return `${baseClass} opacity-0`;
        case 'slide-left':
          return `${baseClass} opacity-0 -translate-x-12`;
        case 'slide-right':
          return `${baseClass} opacity-0 translate-x-12`;
        case 'zoom-in':
          return `${baseClass} opacity-0 scale-95`;
        case 'rotate-in':
          return `${baseClass} opacity-0 rotate-3 scale-95`;
        default:
          return `${baseClass} opacity-0 translate-y-12`;
      }
    }
    
    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
