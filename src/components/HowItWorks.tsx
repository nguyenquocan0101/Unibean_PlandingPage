"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Đăng ký",
    desc: "Người dùng điền form để đăng ký tham gia chương trình tester.",
    color: "bg-white border-zinc-200 text-zinc-900"
  },
  {
    step: "02",
    title: "Tải ứng dụng",
    desc: "Sau khi được duyệt, người dùng tải app từ Google Play.",
    color: "bg-zinc-50 border-zinc-200 text-zinc-900"
  },
  {
    step: "03",
    title: "Hoạt động",
    desc: "Check-in campaign, hoàn thành nhiệm vụ và tương tác cộng đồng.",
    color: "bg-zinc-100 border-zinc-200 text-zinc-900"
  },
  {
    step: "04",
    title: "Nhận coin",
    desc: "Hệ thống cấp Unibean Coin sau khi hoàn thành nhiệm vụ hoặc quét QR.",
    color: "bg-emerald-50 border-emerald-100 text-emerald-900"
  },
  {
    step: "05",
    title: "Đổi thưởng",
    desc: "Sử dụng coin để đổi các voucher hoặc quà tặng hấp dẫn.",
    color: "bg-zinc-900 border-zinc-800 text-white"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-zinc-50 relative" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-20">
        
        {/* Left Side: Sticky Intro */}
        <div className="flex flex-col h-full rounded-2xl relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:sticky md:top-40 max-w-sm mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 mb-8 leading-tight">
              Cách <span className="text-emerald-600">hoạt động</span>
            </h2>
            <p className="text-[17px] text-zinc-500 leading-relaxed mb-12">
              Chuỗi tương tác khép kín. Từ việc ghi nhận đóng góp hạ tầng đến việc tiêu thụ phần thưởng vật chất, tất cả được xử lý tự động trong tích tắc.
            </p>
            <a 
              href="#tester" 
              className="inline-flex h-12 w-fit items-center justify-center rounded-xl bg-white border border-zinc-200 shadow-sm px-8 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100"
            >
              Xem tài liệu API
            </a>
          </motion.div>
        </div>
        
        {/* Right Side: Sticky Scroll Stack */}
        <div className="flex flex-col gap-6 relative">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`sticky ${item.color} w-full rounded-[2.5rem] border shadow-[var(--shadow-diffusion)] p-10 md:p-14 overflow-hidden transform-gpu min-h-[350px] flex flex-col justify-between`}
              style={{
                top: `calc(7rem + ${index * 1.5}rem)`,
                zIndex: index + 10,
              }}
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest opacity-60">Giai đoạn {item.step}</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-3">{item.title}</h3>
                <p className="opacity-80 leading-relaxed text-lg max-w-xs">{item.desc}</p>
              </div>

              {/* Minimal geometric decoration representing the step */}
              <div className="absolute right-0 bottom-0 w-32 h-32 md:w-48 md:h-48 translate-x-1/4 translate-y-1/4 rounded-full bg-current opacity-5 blur-xl pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
