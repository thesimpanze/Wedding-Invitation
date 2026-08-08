"use client";
import React, { useState, useEffect } from 'react';

type Props = {}

const DateComponent = (props: Props) => {
  const targetDate = new Date("2026-12-31T08:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full bg-[url('/assets/bg.jpeg')] flex flex-col items-center justify-center py-20 font-playfair text-zinc-800">
      <h2 className="text-2xl mb-8 font-semibold">Menghitung Hari</h2>
      <div className="flex gap-9 flex-wrap text-center justify-center items-center">
        <div className="flex flex-col items-center justify-center  w-fit h-24 ">
          <span className="text-6xl md:text-8xl font-bold">{timeLeft.days}</span>
          <span className="text-sm font-medium">Hari</span>
        </div>
        <div className="flex flex-col items-center justify-center  w-fit h-24 ">
          <span className="text-6xl md:text-8xl font-bold">{timeLeft.hours}</span>
          <span className="text-sm font-medium">Jam</span>
        </div>
        <div className="flex flex-col items-center justify-center  w-fit h-24 ">
          <span className="text-6xl md:text-8xl font-bold">{timeLeft.minutes}</span>
          <span className="text-sm font-medium">Menit</span>
        </div>
        <div className="flex flex-col items-center justify-center  w-fit h-24 ">
          <span className="text-6xl md:text-8xl font-bold">{timeLeft.seconds}</span>
          <span className="text-sm font-medium">Detik</span>
        </div>
      </div>
    </div>
  )
}

export default DateComponent;