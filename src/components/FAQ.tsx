"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "@phosphor-icons/react";
import clsx from "clsx";

const faqs = [
  { q: "UNIBEAN là gì?", a: "Unibean là nền tảng quản lý thông minh nơi sinh viên Check-in, làm nhiệm vụ mỗi ngày để tích lũy bean và đổi lấy những phần quà giá trị thực tế." },
  { q: "Unibean dùng để làm gì?", a: "Dùng để số hóa các hoạt động cộng đồng, giúp bạn tích lũy bean từ việc điểm danh, hoàn thành nhiệm vụ và đổi lấy những phần quà thực tế như voucher, thiết bị công nghệ." },
  { q: "Làm thế nào để nhận bean?", a: "Bạn có thể nhận bean bằng cách Check-in hằng ngày, tham gia các chiến dịch (Campaign) hoặc đóng góp ý kiến cho hệ thống." },
  { q: "Đổi quà như thế nào?", a: "Ngay trong ứng dụng Unibean, bạn có thể truy cập 'Trung tâm phần thưởng' để lựa chọn món quà yêu thích và đổi bằng số bean đã tích lũy." },
  { q: "Thông tin của tôi có an toàn không?", a: "Chúng mình cam kết bảo mật thông tin cá nhân và tài sản số của bạn bằng công nghệ mã hóa hiện đại nhất, đảm bảo tính minh bạch và an toàn tuyệt đối." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-900 mb-4">
            Tri thức & <span className="text-[#58cc02]">Quy chuẩn</span>
          </h2>
          <p className="text-zinc-500">Document kỹ thuật và hướng dẫn vận hành kiến trúc hệ sinh thái Unibean.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={clsx(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  isOpen ? "bg-[#89e219]/5 border-[#89e219]/30" : "bg-white border-zinc-200 hover:border-zinc-300"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className={clsx("text-lg font-bold transition-colors", isOpen ? "text-[#4fb802]" : "text-zinc-800")}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={clsx("flex items-center justify-center p-2 rounded-full", isOpen ? "bg-[#89e219]/20 text-[#58cc02]" : "bg-zinc-100 text-zinc-500")}
                  >
                    <Plus weight="bold" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 text-zinc-500 leading-relaxed text-[15px]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
