import React from "react";

interface CircularTextProps {
  text: string;
  size?: number; // Ukuran keseluruhan SVG
  radius?: number; // Jari-jari lingkaran
  progress?: number; // Persentase dari 0-100 untuk efek loading
}

export default function CircularText({
  text,
  size = 200,
  radius = 80,
  progress = 100,
}: CircularTextProps) {
  return (
    <div
      className="relative flex items-center justify-center rounded-full"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]" // Tambahkan animasi berputar dengan Tailwind
      >
        <defs>
          <mask id="loading-mask">
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke="white"
              strokeWidth={40}
              strokeDasharray={radius * 2 * Math.PI}
              strokeDashoffset={radius * 2 * Math.PI * (1 - Math.max(0, Math.min(100, progress)) / 100)}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
              className="transition-all duration-300 ease-linear"
            />
          </mask>
        </defs>
        <path
          id="circlePath"
          fill="transparent"
          // M = Move to (x, y), a = arc to (rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, dx, dy)
          d={`
            M ${size / 2}, ${size / 2 - radius}
            a ${radius},${radius} 0 1,1 0,${radius * 2}
            a ${radius},${radius} 0 1,1 0,-${radius * 2}
          `}
        />
        <text 
          className="fill-current text-sm tracking-widest uppercase text-white font-playfair"
          mask="url(#loading-mask)"
        >
          <textPath 
            href="#circlePath" 
            startOffset="0%"
            textLength={radius * 2 * Math.PI}
          >
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
