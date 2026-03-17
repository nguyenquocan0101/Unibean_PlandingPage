"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "@phosphor-icons/react";
import clsx from "clsx";

const faqs = [
  { q: "UNIBEAN là gì?", a: "Nền tảng kiến trúc hạ tầng chuyên biệt cho việc quản trị tổng hợp và điều phối tài sản phân tán trong hệ sinh thái STEM." },
  { q: "Làm thế nào để kiếm coin?", a: "Tích lũy realtime khi hoàn tất chiến dịch, submit minh chứng hệ thống, hoặc quét mã định danh tại sự kiện vật lý." },
  { q: "Coin dùng để làm gì?", a: "Coin có thể dùng để đổi voucher, quà tặng hoặc ưu đãi trong hệ sinh thái." },
  { q: "Ví nhóm hoạt động ra sao?", a: "Mỗi nhóm cấp ví chung điều hướng bởi Leader. Thuật toán hỗ trợ phân luồng thưởng minh bạch cho từng node thành viên." },
  { q: "Tester có đặc quyền gì?", a: "Trải nghiệm hạ tầng 2.0 đầu tiên. Data trên Sandbox sẽ được đồng bộ và giữ nguyên giá trị khi Mainnet chính thức." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-900 mb-4">
            Tri thức & <span className="text-emerald-600">Quy chuẩn</span>
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
                  isOpen ? "bg-zinc-50 border-zinc-300" : "bg-white border-zinc-200 hover:border-zinc-300"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className={clsx("text-lg font-bold transition-colors", isOpen ? "text-emerald-700" : "text-zinc-800")}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={clsx("flex items-center justify-center p-2 rounded-full", isOpen ? "bg-emerald-100/50 text-emerald-700" : "bg-zinc-100 text-zinc-500")}
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
