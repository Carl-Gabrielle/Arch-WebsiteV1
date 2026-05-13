"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Expand, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

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
    setActiveIndex((prev) => (prev + 1) % images.length);
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
      <div className="grid grid-cols-2 gap-3 p-4 sm:gap-5 sm:p-6">
        {images.map((image, index) => {
          const count = String(index + 1).padStart(2, "0");

          return (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => setActiveIndex(index)}
              className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-[#111] cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.label}
                className="
                  h-[170px] w-full object-cover
                  sm:h-[220px] lg:h-[260px]
                  transition duration-700 ease-out
                  group-hover:scale-[1.06]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

              {/* TOP COUNT + ICON */}
              <div className="absolute left-4 top-4">
                <span
                  className="
      inline-flex items-center justify-center
      rounded-full
      border border-white/20
      bg-black/60
      backdrop-blur-xl
      px-3 py-1

      text-[10px]
      tracking-[0.35em]
      text-white

      shadow-[0_0_20px_rgba(0,0,0,0.6)]
    "
                >
                  {count}
                </span>
              </div>

              <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/40 backdrop-blur-xl transition group-hover:scale-110">
                <Expand size={14} />
              </div>

              {/* LABEL */}
              <div className="absolute bottom-4 left-4">
                <div
                  className="
      inline-flex items-center gap-2

      rounded-full
      border border-white/20
      bg-black/60
      backdrop-blur-xl

      px-4 py-2

      shadow-[0_0_20px_rgba(0,0,0,0.6)]
    "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/80" />

                  <span
                    className="
        text-[10px]
        uppercase
        tracking-[0.25em]
        text-white
        whitespace-nowrap
      "
                  >
                    {image.label}
                  </span>
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
              className="fixed inset-0 z-[999] bg-white/[0.03] backdrop-blur-2xl"
              onClick={closeModal}
            />

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.45 }}
              className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
            >
              <div className="relative w-full max-w-4xl">
                {/* CLOSE */}
                <button
                  onClick={closeModal}
                  className="cursor-pointer fixed right-4 top-4 z-[1100] flex h-10 w-10 items-center justify-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10"
                >
                  <X size={18} />
                </button>

                {/* NAV */}
                <button
                  onClick={prevImage}
                  className=" cursor-pointer fixed left-4 top-1/2 -translate-y-1/2 z-[1100] flex h-10 w-10 items-center justify-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={nextImage}
                  className="cursor-pointer fixed right-4 top-1/2 -translate-y-1/2 z-[1100] flex h-10 w-10 items-center justify-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10"
                >
                  <ChevronRight size={18} />
                </button>

                {/* IMAGE */}
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b0b]/80 backdrop-blur-xl">
                  <div className="flex items-center justify-center p-6">
                    <img
                      src={activeImage.src}
                      alt={activeImage.label}
                      onLoad={() => setLoaded(true)}
                      className={`
                        max-h-[70vh] w-full object-contain rounded-[18px]
                        transition duration-500
                        ${loaded ? "blur-0 scale-100" : "blur-md scale-105"}
                      `}
                    />
                  </div>

                  {/* FOOTER */}
                  <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                        Preview
                      </p>
                      <h3 className="text-sm text-white">
                        {activeImage.label}
                      </h3>
                    </div>

                    <div className="text-[9px] uppercase tracking-[0.25em] text-white/60">
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
