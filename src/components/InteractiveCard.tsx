import { ReactNode, useState } from 'react';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function InteractiveCard({
  children,
  className = '',
  delay = 0,
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative transition-all duration-500 ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        transform: isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-rose-400/20 to-orange-400/20 rounded-3xl opacity-0 transition-opacity duration-300 blur-xl" style={{ opacity: isHovered ? 1 : 0 }} />
      <div className="relative bg-white rounded-3xl backdrop-blur-sm border border-white/60 shadow-lg transition-all duration-300" style={{ boxShadow: isHovered ? '0 20px 40px rgba(251, 113, 133, 0.15)' : '0 10px 20px rgba(0, 0, 0, 0.08)' }}>
        {children}
      </div>
    </div>
  );
}
