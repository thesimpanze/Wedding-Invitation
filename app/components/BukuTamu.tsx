"use client";
import React, { useState } from 'react'
import AnimatedList from './AnimatedList';

type GuestEntry = {
  id: string;
  name: string;
  message: string;
  attendance: 'hadir' | 'tidak';
  count: number;
  date: string;
};

const initialDummyData: GuestEntry[] = [
  {
    id: '1',
    name: 'Budi & Keluarga',
    message: 'Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Bahagia selalu ya!',
    attendance: 'hadir',
    count: 2,
    date: '12 Ags 2026',
  },
  {
    id: '2',
    name: 'Siti Aminah',
    message: 'Mohon maaf belum bisa hadir karena sedang di luar kota. Doa terbaik untuk kalian berdua, lancar sampai hari H!',
    attendance: 'tidak',
    count: 0,
    date: '13 Ags 2026',
  },
  {
    id: '3',
    name: 'Andi Pratama',
    message: 'Happy wedding! Congrats buat kalian berdua.',
    attendance: 'hadir',
    count: 1,
    date: '14 Ags 2026',
  }
];

const BukuTamu = () => {
  const [entries, setEntries] = useState<GuestEntry[]>(initialDummyData);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [attendance, setAttendance] = useState<'hadir' | 'tidak'>('hadir');
  const [count, setCount] = useState('1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newEntry: GuestEntry = {
      id: Date.now().toString(),
      name,
      message,
      attendance,
      count: attendance === 'hadir' ? parseInt(count) : 0,
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
    };

    setEntries([newEntry, ...entries]);
    setName('');
    setMessage('');
    setAttendance('hadir');
    setCount('1');
  };

  return (
    <div className="w-full bg-[url('/assets/bg.jpeg')] py-24 flex flex-col items-center justify-center  text-zinc-800">
      <div className="max-w-4xl w-full px-6 flex flex-col items-center gap-16">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold tracking-wide font-playfair">
            Buku Tamu
          </h2>
          <p className="text-lg  tracking-widest uppercase font-playfair">
            Kirim Doa & Ucapan
          </p>
        </div>
        <div className="w-full bg-white p-8 md:p-12  font-grotesk">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-zinc-700 font-semibold font-grotesk">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama Anda"
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-800 transition-all bg-zinc-50 font-grotesk"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-zinc-700 font-semibold">
                Ucapan & Doa
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tuliskan ucapan dan doa untuk kedua mempelai"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-800 transition-all bg-zinc-50 resize-none"
                required
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-zinc-700 font-semibold">
                  Konfirmasi Kehadiran
                </label>
                <div className="flex items-center gap-6 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="attendance"
                      value="hadir"
                      checked={attendance === "hadir"}
                      onChange={() => setAttendance("hadir")}
                      className="w-5 h-5 accent-zinc-800 cursor-pointer"
                    />
                    <span>Hadir</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="attendance"
                      value="tidak"
                      checked={attendance === "tidak"}
                      onChange={() => setAttendance("tidak")}
                      className="w-5 h-5 accent-zinc-800 cursor-pointer"
                    />
                    <span>Tidak Hadir</span>
                  </label>
                </div>
              </div>

              {attendance === "hadir" && (
                <div className="flex flex-col gap-2 transition-all duration-300">
                  <label
                    htmlFor="count"
                    className="text-zinc-700 font-semibold"
                  >
                    Jumlah Hadir
                  </label>
                  <select
                    id="count"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-800 transition-all bg-zinc-50 appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} Orang
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="mt-4 w-full md:w-auto md:self-end px-10 py-4 bg-zinc-800 text-white font-grotesk tracking-wide rounded-full "
            >
              Kirim Ucapan
            </button>
          </form>
        </div>

        <div className="w-full mt-4 space-y-6">
          <h3 className="text-3xl font-bold font-playfair mb-8 text-center">
            Daftar Ucapan
          </h3>

          <div className="font-grotesk flex justify-center w-full">
            <AnimatedList
              items={entries.map((entry) => (
                <div
                  key={entry.id}
                  className="bg-white p-6  flex flex-col gap-3 w-full"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-bold text-lg text-zinc-800">
                        {entry.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-zinc-500">
                          {entry.date}
                        </span>
                        <span className="text-xs text-zinc-300">•</span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded font-semibold `}
                        >
                          {entry.attendance === "hadir"
                            ? `Hadir (${entry.count} org)`
                            : "Tidak Hadir"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-zinc-600 leading-relaxed bg-zinc-50 p-4 rounded-xl italic">
                    "{entry.message}"
                  </div>
                </div>
              ))}
              className="!w-full"
              showGradients={false}
              displayScrollbar={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BukuTamu