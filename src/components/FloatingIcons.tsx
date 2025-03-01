"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function FloatingIcons() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
        >
          {[...Array(5)].map((_, i) => {
            const startLeft = Math.random() * 80;
            const startTop = Math.random() * 80;
            const endLeft = startLeft + (Math.random() * 20 - 10);
            const endTop = startTop + (Math.random() * 40 + 20);
            const icons = ["✈️", "🌍", "🗺️", "🧳", "🏞️"];

            return (
              <motion.div
                key={i}
                className="absolute text-purple-500 text-xl sm:text-2xl drop-shadow-[0_1px_5px_rgba(168,85,247,0.8)]"
                style={{
                  left: `${startLeft}%`,
                  top: `${startTop}%`,
                }}
                animate={{
                  left: `${endLeft}%`,
                  top: `${endTop}%`,
                }}
                transition={{
                  duration: 15 + i * 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                  delay: i * 1.5,
                }}
              >
                {icons[i % icons.length]}
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </>
  );
}
