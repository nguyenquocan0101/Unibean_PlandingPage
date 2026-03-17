"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CaretRight } from "@phosphor-icons/react";

const TypewriterWords = ["tự động hóa", "tối đa hiệu suất", "cộng đồng số", "thông minh"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % TypewriterWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] pt-32 pb-24 flex items-center bg-zinc-50 overflow-hidden" id="intro">
      <div className="mx-auto w-full max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Split typography */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="flex flex-col gap-8 relative z-20 pb-16 lg:pb-0"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
            </span>
            Kích hoạt phiên bản 2.0
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] text-zinc-900"
          >
            Chào mừng bạn đến với <span className="text-emerald-500">UNIBEAN</span> <br />
            <span className="text-emerald-600 inline-flex min-w-[200px]">
               {/* Primitive typing loop text via Framer Motion key */}
               <motion.span
                 key={wordIndex}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ type: "spring", stiffness: 100, damping: 20 }}
               >
                 {TypewriterWords[wordIndex]}_
               </motion.span>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-lg leading-relaxed text-zinc-600 lg:max-w-md"
          >
            Khung làm việc thông minh tự động hóa quy trình, tối đa hóa hiệu suất và liên kết hệ sinh thái STEM qua cơ chế tích lũy tài sản số.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
          >
            <motion.a 
              href="#tester"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex h-14 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-8 text-[15px] font-bold text-white shadow-lg shadow-emerald-600/20 transition-colors hover:bg-emerald-700"
            >
              Trải nghiệm hệ thống
              <CaretRight weight="bold" className="text-lg transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a 
              href="#how-it-works"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex h-14 items-center justify-center rounded-xl border-2 border-zinc-200 px-10 text-[15px] font-semibold text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-100"
            >
              Tìm hiểu thêm
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side: Floating Asset with Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:h-[700px] w-full flex items-center justify-end lg:-mb-32 z-30"
        >
          {/* Main Dashboard Image Glass Box */}
          <motion.div 
            animate={{ y: [-5, 5] }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 4, ease: "easeInOut" }}
            className="relative w-full max-w-[800px] aspect-[16/10] lg:aspect-[4/3] rounded-[2.5rem] bg-white border border-zinc-200 shadow-[var(--shadow-diffusion)] z-10 flex items-center justify-center p-2 transform rotate-1"
          >
            <div className="w-full h-full rounded-[2rem] overflow-hidden bg-zinc-50 relative border border-zinc-100">
               {/* We assume images exist in /public/assets/images since we moved them */}
               <img src="/assets/images/hero_main_dashboard.png" alt="UNIBEAN Dashboard Outline" className="w-full h-full object-cover object-left-top" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ y: [5, -5] }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-10 left-0 lg:left-10 w-48 h-64 rounded-[2.5rem] bg-zinc-950 shadow-[var(--shadow-liquid-glass),var(--shadow-diffusion)] p-2 z-20 border border-zinc-800"
          >
            <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
              <img src="/assets/images/hero_mobile_app.png" alt="UNIBEAN Mobile App" className="h-full w-full object-cover opacity-90" />
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-black rounded-full shadow-inner border border-zinc-800"></div>
            </div>
          </motion.div>
        </motion.div>

      </div>
      
      {/* Background Mesh Gradients */}
      <div className="absolute -top-[20%] right-[10%] w-[50vw] h-[50vw] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10 translate-y-1/2 -translate-x-1/4" />
    </section>
  );
}
