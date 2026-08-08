"use client";

import React, { useState, useEffect } from "react";
import CircularText from "./circularText";

type Props = {
  onComplete?: () => void;
};

const Preloader = ({ onComplete }: Props) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            if (onComplete) onComplete();
          }, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black flex justify-center items-center transition-opacity duration-1000 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 flex justify-center items-center">
        {/* Circular text yang terus berputar */}
        <CircularText text="wedding of testing & testing * " progress={progress} />
      </div>
      
      <div className="flex flex-col items-center z-10 text-white">
        <h1 className="font-playfair text-8xl tracking-tighter">RA</h1>
      </div>
    </div>
  );
};

export default Preloader;
