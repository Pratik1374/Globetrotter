"use client";
import { useSearchParams } from "next/navigation";
import GameContainer from "@/components/GameContainer";
import FloatingIcons from "@/components/FloatingIcons";
import { motion } from "framer-motion";
import { Suspense } from "react";
import Loader from "@/components/Loader";

const GameContent = () => {
  const searchParams = useSearchParams();
  const invitedUsername = searchParams.get("invitedBy");
  const invitedScore = searchParams.get("score");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#000000] relative overflow-hidden">
      {/* Subtle Neon Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.2,
          zIndex: 0,
        }}
      />
      {/* Radial Glow Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      <FloatingIcons />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl p-6">
        {invitedUsername && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-2 mb-6 p-4 rounded-xl border border-purple-500/50 bg-gray-800/30 shadow-lg shadow-purple-500/20 animate-pulse"
          >
            <p className="text-lg text-purple-300">
              🔥 Challenged by <strong>{invitedUsername}</strong> with a score
              of {invitedScore}!
            </p>
            <p className="text-sm text-center text-cyan-400 mt-1">
              Can you beat them? 🚀
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full"
        >
          <GameContainer />
        </motion.div>
      </div>

      <div className="absolute top-4 left-4 h-12 w-12 border-t-2 border-l-2 border-purple-500/30 pointer-events-none" />
      <div className="absolute top-4 right-4 h-12 w-12 border-t-2 border-r-2 border-purple-500/30 pointer-events-none" />
      <div className="absolute bottom-4 left-4 h-12 w-12 border-b-2 border-l-2 border-purple-500/30 pointer-events-none" />
      <div className="absolute bottom-4 right-4 h-12 w-12 border-b-2 border-r-2 border-purple-500/30 pointer-events-none" />
    </div>
  );
};

const GamePage = () => {
  return (
    <Suspense
      fallback={
        <p className="text-white">
          <Loader />
        </p>
      }
    >
      <GameContent />
    </Suspense>
  );
};

export default GamePage;
