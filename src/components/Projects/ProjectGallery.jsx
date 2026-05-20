"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Expand, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const ease = [0.22, 1, 0.36, 1];

export default function ProjectGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  const closeModal = () => {
    setActiveIndex(null);
    setLoaded(false);
  };

  const nextImage = () => {
    setLoaded(false);
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setLoaded(false);
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    if (activeImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeImage]);

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4 md:p-6">
        {images.map((image, index) => {
          const count = String(index + 1).padStart(2, "0");

          return (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
                ease,
              }}
              onClick={() => setActiveIndex(index)}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b0b] text-left cursor-pointer"
            >
              {/* IMAGE WRAPPER */}
              <div className="relative aspect-[5/4] min-h-[240px] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.label}
                  className="
                    h-full w-full object-cover
                    transition duration-700 ease-out
                    md:group-hover:scale-[1.04]
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* CONTENT */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5">
                  {/* TOP */}
                  <div className="flex items-center justify-between">
                    <div className="rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl">
                      <span className="text-[10px] uppercase tracking-[0.32em] text-white">
                        {count}
                      </span>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl">
                      <Expand size={15} />
                    </div>
                  </div>

                  {/* BOTTOM LABEL */}
                  <div className="pb-1">
                    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl max-w-full">
                      <span className="h-2 w-2 rounded-full bg-white/80 shrink-0" />
                      <span className="truncate text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-white/90">
                        {image.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeImage && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-2xl"
            />

            {/* MODAL WRAPPER */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.45, ease }}
              className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6"
            >
              <div className="relative w-full max-w-6xl">
                {/* CLOSE */}
                <button
                  onClick={closeModal}
                  className="
    cursor-pointer fixed right-4 top-4 z-[1100]
    flex h-11 w-11 items-center justify-center
    rounded-full
    border border-white/20
    bg-black/70
    text-white
    shadow-2xl shadow-black/50
    backdrop-blur-xl
    transition-all duration-200
    hover:scale-105 hover:bg-black/85
    active:scale-95
  "
                >
                  <X
                    size={18}
                    className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                  />
                </button>

                {/* MODAL CARD */}
                <div className="relative h-[85vh] w-full overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b] flex flex-col">
                  {/* IMAGE AREA */}
                  <div className="relative flex-1 overflow-hidden bg-black">
                    {/* LEFT ARROW */}
                    <button
                      onClick={prevImage}
                      className="
    cursor-pointer
    absolute left-4 inset-y-0 z-20
    hidden md:flex items-center
  "
                    >
                      <div
                        className="
      flex h-11 w-11 items-center justify-center
      rounded-full
      border border-white/20
      bg-black/70
      text-white
      shadow-2xl shadow-black/50
      backdrop-blur-xl
      transition-all duration-200
      hover:scale-105 hover:bg-black/85
      active:scale-95
    "
                      >
                        <ChevronLeft
                          size={18}
                          className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                        />
                      </div>
                    </button>

                    {/* RIGHT ARROW */}
                    <button
                      onClick={nextImage}
                      className="
    cursor-pointer
    absolute right-4 inset-y-0 z-20
    hidden md:flex items-center
  "
                    >
                      <div
                        className="
      flex h-11 w-11 items-center justify-center
      rounded-full
      border border-white/20
      bg-black/70
      text-white
      shadow-2xl shadow-black/50
      backdrop-blur-xl
      transition-all duration-200
      hover:scale-105 hover:bg-black/85
      active:scale-95
    "
                      >
                        <ChevronRight
                          size={18}
                          className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                        />
                      </div>
                    </button>

                    {/* IMAGE */}
                    <img
                      src={activeImage.src}
                      alt={activeImage.label}
                      onLoad={() => setLoaded(true)}
                      className={`
                        h-full w-full object-cover
                        transition duration-500
                        ${
                          loaded
                            ? "opacity-100 scale-100 blur-0"
                            : "opacity-60 scale-[1.02] blur-md"
                        }
                      `}
                    />

                    {/* MOBILE NAV */}
                    <div className="absolute inset-x-0 bottom-4 flex justify-center gap-3 md:hidden">
                      <button
                        onClick={prevImage}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-xl"
                      >
                        <ChevronLeft size={18} />
                      </button>

                      <button
                        onClick={nextImage}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-xl"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4 sm:px-6 shrink-0">
                    <h3 className="truncate text-sm sm:text-base text-white">
                      {activeImage.label}
                    </h3>

                    <div className="shrink-0 text-[10px] uppercase tracking-[0.28em] text-white/50">
                      {String(activeIndex + 1).padStart(2, "0")} /{" "}
                      {String(images.length).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
