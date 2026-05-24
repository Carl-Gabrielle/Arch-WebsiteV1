"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Expand, X, ChevronLeft, ChevronRight } from "lucide-react";

import { useEffect, useState } from "react";

const ease = [0.22, 1, 0.36, 1];

export default function ProjectGallery({ images, mobileCarousel = false }) {
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
      {/* ================================= */}
      {/* MOBILE CAROUSEL */}
      {/* ================================= */}

      {mobileCarousel ? (
        <div
          className="
            flex
            gap-4
            overflow-x-auto
            pb-2
            snap-x
            snap-mandatory
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {images.map((image, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease,
              }}
              onClick={() => setActiveIndex(index)}
              className="
                group
                relative
                w-[84%]
                shrink-0
                snap-center
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                cursor-pointer
              "
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.label}
                  className="
                    h-full
                    w-full
                    object-cover
                    cursor-pointer
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex items-center justify-between">
                    <div className="rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl">
                      <span className="text-[10px] uppercase tracking-[0.32em] text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl">
                      <Expand size={15} />
                    </div>
                  </div>

                  <div
                    className="
                      inline-flex
                      w-fit
                      max-w-max
                      items-center
                      gap-3
                      rounded-full
                      border
                      border-white/10
                      bg-black/40
                      px-4
                      py-3
                      backdrop-blur-xl
                    "
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-white/80" />

                    <span className="truncate text-[10px] uppercase tracking-[0.22em] text-white/90">
                      {image.label}
                    </span>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      ) : (
        /* ================================= */
        /* DESKTOP GRID */
        /* ================================= */

        <div className="grid grid-cols-1 gap-5 p-6 md:grid-cols-2">
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
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-[#0b0b0b]
                  text-left
                  cursor-pointer
                "
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.label}
                    className="
                      h-full
                      w-full
                      object-cover
                      cursor-pointer
                      transition
                      duration-700
                      ease-out
                      group-hover:scale-[1.04]
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-between p-5">
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

                    <div
                      className="
                        inline-flex
                        w-fit
                        max-w-max
                        items-center
                        gap-3
                        rounded-full
                        border
                        border-white/10
                        bg-black/40
                        px-4
                        py-3
                        backdrop-blur-xl
                      "
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-white/80" />

                      <span className="truncate text-[10px] uppercase tracking-[0.22em] text-white/90">
                        {image.label}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      )}

      {/* ================================= */}
      {/* FULLSCREEN IMAGE VIEWER */}
      {/* ================================= */}

      <AnimatePresence>
        {activeImage && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000]"
            >
              {/* CLOSE */}
              <button
                onClick={closeModal}
                className="
                  fixed
                  right-4
                  top-4
                  z-[1100]
                  flex
                  h-11
                  w-11
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/70
                  text-white
                  backdrop-blur-xl
                  transition
                  duration-300
                  hover:scale-105
                  hover:bg-black/90
                "
              >
                <X size={18} />
              </button>

              {/* IMAGE */}
              <div className="flex h-full items-center justify-center px-4 pb-32 pt-20 md:p-10">
                <img
                  src={activeImage.src}
                  alt={activeImage.label}
                  onLoad={() => setLoaded(true)}
                  className={`
                    max-h-full
                    max-w-full
                    object-contain
                    transition
                    duration-500
                    ${
                      loaded
                        ? "opacity-100 scale-100 blur-0"
                        : "opacity-60 scale-[1.02] blur-md"
                    }
                  `}
                />
              </div>

              {/* ================================= */}
              {/* MOBILE / TABLET NAVIGATION */}
              {/* ================================= */}

              <div
                className="
                  absolute
                  bottom-24
                  left-1/2
                  z-30
                  flex
                  -translate-x-1/2
                  items-center
                  gap-3
                  md:hidden
                "
              >
                <button
                  onClick={prevImage}
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-black/60
                    text-white
                    backdrop-blur-2xl
                    transition
                    duration-300
                    active:scale-95
                  "
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={nextImage}
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-black/60
                    text-white
                    backdrop-blur-2xl
                    transition
                    duration-300
                    active:scale-95
                  "
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* ================================= */}
              {/* DESKTOP NAVIGATION */}
              {/* ================================= */}

              <button
                onClick={prevImage}
                className="
                  absolute
                  left-6
                  top-1/2
                  z-20
                  hidden
                  -translate-y-1/2
                  cursor-pointer
                  md:block
                "
              >
                <div
                  className="
                    flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full

      /* stronger contrast system */
      bg-white/20
      backdrop-blur-xl

      /* adaptive border for any background */
      border border-white/40

      /* ensures visibility on bright images */
      shadow-[0_8px_30px_rgba(0,0,0,0.45)]
      ring-1 ring-black/40

      /* smoother interaction */
      transition duration-300 ease-out
      hover:scale-110
      hover:bg-white/30
      active:scale-95
                  "
                >
                  <ChevronLeft
                    className="  text-white
        drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]"
                    size={18}
                  />
                </div>
              </button>

              <button
                onClick={nextImage}
                className="
    absolute
    right-6
    top-1/2
    z-50
    hidden
    -translate-y-1/2
    cursor-pointer
    md:block
  "
              >
                <div
                  className="
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full

      /* stronger contrast system */
      bg-white/20
      backdrop-blur-xl

      /* adaptive border for any background */
      border border-white/40

      /* ensures visibility on bright images */
      shadow-[0_8px_30px_rgba(0,0,0,0.45)]
      ring-1 ring-black/40

      /* smoother interaction */
      transition duration-300 ease-out
      hover:scale-110
      hover:bg-white/30
      active:scale-95
    "
                >
                  <ChevronRight
                    size={18}
                    className="
        text-white
        drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]
      "
                  />
                </div>
              </button>

              {/* FOOTER */}
              <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/50 px-5 py-5 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="truncate text-sm text-white">
                    {activeImage.label}
                  </h3>

                  <div className="text-[10px] uppercase tracking-[0.28em] text-white/50">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(images.length).padStart(2, "0")}
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
