import { motion } from "framer-motion";

const Feedback = ({ feedback, funFact }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-xl bg-gray-800/30 border border-purple-500/50 shadow-lg shadow-purple-500/20 backdrop-blur-sm"
    >
      <h2
        className={`text-2xl font-bold mb-3 ${
          feedback.includes("Correct") ? "text-green-400" : "text-red-400"
        }`}
      >
        {feedback}
      </h2>
      <p className="text-purple-300">Fun Fact:</p>
      <p className="text-gray-200">{funFact}</p>
    </motion.div>
  );
};

export default Feedback;
