import React from "react";

type Props = {};

const Locate = (props: Props) => {
  return (
    <div className="w-full bg-[url('/assets/bg.jpeg')] py-24 flex flex-col items-center justify-center font-playfair text-zinc-800">
      <div className="max-w-6xl w-full px-6 md:px-10 flex flex-col items-center gap-16">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold tracking-wide">
            Lokasi
          </h2>
          <p className="font-grotesk text-lg text-zinc-600 tracking-widest uppercase">
            Resepsi Pernikahan
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row bg-white overflow-hidden ">
          <div className="flex-1 p-10 md:p-14 flex flex-col justify-center items-center text-center gap-8 bg-white">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-zinc-800">Tanggal</h3>
              <p className="font-grotesk text-lg text-zinc-600">
                Sabtu, 31 Desember 2026
              </p>
            </div>

            <div className="w-16 h-[1px] bg-zinc-200"></div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-zinc-800">Waktu</h3>
              <p className="font-grotesk text-lg text-zinc-600">
                08:00 WIB - Selesai
              </p>
            </div>

            <div className="w-16 h-[1px] bg-zinc-200"></div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-zinc-800">Tempat</h3>
              <p className="font-grotesk text-lg text-zinc-600 leading-relaxed">
                Masjid Al-Akbar
                <br />
                Jl. Masjid Al-AkbarTimur No.1, Surabaya
              </p>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-10 py-4 bg-zinc-800 text-white font-grotesk tracking-wide rounded-full "
            >
              Buka Google Maps
            </a>
          </div>

          <div className="flex-1 w-full h-[450px] lg:h-auto relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.155929815314!2d112.71254337357342!3d-7.33637929267211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fba9cfb6dfab%3A0x6fe7210ef241206!2sMasjid%20Nasional%20Al-Akbar%20Surabaya!5e0!3m2!1sid!2sid!4v1786202581229!5m2!1sid!2sid"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              title="Lokasi Pernikahan"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locate;
