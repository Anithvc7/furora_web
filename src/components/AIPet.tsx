import { useState, useEffect } from 'react';

interface AIPetProps {
  type?: 'dog' | 'cat' | 'rabbit' | 'bird';
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  className?: string;
}

export default function AIPet({
  type = 'dog',
  size = 'md',
  interactive = true,
  className = '',
}: AIPetProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [tailWag, setTailWag] = useState(false);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const tailInterval = setInterval(() => {
      setTailWag((prev) => !prev);
    }, 400);
    return () => clearInterval(tailInterval);
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 150);
    }, 3500);
    return () => clearInterval(blinkInterval);
  }, []);

  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
  };

  const petEmojis = {
    dog: '🐕',
    cat: '🐱',
    rabbit: '🐰',
    bird: '🦅',
  };

  return (
    <div
      className={`${sizeClasses[size]} relative cursor-pointer select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        <div
          className={`w-full h-full flex items-center justify-center text-4xl md:text-6xl lg:text-8xl transition-all duration-300 ${
            isHovered ? 'scale-110 animate-bounce-slow' : 'scale-100'
          } ${blink ? 'opacity-50' : 'opacity-100'}`}
          style={{
            filter: isHovered ? 'drop-shadow(0 0 20px rgba(251, 113, 133, 0.6))' : 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))',
            transform: isHovered
              ? `translateY(-8px) rotateZ(${tailWag ? 5 : -5}deg)`
              : `translateY(0) rotateZ(0deg)`,
          }}
        >
          {petEmojis[type]}
        </div>

        {interactive && isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-rose-400/30 to-orange-400/30 animate-ping" />
            <div className="absolute w-3/4 h-3/4 rounded-full bg-gradient-to-r from-rose-400/20 to-orange-400/20 animate-pulse" />
          </div>
        )}

        {isHovered && interactive && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 whitespace-nowrap shadow-lg animate-fade-in">
            Click to interact!
          </div>
        )}

        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-rose-300 opacity-60"
              style={{
                animation: isHovered ? `bounce 0.6s ease-in-out ${i * 0.1}s infinite` : 'none',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
