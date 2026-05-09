"use client";

import { useState } from "react";
import Brand from "./Navbar/Brand";
import DesktopNav from "./Navbar/DesktopNav";
import MenuToggleButton from "./Navbar/MenuToggleButton";
import MobileMenu from "./Navbar/MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-stone-300/70 bg-gradient-to-r from-[#f4f1eb]/95 via-[#f8f6f1]/95 to-[#f4f1eb]/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 lg:px-10 py-2">
          <Brand />
          <DesktopNav />
          <MenuToggleButton
            isOpen={isOpen}
            onToggle={() => setIsOpen((prev) => !prev)}
          />
        </nav>

        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </header>
  );
}
