"use client";

import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Preloader from "./components/preloader";
import Lenis from "lenis";
import Date from "./components/Date";
import Locate from "./components/Locate";
import BukuTamu from "./components/BukuTamu";

export default function Home() {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen ">
      <Preloader onComplete={() => setIsPreloaderDone(true)} />
      <div className="fixed w-full top-0 -z-10">
        <Hero isReady={isPreloaderDone} />
      </div>
      <div className="">

      </div>
      <Intro />
      <Date/>
      <Locate/>
      <BukuTamu/>
    </div>
  );
}
