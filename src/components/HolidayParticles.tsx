import React, { useEffect, useState } from 'react';
import { HolidayTheme } from '../utils/holidays';

interface Particle {
  id: number;
  emoji: string;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  rotation: number;
  scale: number;
  floatOffset: number;
}

interface HolidayParticlesProps {
  theme: HolidayTheme;
}

export default function HolidayParticles({ theme }: HolidayParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);

  useEffect(() => {
    const newParticles: Particle[] = [];
    const reducedCount = Math.floor(theme.particles.count * 0.4);

    for (let i = 0; i < reducedCount; i++) {
      const baseX = Math.random() * 100;
      const baseY = Math.random() * 100;
      newParticles.push({
        id: i,
        emoji: theme.particles.items[Math.floor(Math.random() * theme.particles.items.length)],
        x: baseX,
        y: baseY,
        baseX,
        baseY,
        rotation: Math.random() * 360,
        scale: 0.4 + Math.random() * 0.6,
        floatOffset: Math.random() * Math.PI * 2
      });
    }

    setParticles(newParticles);
  }, [theme]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setMousePosition({
          x: (touch.clientX / window.innerWidth) * 2 - 1,
          y: (touch.clientY / window.innerHeight) * 2 - 1
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.01);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle, index) => {
        const floatY = Math.sin(time + particle.floatOffset) * 15;
        const floatX = Math.cos(time + particle.floatOffset) * 10;

        const mouseInfluence = 20;
        const distanceFromCenter = Math.sqrt(
          Math.pow(particle.baseX - 50, 2) + Math.pow(particle.baseY - 50, 2)
        );
        const influenceFactor = Math.max(0, 1 - distanceFromCenter / 100);

        const mouseOffsetX = mousePosition.x * mouseInfluence * influenceFactor;
        const mouseOffsetY = mousePosition.y * mouseInfluence * influenceFactor;

        return (
          <div
            key={particle.id}
            className="absolute transition-all duration-1000 ease-out"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              transform: `translate(${floatX + mouseOffsetX}px, ${floatY + mouseOffsetY}px) rotate(${particle.rotation}deg) scale(${particle.scale})`,
              fontSize: '1.5rem',
              opacity: 0.3,
              filter: 'blur(0.5px)'
            }}
          >
            {particle.emoji}
          </div>
        );
      })}
    </div>
  );
}
