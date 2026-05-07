// TvVideoPlayer.jsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VIDEO_ID = "EuTgr9aHxzY";

export default function TvVideoPlayer({ label = "Watch Our Story" }) {
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);

  const handleHover = (val) => {
    setHovered(val);
    if (val && !playing) setPlaying(true);
  };

  const src = playing
    ? `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&rel=0&modestbranding=1&controls=1`
    : `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=0&rel=0&modestbranding=1&controls=1`;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center select-none"
    >
      {/* TV Outer Shell */}
      <div
        className={`relative transition-all duration-500 ${hovered ? "scale-[1.03] drop-shadow-2xl" : "scale-100 drop-shadow-lg"}`}
        style={{
          filter: hovered
            ? "drop-shadow(0 0 24px rgba(37,99,235,0.35))"
            : undefined,
        }}
      >
        {/* TV Body */}
        <div
          className="relative bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-2xl p-3 pb-6"
          style={{
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* Antenna */}
          <div className="absolute -top-8 left-1/3 w-0.5 h-8 bg-[#555] rounded-full rotate-[-12deg]" />
          <div className="absolute -top-8 left-[56%] w-0.5 h-8 bg-[#555] rounded-full rotate-[12deg]" />

          {/* Screen bezel */}
          <div
            className="relative rounded-xl overflow-hidden bg-black"
            style={{ boxShadow: "inset 0 0 20px rgba(0,0,0,0.8)" }}
          >
            {/* CRT scanline overlay */}
            <div
              className="absolute inset-0 z-10 pointer-events-none rounded-xl"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)",
              }}
            />
            {/* Screen glow when hovered */}
            <div
              className={`absolute inset-0 z-10 pointer-events-none rounded-xl transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
              style={{ boxShadow: "inset 0 0 30px rgba(37,99,235,0.15)" }}
            />

            {/* Video iframe */}
            <div className="w-full aspect-video" style={{ minWidth: "280px" }}>
              {playing ? (
                <iframe
                  key={playing ? "playing" : "idle"}
                  src={src}
                  title="Principle ACS"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ display: "block", minHeight: "200px" }}
                />
              ) : (
                <div
                  className="w-full h-full flex flex-col items-center justify-center bg-[#0a0a1a] cursor-pointer"
                  style={{ minHeight: "200px" }}
                  onClick={() => setPlaying(true)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                    alt="Video thumbnail"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div className="relative z-10 w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                  <p className="relative z-10 mt-3 text-white/70 text-xs">
                    Hover or click to play
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Bottom TV controls row */}
          <div className="flex items-center justify-between mt-3 px-2">
            <div className="flex items-center gap-1.5">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === 0 ? "bg-primary/80" : "bg-white/20"}`}
                />
              ))}
            </div>
            <div className="w-10 h-1.5 rounded-full bg-white/10" />
            <div className="flex items-center gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-1.5 h-3 rounded-sm bg-white/15" />
              ))}
            </div>
          </div>
        </div>

        {/* TV Stand */}
        <div className="flex justify-center">
          <div className="w-16 h-3 bg-gradient-to-b from-[#2a2a2a] to-[#222] rounded-b-sm" />
        </div>
        <div className="flex justify-center">
          <div
            className="w-24 h-2 bg-[#1a1a1a] rounded-full"
            style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.4)" }}
          />
        </div>
      </div>

      {/* Label */}
      <p className="mt-4 text-xs text-muted-foreground tracking-wider uppercase font-semibold">
        {label}
      </p>
    </motion.div>
  );
}
