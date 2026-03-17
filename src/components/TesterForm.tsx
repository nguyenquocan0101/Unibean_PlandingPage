"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  LockKey,
  Envelope,
  User,
  CheckCircle,
  Phone,
  ChatText,
} from "@phosphor-icons/react";
import clsx from "clsx";

export default function TesterForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    feature: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API Call
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return (
    <section className="py-32 bg-zinc-50" id="tester">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[3rem] bg-white border border-zinc-200 shadow-[var(--shadow-diffusion)] p-8 md:p-16 relative overflow-hidden"
        >
          {/* Subtle noise mesh background */}
          <div className="absolute inset-x-0 top-0 h-[300px] bg-gradient-to-b from-emerald-50 to-transparent pointer-events-none -z-10" />

          <div className="relative z-10 max-w-xl mx-auto text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-white border border-zinc-100 shadow-sm flex items-center justify-center mx-auto mb-6">
              <LockKey weight="duotone" className="text-2xl text-emerald-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 mb-4">
              Trải nghiệm <span className="text-emerald-600">Unibean sớm.</span>
            </h2>
            <p className="text-[16px] text-zinc-500 leading-relaxed md:max-w-md mx-auto">
              Hãy là những người đầu tiên khám phá tính năng mới và góp phần
              hoàn thiện nền tảng.
            </p>
          </div>

          <div className="relative w-full max-w-lg mx-auto">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-10 text-center bg-zinc-50/50 rounded-3xl border border-zinc-100"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                  <CheckCircle weight="fill" className="text-4xl" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                  Truy cập hợp lệ
                </h3>
                <p className="text-zinc-500 max-w-[30ch]">
                  Chúng tôi đã nhận được thông số của bạn. Hãy kiểm tra hòm thư
                  để nhận hướng dẫn Sandbox.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Custom Input 1 */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-[13px] font-bold text-zinc-600 uppercase tracking-widest pl-1"
                  >
                    Họ và tên *
                  </label>
                  <div className="relative">
                    <User
                      weight="bold"
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-lg"
                    />
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      className="w-full h-14 pl-12 pr-4 rounded-xl bg-zinc-50 border border-zinc-200 outline-none transition-all placeholder:text-zinc-400 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 text-zinc-900 font-medium"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Custom Input 2 */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[13px] font-bold text-zinc-600 uppercase tracking-widest pl-1"
                  >
                    Email *
                  </label>
                  <div className="relative">
                    <Envelope
                      weight="bold"
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-lg"
                    />
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="admin@startup.com"
                      className="w-full h-14 pl-12 pr-4 rounded-xl bg-zinc-50 border border-zinc-200 outline-none transition-all placeholder:text-zinc-400 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 text-zinc-900 font-medium"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Custom Input 3 */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-[13px] font-bold text-zinc-600 uppercase tracking-widest pl-1"
                  >
                    Số Điện Thoại *
                  </label>
                  <div className="relative">
                    <Phone
                      weight="bold"
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-lg"
                    />
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="0912 345 678"
                      className="w-full h-14 pl-12 pr-4 rounded-xl bg-zinc-50 border border-zinc-200 outline-none transition-all placeholder:text-zinc-400 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 text-zinc-900 font-medium"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Custom Input 4 */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="feature"
                    className="text-[13px] font-bold text-zinc-600 uppercase tracking-widest pl-1"
                  >
                    Bạn muốn trải nghiệm tính năng nào nhất ?
                  </label>
                  <div className="relative">
                    <ChatText
                      weight="bold"
                      className="absolute left-4 top-4 text-zinc-400 text-lg"
                    />
                    <textarea
                      id="feature"
                      placeholder="Chia sẻ ý tưởng của bạn..."
                      rows={3}
                      className="w-full py-4 pl-12 pr-4 rounded-xl bg-zinc-50 border border-zinc-200 outline-none transition-all placeholder:text-zinc-400 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 text-zinc-900 font-medium resize-none"
                      value={formData.feature}
                      onChange={(e) =>
                        setFormData({ ...formData, feature: e.target.value })
                      }
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === "loading"}
                  type="submit"
                  className={clsx(
                    "mt-4 h-14 rounded-xl font-bold text-[15px] text-white shadow-lg transition-all flex items-center justify-center gap-2",
                    status === "loading"
                      ? "bg-emerald-700 opacity-80 cursor-wait shadow-none"
                      : "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20",
                  )}
                >
                  {status === "loading" ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 1,
                      }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    "Đăng ký trải nghiệm"
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
