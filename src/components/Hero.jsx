import React, { useState, useEffect } from "react";
import logo from "./logo.png";

const FKodeCountdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-06-13T13:30:00+05:30") - +new Date();
    let timeLeft = { days: "00", hours: "00", minutes: "00", seconds: "00" };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-screen bg-[#000000] text-white flex flex-col items-center justify-between py-6 px-4 overflow-hidden font-sans select-none">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-950 via-[#020202] to-[#000000] pointer-events-none" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[750px] h-[400px] sm:h-[750px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-amber-500/[0.06] via-amber-600/[0.01] to-transparent blur-3xl rounded-full pointer-events-none" />
      
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-screen" 
        style={{ backgroundImage: 'radial-gradient(rgba(218,165,32,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }} 
      />

      <div className="w-full max-w-7xl mx-auto flex justify-between items-center z-10 border-b border-amber-500/[0.05] pb-3 shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse shadow-[0_0_8px_#f5d074]" />
          
        </div>
        
      </div>

      <div className="flex flex-col items-center text-center max-w-5xl mx-auto z-10 justify-center gap-6 sm:gap-10 my-auto w-full py-2 flex-1">
        
        <div className="flex flex-col items-center space-y-3 group shrink-0">
          <div className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-44 md:h-44 flex items-center justify-center bg-gradient-to-b from-neutral-900 to-black border-2 border-amber-500/30 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] transition-all duration-700 p-5 sm:p-6">
            
            <div className="absolute inset-[-4px] rounded-[28px] border border-transparent border-t-amber-500/40 border-b-amber-600/40 animate-[spin_8s_linear_infinite] pointer-events-none" />
            
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/20 to-transparent opacity-70 blur-md rounded-3xl" />
            
            <img 
              src={logo} 
              alt="FKODE Premium Logo" 
              className="w-full h-full object-cover relative z-10 filter drop-shadow-[0_4px_15px_rgba(245,208,116,0.35)] transition-transform duration-700 group-hover:scale-105" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            
            <span className="hidden font-mono text-6xl font-black bg-clip-text text-transparent bg-gradient-to-b from-[#F5D074] via-[#C99E47] to-[#966C24]">F</span>
          </div>
          
          <div className="font-mono text-xs sm:text-base font-black uppercase tracking-[0.6em] text-amber-400 pl-[0.6em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            FKODE
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3 max-w-4xl shrink-0">
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-600 leading-none filter drop-shadow-md">
           REIMAGINED
          </h1>
          <p className="text-[10px] sm:text-xs md:text-sm font-mono font-black text-amber-500 uppercase tracking-[0.35em] block">
Launching Soon          </p>
        </div>

        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent relative shrink-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full shadow-[0_0_12px_#F5D074]" />
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 w-full max-w-4xl px-2 sm:px-4">
          {[
            { label: "DAYS", value: timeLeft.days },
            { label: "HOURS", value: timeLeft.hours },
            { label: "MINUTES", value: timeLeft.minutes },
            { label: "SECONDS", value: timeLeft.seconds }
          ].map((block) => (
            <div 
              key={block.label} 
              className="relative bg-gradient-to-b from-neutral-900/60 to-black/80 border-2 border-neutral-800/80 hover:border-amber-500/40 rounded-xl sm:rounded-2xl p-2.5 sm:p-6 md:p-8 flex flex-col items-center justify-center transition-all duration-500 group shadow-[0_30px_70px_rgba(0,0,0,0.8)]"
            >
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
              
              <span className="text-xl sm:text-5xl md:text-6xl font-black font-mono tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#FFF0CC] via-[#D8AB55] to-[#966C24] drop-shadow-[0_4px_15px_rgba(218,171,85,0.2)]">
                {block.value}
              </span>
              
              <span className="font-mono text-[8px] sm:text-[10px] font-black tracking-[0.3em] text-neutral-400 mt-2 group-hover:text-amber-400 transition-colors">
                {block.label}
              </span>
            </div>
          ))}
        </div>

      </div>

      <div className="w-full flex flex-col items-center relative shrink-0 pt-2">
        
        <div className="absolute bottom-10 w-[150%] md:w-[120%] h-[1px] bg-gradient-to-r from-transparent via-[#F5D074] to-transparent opacity-80 blur-[0.1px]" />
        <div className="absolute bottom-10 w-[100%] md:w-[60%] h-12 bg-gradient-to-t from-transparent via-amber-500/[0.06] to-transparent blur-3xl rounded-full animate-pulse" />

        <div className="flex items-center gap-3 font-mono text-[9px] sm:text-xs font-black tracking-[0.3em] text-neutral-400 uppercase pt-2 bg-[#000000] w-full justify-center relative z-10">
          <span className="text-amber-400 font-black">13 JUNE 2026</span>
          <span className="text-neutral-800">|</span>
          <span className="text-neutral-200">JOIN THE EXPERIENCE</span>
        </div>
      </div>

    </section>
  );
};

export default FKodeCountdown;