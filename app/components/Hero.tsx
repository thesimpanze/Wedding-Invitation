import React from 'react'
import FoldText from './FoldText';

type Props = {
  isReady?: boolean;
}

const Hero = ({ isReady = true }: Props) => {
  return (
    <div className="h-screen w-full bg-[url('/assets/Foto1.webp')] bg-cover overflow-hidden bg-center bg-no-repeat flex justify-center items-center">
      <div className="flex flex-col items-center justify-center text-white">
        <span className="text-xl font-grotesk">the Wedding of</span>
        <FoldText text="Bride" isReady={isReady} duration={1.5} />
        <span className="text-2xl font-playfair">&</span>
        <FoldText text="Groom" isReady={isReady} duration={1.5} />
      </div>
    </div>
  );
}

export default Hero