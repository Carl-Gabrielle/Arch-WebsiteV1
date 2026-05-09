"use client";

import { motion } from "framer-motion";

export default function ProjectGallery({
  images,
}) {
  return (
    <div className="grid grid-cols-2 gap-5 p-6">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.08,
          }}
          className="group relative overflow-hidden rounded-[28px]"
        >
          <img
            src={image.src}
            alt={image.label}
            className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="absolute bottom-5 left-5 translate-y-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-xs uppercase tracking-[0.2em] text-white">
              {image.label}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}