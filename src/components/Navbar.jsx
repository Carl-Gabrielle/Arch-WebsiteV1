"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Brand from "./Navbar/Brand";
import DesktopNav from "./Navbar/DesktopNav";
import MenuToggleButton from "./Navbar/MenuToggleButton";
import MobileMenu from "./Navbar/MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      
      {/* GLASS LAYER (STATIC — NO ANIMATION = NO FLICKER) */}
      <div className="relative bg-[#f4f1eb]/70 backdrop-blur-xl">

        {/* SOFT STATE OVERLAY (THIS replaces background animation) */}
        <motion.div
          className="absolute inset-0 bg-[#f4f1eb]/60"
          animate={{
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* CONTENT */}
        <nav className=" border-b border-stone-300/70 relative mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 lg:px-10 py-3">
          <Brand />
          <DesktopNav />

          <MenuToggleButton
            isOpen={isOpen}
            onToggle={() => setIsOpen((p) => !p)}
          />
        </nav>

        {/* MOBILE MENU (proper mount animation = no flicker) */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}