"use client";

import { motion } from "framer-motion";
import { CaretRight } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] pt-32 pb-24 flex items-center bg-zinc-50 overflow-hidden"
      id="intro"
    >
      <div className="mx-auto w-full max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Split typography */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="flex flex-col gap-10 relative z-20 pb-16 lg:pb-0 text-left items-start"
        >
          <div className="flex flex-col gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-none text-[#89e219] drop-shadow-sm select-none"
            >
              Unibean
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-bold text-zinc-900 max-w-md leading-relaxed"
            >
              Tham gia sự kiện, tích Bean, đổi quà.
              <br className="hidden md:block" />
              Càng tham gia, quà càng đã.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
          >
            <motion.a
              href="#tester"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#58cc02] px-10 text-base font-bold text-white shadow-xl shadow-[#89e219]/20 transition-all hover:bg-[#4fb802] hover:shadow-[#89e219]/40"
            >
              Trải nghiệm ngay
              <CaretRight
                weight="bold"
                className="text-lg transition-transform group-hover:translate-x-1"
              />
            </motion.a>
            <motion.a
              href="#how-it-works"
              whileHover={{
                y: -4,
                scale: 1.02,
                backgroundColor: "rgba(244, 244, 245, 1)",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex h-14 items-center justify-center rounded-2xl border-2 border-zinc-200 px-10 text-base font-bold text-zinc-700 transition-all hover:border-zinc-300"
            >
              Cách thức hoạt động
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side: Floating Asset with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:h-[600px] w-full flex items-center justify-center lg:justify-center z-30"
        >
          {/* Main Mobile App Container */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ y: [10, -10] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 5,
              ease: "easeInOut",
            }}
            className="w-[280px] h-[580px] rounded-[3rem] bg-zinc-950 shadow-[var(--shadow-liquid-glass),0_30px_60px_-15px_rgba(0,0,0,0.3)] p-3 z-20 border border-zinc-800 relative"
          >
            <div className="w-full h-full rounded-[2.2rem] overflow-hidden relative bg-zinc-900">
              <img
                src="/assets/images/hero_mobile_app.png"
                alt="UNIBEAN Mobile App"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full shadow-inner border border-zinc-800 z-10"></div>
            </div>

            <div className="absolute inset-0 rounded-[3rem] pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-50"></div>

            {/* Floating Bean */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" },
              }}
              className="absolute -top-8 -right-10 z-40 w-24 h-24 pointer-events-none lg:block hidden"
            >
              <img
                src="/assets/images/unibean_coin.png"
                alt="Bean"
                className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(52,211,153,0.3)]"
              />
            </motion.div>

            {/* Reward Badge */}
            <motion.div
              animate={{
                y: [5, -5, 5],
              }}
              transition={{
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
              }}
              className="absolute -bottom-6 -left-12 z-40 bg-white/95 backdrop-blur-xl border border-[#89e219]/20 rounded-[2rem] p-6 shadow-[var(--shadow-liquid-glass),0_25px_50px_-12px_rgba(0,0,0,0.1)] flex flex-col items-start min-w-[210px]"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#89e219] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#58cc02]"></span>
                </div>
                <span className="text-[10px] font-bold text-[#58cc02] uppercase tracking-[0.2em]">
                  Hệ thống Unibean
                </span>
              </div>
              <p className="text-[15px] font-medium text-zinc-500 mb-0.5">
                Hoàn thành nhiệm vụ
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-black text-[#58cc02] text-4xl tracking-tighter">
                  +10
                </span>
                <span className="font-black text-[#4fb802] text-xl tracking-tight uppercase">
                  bean
                </span>
              </div>
              <div className="mt-4 w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "30%" }}
                  animate={{ width: "100%" }}
                  transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                  className="h-full bg-[#58cc02]"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Mesh Gradients */}
      <div className="absolute -top-[20%] right-[10%] w-[50vw] h-[50vw] bg-[#58cc02]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10 translate-y-1/2 -translate-x-1/4" />
    </section>
  );
}
