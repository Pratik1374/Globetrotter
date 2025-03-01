import { motion } from "framer-motion";

interface ClueCardProps {
  clues: string[];
  options: string[];
  onSelect: (answer: string) => void;
  selectedAnswer: string;
  correctAnswer: string | null;
}

const ClueCard = ({
  clues,
  options,
  onSelect,
  selectedAnswer,
  correctAnswer,
}: ClueCardProps) => {
  return (
    <motion.div
      className="p-6 rounded-2xl bg-gray-800/30 border border-purple-500/50 backdrop-blur-sm shadow-lg shadow-purple-500/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl font-semibold text-purple-300 mb-4">
        Clue{clues.length > 1 ? "s" : ""}
      </h2>
      <ul className="list-disc pl-5 text-purple-100 space-y-2">
        {clues.map((clue, index) => (
          <li key={index}>{clue}</li>
        ))}
      </ul>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {options.map((option, index) => {
          let borderColor = "border-purple-500/50";
          if (selectedAnswer) {
            if (option === correctAnswer) {
              borderColor = "border-green-400 shadow-[0_0_15px_#22C55E]";
            } else if (option === selectedAnswer) {
              borderColor = "border-red-400 shadow-[0_0_15px_#EF4444]";
            }
          }

          return (
            <motion.button
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 12px rgba(168, 85, 247, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`py-3 px-4 rounded-xl border ${borderColor} text-purple-300 
        bg-transparent hover:border-purple-400 hover:text-purple-200 
        transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
              onClick={() => onSelect(option)}
              disabled={!!selectedAnswer}
            >
              {option}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ClueCard;
