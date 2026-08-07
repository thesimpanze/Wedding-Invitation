"use client";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

type Props = {};

const Intro = (props: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className="h-[400vh] w-full">
      <div className="w-full h-screen fixed -z-10">
        <div ref={ref} className="h-[300vh] w-full relative">
          <div className="sticky top-0 w-full h-screen flex justify-center items-center overflow-hidden">
            <motion.div
              style={{ scale }}
              className="bg-white h-[90rem] w-[90rem] rounded-[50%] flex-none flex justify-center items-center"
            >
              <span className="text-xl font-grotesk text-black">
                Meet the couple
              </span>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-screen w-full"></div>
      <div className="h-screen w-full"></div>
      <div className="h-screen w-full"></div>
      <div className="w-full h-screen bg-[url('/assets/bg.jpeg')] flex flex-col justify-center items-center gap-3">
        <div className="w-[190px] h-[190px] bg-black rounded-full"></div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-semibold font-playfair ">
            Rasyid Nuruddin
          </span>
          <span className="text-lg">Bin</span>
          <span className="text-lg font-playfair">Rasyid</span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
