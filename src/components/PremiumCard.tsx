import React from 'react';
import { useMousePosition } from '../hooks/useScrollAnimation';

interface PremiumCardProps {
  children: React.ReactNode;
  className?: string;
  glowEffect?: boolean;
  tiltEffect?: boolean;
}

export default function PremiumCard({ 
  children, 
  className = '', 
  glowEffect = false,
  tiltEffect = false 
}: PremiumCardProps) {
  const mousePosition = useMousePosition();
  const [isHovered, setIsHovered] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!tiltEffect || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  };

  return (
    <div
      ref={cardRef}
      className={`
        relative overflow-hidden transition-all duration-500 ease-out
        ${glowEffect ? 'hover:shadow-2xl hover:shadow-red-500/20' : ''}
        ${tiltEffect ? 'transform-gpu' : ''}
        ${className}
      `}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient overlay for premium effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-inherit">
        <div className="absolute inset-0 rounded-inherit bg-gradient-to-r from-red-500/20 via-pink-500/20 to-red-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      {children}
      
      {/* Shine effect */}
      <div className={`
        absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent
        transition-transform duration-1000 ease-out
        ${isHovered ? 'translate-x-full' : ''}
      `} />
    </div>
  );
}
