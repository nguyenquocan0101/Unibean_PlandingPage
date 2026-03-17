"use client";

import { motion, useScroll, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// Simple magnetic button wrapper
function MagneticButton({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href="#tester"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

const navLinks = [
  { name: "Giới thiệu", href: "#intro" },
  { name: "Tính năng", href: "#features" },
  { name: "Cách hoạt động", href: "#how-it-works" },
  { name: "FAQ", href: "#faq" },
  { name: "Chính sách", href: "#policy" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsub = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
    return () => unsub();
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 border-b ${
        isScrolled
          ? "bg-emerald-50/80 backdrop-blur-md border-emerald-100 shadow-sm py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 group">
          <Image
            src="/assets/images/logounibeanfull.svg"
            alt="UNIBEAN Logo"
            width={160}
            height={40}
            className="h-10 w-auto transition-transform duration-500 group-hover:scale-105"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-sm font-semibold text-zinc-600 hover:text-emerald-700 transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-emerald-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <MagneticButton className="hidden lg:flex h-11 items-center justify-center rounded-xl bg-zinc-900 px-6 text-sm font-bold text-white shadow-md transition-colors hover:bg-zinc-800">
            Kích hoạt Tester
          </MagneticButton>
        </div>
      </div>
    </motion.header>
  );
}
