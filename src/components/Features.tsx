"use client";

import { motion } from "framer-motion";
import { QrCode, Path, HandCoins, UsersThree } from "@phosphor-icons/react";

const bentoItems = [
  {
    title: "Chiến Dịch Ở Đây - Nhiệm Vụ Ra Ngay",
    desc: "Tham gia các chiến dịch và hoàn thành nhiệm vụ để tích lũy BEAN.",
    wrapperClass: "md:mt-0",
    bg: "bg-zinc-50 border-zinc-200/50 hover:border-zinc-300",
    icon: <Path weight="duotone" className="text-4xl text-[#58cc02] mb-6" />,
    visual: (
      <div className="relative mt-12 -ml-4 mr-4 bg-white/40 border border-zinc-200/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 group-hover:scale-[1.02] z-10 aspect-[16/10]">
        <img
          src="/assets/images/feat_campaign_premium.png"
          alt="Campaign Dashboard"
          className="w-full h-full object-cover object-center opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />
      </div>
    ),
  },
  {
    title: "Quét QR Đi - Còn Chần Chờ Chi",
    desc: "Duy trì thói quen quét mã QR để hoàn thành các nhiệm vụ.",
    wrapperClass: "md:mt-0",
    bg: "bg-zinc-50 border-zinc-200/50 hover:border-zinc-300",
    icon: (
      <QrCode weight="duotone" className="text-4xl text-[#58cc02] mb-6" />
    ),
    visual: (
      <div className="flex justify-center mt-4 mb-2 overflow-visible">
        <motion.div 
          whileHover={{ scale: 1.12 }}
          className="relative w-full max-w-[450px] aspect-[4/3] rounded-[3rem] bg-white border border-zinc-200 p-1.5 shadow-2xl overflow-hidden group-hover:shadow-[#89e219]/40 transition-all duration-700"
        >
          <img 
            src="/assets/images/QR.jpg" 
            alt="QR Code" 
            className="w-full h-full object-cover rounded-[2.5rem]"
          />
          
          {/* Scanning line effect - Maximum prominence */}
          <motion.div
            animate={{ top: ["-10%", "110%", "-10%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute left-0 right-0 h-[6px] bg-[#58cc02] shadow-[0_0_35px_12px_rgba(88,204,2,1)] z-10"
          />
          
          {/* Enhanced depth overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/20 pointer-events-none" />
        </motion.div>
      </div>
    ),
  },
  {
    title: "BEAN Nằm Trong Ví - Đổi Quà Nhanh Đi",
    desc: "Cửa hàng quà tặng đa dạng. Đổi ngay BEAN tích lũy lấy các voucher và phần quà hấp dẫn.",
    wrapperClass: "md:mt-0",
    bg: "bg-white border-zinc-200/50 hover:border-zinc-300",
    icon: (
      <HandCoins weight="duotone" className="text-4xl text-[#58cc02] mb-6" />
    ),
    visual: (
      <div className="relative mt-10 h-32 w-full mask-linear-x overflow-hidden flex items-center">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="flex gap-4 w-max"
        >
          {[1, 2, 3, 4, 1, 2, 3, 4].map((item, idx) => (
            <div
              key={idx}
              className="w-48 h-24 rounded-2xl bg-zinc-50 border border-zinc-100 p-4 flex flex-col justify-between shadow-sm"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-[10px] text-emerald-700 font-bold">
                  GIF
                </span>
              </div>
              <div className="h-3 w-3/4 bg-zinc-200 rounded-full" />
              <div className="h-2 w-1/2 bg-zinc-100 rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
    ),
  },
  {
    title: "Tặng BEAN Trao Tay - Bạn Bè Thích Thú",
    desc: "Tính năng tặng điểm cho bạn bè, tăng tính kết nối và gắn kết giữa các người dùng.",
    wrapperClass: "md:mt-0",
    bg: "bg-white border-zinc-200/50 hover:border-zinc-300",
    icon: (
      <UsersThree weight="duotone" className="text-4xl text-[#58cc02] mb-6" />
    ),
    visual: (
      <div className="relative mt-2 h-72 w-full flex items-center justify-center">
        {/* Decorative background stage */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-50/50 to-transparent rounded-[2rem] -z-10" />
        
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="relative z-10 w-full h-full flex items-center justify-center p-4"
        >
          <img
            src="/assets/images/gift_bean_v2.png"
            alt="Gift Illustration"
            className="w-full h-full max-h-[280px] object-contain mix-blend-multiply filter drop-shadow-[0_20px_40px_rgba(88,204,2,0.15)] group-hover:scale-110 transition-transform duration-700"
          />
        </motion.div>
        
        {/* Accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#89e219]/10 rounded-full blur-[80px] opacity-70" />
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-32 bg-white" id="features">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 mb-6">
            Tính năng <span className="text-[#58cc02]">Hệ thống</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`${item.wrapperClass} ${item.bg} group relative rounded-[2.5rem] p-8 md:p-10 border shadow-[var(--shadow-diffusion)] overflow-hidden transition-all duration-300 flex flex-col h-full`}
            >
              <div className="relative z-20 w-full mb-auto">
                {item.icon}
                <h3
                  className={`text-2xl font-bold mb-4 ${item.bg.includes("zinc-900") ? "text-white" : "text-zinc-900"}`}
                >
                  {item.title}
                </h3>
                <p
                  className={`leading-relaxed text-base max-w-[320px] ${item.bg.includes("zinc-900") ? "text-zinc-400" : "text-zinc-500"}`}
                >
                  {item.desc}
                </p>
              </div>

              <div className="mt-8">{item.visual}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
