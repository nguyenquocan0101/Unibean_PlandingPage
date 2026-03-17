"use client";

import Image from "next/image";
import { EnvelopeSimple, Phone } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="py-24 bg-emerald-950 text-emerald-100/70 border-t border-emerald-900" id="policy">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[4fr_2fr_2fr]">
          
          <div className="flex flex-col items-start">
            <Image
              src="/assets/images/logounibeanfull.svg"
              alt="UNIBEAN Logo"
              width={160}
              height={40}
              className="h-10 w-auto mb-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <p className="text-[15px] max-w-[40ch] leading-relaxed text-emerald-100/60">
              Hệ thống tích điểm thông minh giúp cộng đồng STEM kết nối và phát triển bền vững.
            </p>
            <div className="flex gap-4 mt-8">
               <a href="#" className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center hover:bg-emerald-800 transition-colors text-emerald-400">
                  FB
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center hover:bg-emerald-800 transition-colors text-emerald-400">
                  IN
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center hover:bg-emerald-800 transition-colors text-emerald-400">
                  YT
               </a>
            </div>
          </div>
          
          <div>
            <h4 className="mb-6 text-[11px] font-bold uppercase tracking-widest text-emerald-50">Chính sách</h4>
            <ul className="space-y-4 text-[14px]">
              <li><a className="hover:text-emerald-400 transition-colors" href="#">Điều khoản dịch vụ</a></li>
              <li><a className="hover:text-emerald-400 transition-colors" href="#">Chính sách bảo mật</a></li>
              <li><a className="hover:text-emerald-400 transition-colors" href="#">Chính sách cộng đồng</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-6 text-[11px] font-bold uppercase tracking-widest text-emerald-50">Liên hệ</h4>
            <ul className="space-y-4 text-[14px]">
              <li className="flex items-center gap-3">
                <EnvelopeSimple weight="duotone" className="text-lg text-emerald-400" /> 
                <span className="hover:text-white transition-colors cursor-pointer">contact@unibean.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone weight="duotone" className="text-lg text-emerald-400" /> 
                <span className="hover:text-white transition-colors cursor-pointer">+84 987 654 321</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-24 pt-8 border-t border-emerald-900/50 flex flex-col md:flex-row items-center justify-between text-xs font-mono tracking-wide">
          <p>&copy; 2026 UNIBEAN Network.</p>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            System Online
          </div>
        </div>
      </div>
    </footer>
  );
}
