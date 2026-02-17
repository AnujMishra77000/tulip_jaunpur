import React from 'react';
import { useParallax } from '../hooks/useScrollAnimation';

export default function FloatingElements() {
  const offset = useParallax();

  const elements = [
    { icon: '🫀', size: 'text-4xl', x: 10, y: 20, speed: 0.5 },
    { icon: '🫘', size: 'text-3xl', x: 85, y: 15, speed: 0.3 },
    { icon: '🩺', size: 'text-5xl', x: 15, y: 70, speed: 0.7 },
    { icon: '💊', size: 'text-2xl', x: 90, y: 80, speed: 0.4 },
    { icon: '🏥', size: 'text-6xl', x: 50, y: 10, speed: 0.6 },
    { icon: '⚕️', size: 'text-3xl', x: 75, y: 60, speed: 0.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.size} text-red-100/10 animate-float`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            transform: `translateY(${offset * element.speed}px)`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${4 + index}s`,
          }}
        >
          {element.icon}
        </div>
      ))}
    </div>
  );
}
