import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="h-screen w-full bg-[url('/assets/Foto1.webp')] bg-cover overflow-hidden bg-center bg-no-repeat flex justify-center items-center">
      <div className="flex flex-col items-center justify-center text-white">
        <span className="text-xl font-grotesk">the Wedding of</span>
        <span className="text-6xl font-playfair">Bride</span>
        <span className="text-2xl font-playfair">&</span>
        <span className="text-6xl font-playfair">Groom</span>
      </div>
    </div>
  );
}

export default Hero