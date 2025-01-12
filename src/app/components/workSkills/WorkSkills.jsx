
"use client"; 
import React, { useEffect, useRef, useState } from 'react';

export default function WorkSkills({ percentage, label, color }) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  const [isInView, setIsInView] = useState(false);
  const [displayedPercentage, setDisplayedPercentage] = useState(0);
  const circleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 } 
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setDisplayedPercentage((prev) => {
          if (prev >= percentage) {
            clearInterval(interval);
            return percentage;
          }
          return prev + 1; 
        });
      }, 30); 
    }
  }, [isInView, percentage]);

  const circleStyle = {
    stroke: `url(#${color})`,
  };

  return (
    <div
      ref={circleRef}
      className="flex flex-col items-center"
      style={{ marginTop: '40px' }}
    >
      <svg style={{ height: '200px', width: '200px' }} viewBox="0 0 100 100">
        <defs>
          <linearGradient id="red" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#44C488', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2563EB', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="purple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#44C488', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2563EB', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#44C488', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2563EB', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="#e5e7eb"
          strokeWidth="7"
        />

        
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          strokeWidth="7"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (displayedPercentage / 100) * circumference}
          strokeLinecap="round"
          style={circleStyle}
          transform="rotate(-90 50 50)" // Rotates the circle to start at the top
        />

      
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="text-2xl font-semibold"
          fill="#333"
        >
          {displayedPercentage}%
        </text>
      </svg>

      <p
        className="mt-2 text-center text-gray-700 text-lg"
        style={{ fontSize: '20px', fontWeight: '700', maxWidth: '250px' }}
      >
        {label}
      </p>
    </div>
  );
}
