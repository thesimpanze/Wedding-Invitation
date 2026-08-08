"use client";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import ShinyText from "./ShinyText";

type Props = {};

const Intro = (props: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className="w-full relative">
      <div className="w-full h-screen fixed top-0 left-0 -z-10">
        <div className="w-full h-screen flex justify-center items-center overflow-hidden">
          <motion.div
            style={{ scale }}
            className="bg-white h-[90rem] w-[90rem] rounded-[50%] flex-none flex flex-col justify-center items-center"
          >
            <span className="text-6xl font-grotesk text-black font-bold">
              <ShinyText text="Meet" color="#000000" shineColor="#525252" />
            </span>
            <span className="text-4xl font-grotesk text-black">The</span>
            <span className="text-6xl font-grotesk text-black font-bold">
              <ShinyText text="Couple" color="#000000" shineColor="#525252" />
            </span>
          </motion.div>
        </div>
      </div>
      <div ref={ref} className="h-[300vh] w-full"></div>
      <div className="w-full relative">
        <div className="w-full h-screen bg-[url('/assets/bg.jpeg')] flex flex-col justify-center items-center gap-3 sticky top-0 -z-10">
        <h1 className="font-playfair text-4xl">Bride</h1>
          <div className="w-[190px] h-[190px] bg-black rounded-full"></div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-semibold font-playfair ">
              <ShinyText
                text="Rasyid Nuruddin"
                color="#000000"
                shineColor="#525252"
              />
            </span>
            <span className="text-lg">Bin</span>
            <span className="text-lg font-playfair">Rasyid</span>
          </div>
        </div>
        <div className="w-full h-screen bg-[url('/assets/bg.jpeg')] flex flex-col justify-center items-center gap-3">
        <h1 className="font-playfair text-4xl">Groom</h1>
          <div className="w-[190px] h-[190px] bg-black rounded-full"></div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-semibold font-playfair ">
              <ShinyText
                text="Rasyid Nuruddin"
                color="#000000"
                shineColor="#525252"
              />
            </span>
            <span className="text-lg">Binti</span>
            <span className="text-lg font-playfair">Rasyid</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
