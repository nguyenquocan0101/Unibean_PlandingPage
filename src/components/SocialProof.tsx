"use client";

import { motion } from "framer-motion";
import { ChatTeardropDots, Heart, Star } from "@phosphor-icons/react";

const testimonials = [
  {
    name: "Lê Anh Tuấn",
    role: "Sinh viên Đại học Bách Khoa",
    content:
      "Unibean giúp mình có thêm động lực tham gia các hoạt động ngoại khóa. Việc tích bean đổi voucher cafe rất tiện lợi!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tuan",
  },
  {
    name: "Nguyễn Minh Thư",
    role: "Thành viên CLB STEM",
    content:
      "Giao diện app cực kỳ hiện đại và dễ dùng. Mình thích nhất là tính năng check-in hằng ngày nhận bean.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=thu",
  },
  {
    name: "Trần Hoàng Nam",
    role: "Đóng góp viên tích cực",
    content:
      "Hệ thống quản lý minh bạch, mọi đóng góp của mình cho cộng đồng đều được ghi nhận bằng bean xứng đáng.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=nam",
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-zinc-50 overflow-hidden" id="social-proof">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="p-2 bg-[#89e219]/15 rounded-lg text-[#58cc02]">
              <Star weight="fill" />
            </div>
            <span className="text-[#58cc02] font-bold uppercase tracking-widest text-xs">
              Cộng đồng tin tưởng
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-900 leading-tight">
            Lắng nghe từ <br />{" "}
            <span className="text-[#58cc02]">Những người trải nghiệm</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-zinc-200/50 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    weight="fill"
                    className="text-amber-400 text-sm"
                  />
                ))}
              </div>
              <p className="text-zinc-600 italic leading-relaxed mb-8">
                "{item.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-100 border border-zinc-200">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">{item.name}</h4>
                  <p className="text-xs text-zinc-400">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
