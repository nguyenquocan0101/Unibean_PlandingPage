"use client";

import { motion } from "framer-motion";
import { QrCode, Path, HandCoins, UsersThree } from "@phosphor-icons/react";

const bentoItems = [
  {
    title: "Campaign & Nhiệm vụ",
    desc: "Lưới phân bổ nhiệm vụ liên tục. Quản trị phân luồng công việc thời gian thực.",
    wrapperClass: "md:mt-0",
    bg: "bg-zinc-50 border-zinc-200/50 hover:border-zinc-300",
    icon: <Path weight="duotone" className="text-4xl text-zinc-400 mb-6" />,
    visual: (
      <div className="absolute top-10 right-10 bottom-10 left-[40%] rounded-2xl bg-white border border-zinc-100 shadow-[var(--shadow-diffusion)] overflow-hidden flex flex-col p-4 gap-3">
        {[1, 2, 3].map((i) => (
          <motion.div 
            key={i} 
            layoutId={`task-${i}`}
            className="flex items-center gap-4 p-3 rounded-lg border border-zinc-50"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className={`w-8 h-8 rounded-full ${i===1?'bg-emerald-500':'bg-zinc-200'} shrink-0`} />
            <div className="flex-1 space-y-2">
               <div className="h-2 bg-zinc-200 rounded-full w-3/4" />
               <div className="h-2 bg-zinc-100 rounded-full w-1/2" />
            </div>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    title: "Tích hợp QR",
    desc: "Cầu nối điểm danh & phân phối tài sản trực tiếp thông qua biên dịch event.",
    wrapperClass: "md:mt-32 relative z-10",
    bg: "bg-zinc-900 border-zinc-800 text-white",
    icon: <QrCode weight="duotone" className="text-4xl text-zinc-500 mb-6" />,
    visual: (
      <div className="flex justify-center mt-8">
        <motion.div 
           className="relative w-32 h-32 rounded-[2rem] bg-zinc-800/50 border border-white/10 flex items-center justify-center backdrop-blur-md overflow-hidden"
        >
          <QrCode weight="thin" className="text-5xl text-zinc-500" />
          <motion.div 
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-emerald-500/80 shadow-[0_0_15px_3px_rgba(16,185,129,0.4)]"
          />
        </motion.div>
      </div>
    )
  },
  {
    title: "Trung tâm phần thưởng",
    desc: "Thuật toán quy đổi vi mô. Khớp tài sản số thành voucher vật lý.",
    wrapperClass: "md:-mt-16 relative z-20",
    bg: "bg-white border-zinc-200/50",
    icon: <HandCoins weight="duotone" className="text-4xl text-zinc-400 mb-6" />,
    visual: (
       <div className="relative mt-10 h-32 w-full mask-linear-x overflow-hidden flex items-center">
         <motion.div 
           animate={{ x: ["0%", "-50%"] }}
           transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
           className="flex gap-4 w-max"
         >
           {[1, 2, 3, 4, 1, 2, 3, 4].map((item, idx) => (
             <div key={idx} className="w-48 h-24 rounded-2xl bg-zinc-50 border border-zinc-100 p-4 flex flex-col justify-between">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-[10px] text-emerald-700 font-bold">VCH</span>
                </div>
                <div className="h-3 w-1/2 bg-zinc-200 rounded-full" />
             </div>
           ))}
         </motion.div>
       </div>
    )
  },
  {
    title: "Sổ cái ví nhóm",
    desc: "Ví chi tiêu phân tán. Nhóm các luồng giao dịch rõ ràng, minh bạch.",
    wrapperClass: "md:mt-16",
    bg: "bg-white border-zinc-200/50",
    icon: <UsersThree weight="duotone" className="text-4xl text-zinc-400 mb-6" />,
    visual: (
       <div className="relative flex justify-end mt-8 h-32 overflow-hidden pointer-events-none pr-8">
          <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
             className="w-40 h-40 bg-zinc-50 rounded-full border border-zinc-100 flex items-center justify-center shadow-lg relative z-10"
          >
             <span className="text-xl font-bold font-mono text-zinc-900">472k</span>
          </motion.div>
          <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
             className="w-24 h-24 bg-zinc-100 rounded-full border border-zinc-200 flex items-center justify-center absolute -left-4 top-10"
          >
             <span className="text-sm font-bold font-mono text-zinc-500">22k</span>
          </motion.div>
       </div>
    )
  }
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
            Kiến trúc <span className="text-emerald-600">Hệ sinh thái.</span>
          </h2>
          <p className="text-lg text-zinc-500 leading-relaxed">
            Giao diện phân mảnh tích hợp quy trình tự động. Loại bỏ sự phức tạp thừa thãi trong quản lý quỹ và chiến dịch.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`${item.wrapperClass} ${item.bg} group relative rounded-[2.5rem] p-8 md:p-10 border shadow-[var(--shadow-diffusion)] overflow-hidden transition-all duration-300`}
            >
              <div className="relative z-20 max-w-[280px]">
                {item.icon}
                <h3 className={`text-xl font-bold mb-3 ${item.bg.includes('zinc-900') ? 'text-white' : 'text-zinc-900'}`}>
                  {item.title}
                </h3>
                <p className={`leading-relaxed text-[15px] ${item.bg.includes('zinc-900') ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {item.desc}
                </p>
              </div>
              
              <div className="relative z-10 w-full">
                {item.visual}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
