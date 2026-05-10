"use client";

import { motion } from "framer-motion";

export default function ProjectGallery({ images }) {
  return (
    <div className="grid grid-cols-2 gap-4 p-5 sm:gap-5 sm:p-6">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.08,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-[24px]
            border
            border-white/10
            bg-black
          "
        >
          {/* IMAGE */}
          <img
            src={image.src}
            alt={image.label}
            className="
              h-[180px]
              w-full
              object-cover
              transition
              duration-700
              group-hover:scale-105

              sm:h-[220px]
              lg:h-[240px]
            "
          />

          {/* OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/10
              to-transparent

              opacity-100

              md:opacity-0
              md:transition
              md:duration-500
              md:group-hover:opacity-100
            "
          />

          {/* LABEL */}
          <div
            className="
              absolute
              bottom-4
              left-4
              z-20

              rounded-full
              border
              border-white/10
              bg-black/45

              px-3
              py-2

              text-[8px]
              uppercase
              tracking-[0.22em]
              text-white/90

              backdrop-blur-xl

              opacity-100

              md:translate-y-3
              md:opacity-0
              md:transition-all
              md:duration-500

              md:group-hover:translate-y-0
              md:group-hover:opacity-100
            "
          >
            {image.label}
          </div>

          {/* PREMIUM SHINE */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)]
              opacity-0
              transition
              duration-700
              group-hover:opacity-100
            "
          />
        </motion.div>
      ))}
    </div>
  );
}