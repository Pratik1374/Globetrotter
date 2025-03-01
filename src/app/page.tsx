"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000000] p-6 sm:p-8 font-[family-name:var(--font-geist-sans)] overflow-hidden relative">
      {/* Neon Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(168, 85, 247, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168, 85, 247, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          backgroundPosition: "center",
          opacity: 0.6,
          zIndex: 0,
        }}
      />
      {/* Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(168, 85, 247, 0.2) 0%, transparent 70%)",
          opacity: 0.8,
          zIndex: 0,
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center max-w-4xl w-full gap-8 sm:gap-10 relative z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 tracking-tight drop-shadow-[0_2px_10px_rgba(168,85,247,0.5)]"
        >
          Globetrotter Challenge
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-purple-300 max-w-lg sm:max-w-xl drop-shadow-[0_1px_5px_rgba(168,85,247,0.3)]"
        >
          Guess famous destinations from cryptic clues, unlock fun facts, and
          test your wanderlust!
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link href="/play" passHref legacyBehavior>
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-xl border border-purple-500/70 bg-transparent text-purple-300 hover:border-purple-400 hover:text-purple-200 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] cursor-pointer"
            >
              <span className="text-lg sm:text-xl font-semibold">
                🎮 Let’s Play
              </span>
            </motion.a>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-purple-300 text-sm sm:text-base max-w-md w-full drop-shadow-[0_1px_5px_rgba(168,85,247,0.2)]"
        >
          <h2 className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
            Decode the Journey
          </h2>
          <ul className="space-y-4 w-fit ml-auto mr-auto text-left">
            <li className="flex items-center gap-2">
              <span className="text-2xl animate-pulse">🕵️‍♂️</span>
              <span>Unravel cryptic clues</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl animate-bounce">🎯</span>
              <span>Pinpoint the destination</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl animate-spin">🌟</span>
              <span>Reveal epic fun facts</span>
            </li>
          </ul>
          <p className="mt-4 text-xs sm:text-sm text-purple-400/70 italic text-center">
            Challenge your friends after completing a game!
          </p>
        </motion.div>
      </motion.div>

      {isMounted && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        >
          {[...Array(6)].map((_, i) => {
            const startLeft = Math.random() * 30;
            const startBottom = Math.random() * 10;
            const endLeft = startLeft + Math.random() * 40 + 20;
            const endBottom = startBottom + Math.random() * 80 + 40;

            return (
              <motion.div
                key={i}
                className="absolute text-purple-500/60 text-2xl sm:text-3xl drop-shadow-[0_1px_5px_rgba(168,85,247,0.4)]"
                style={{
                  left: `${startLeft}%`,
                  bottom: `${startBottom}%`,
                }}
                animate={{
                  left: `${endLeft}%`,
                  bottom: `${endBottom}%`,
                }}
                transition={{
                  duration: 10 + i * 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                  delay: i * 2,
                }}
              >
                ✈️
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
