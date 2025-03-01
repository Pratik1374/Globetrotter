import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import ClueCard from "./ClueCard";
import Feedback from "./Feedback";
import Loader from "./Loader";
import InviteModal from "./InviteModal";
import { usePathname } from "next/navigation";

const MAX_QUESTIONS = 5;

const GameContainer = () => {
  const [destination, setDestination] = useState<any>(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [funFact, setFunFact] = useState("");
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
  const [gameFinished, setGameFinished] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("/invite")) {
      setScore(0);
      setQuestionCount(0);
      setGameFinished(false);
    }
  }, [pathname]);

  const fetchRandomDestination = async () => {
    if (questionCount >= MAX_QUESTIONS) {
      setGameFinished(true);
      return;
    }
    setLoading(true);
    setFeedback("");
    setSelectedAnswer("");
    setFunFact("");
    setCorrectAnswer(null);
    setGameFinished(false);
    try {
      const res = await fetch("/api/destination/random");
      const data = await res.json();
      setDestination(data);
    } catch (error) {
      console.error("Error fetching destination:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomDestination();
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#A855F7", "#22D3EE", "#ffffff", "#F472B6"],
      angle: 90,
      drift: 1,
      decay: 0.9,
      scalar: 1.2,
    });
  };

  const handleAnswer = async (answer: string) => {
    if (questionCount >= MAX_QUESTIONS) return;
    setSelectedAnswer(answer);
    setLoading(true);

    try {
      const res = await fetch("/api/destination/check-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: destination._id, answer }),
      });
      const data = await res.json();

      if (data.correct) {
        setFeedback("Correct! 🎉");
        setScore((prev) => prev + 1);
        triggerConfetti();
      } else {
        setFeedback("Incorrect! 😢");
      }

      setCorrectAnswer(data.correctAnswer);

      const factRes = await fetch(
        `/api/destination/${destination._id}/fun-fact`
      );
      const factData = await factRes.json();
      setFunFact(factData.funFact);

      if (questionCount + 1 === MAX_QUESTIONS) {
        setGameFinished(true);
      }
    } catch (error) {
      console.error("Error checking answer:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (!selectedAnswer) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2500);
      return;
    }

    if (questionCount + 1 >= MAX_QUESTIONS) {
      setGameFinished(true);
      return;
    } else {
      setQuestionCount((prev) => prev + 1);
      fetchRandomDestination();
    }
  };

  const handlePlayAgain = () => {
    setScore(0);
    setQuestionCount(0);
    setGameFinished(false);
    fetchRandomDestination();
  };

  const handleInvite = () => {
    setShowInviteModal(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-screen-xl px-6 md:px-8 lg:px-10 space-y-2 flex flex-col items-center relative"
    >
      {loading && (
        <div className="absolute inset-0 backdrop-blur-sm z-10 flex justify-center items-center m-0">
          <Loader />
        </div>
      )}

      {showNotification && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute top-[10px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 px-6 py-3 rounded-xl border border-red-500/50 bg-gray-900/80 backdrop-blur-sm shadow-lg shadow-red-500/30 text-white text-center"
        >
          <p className="text-lg font-semibold">
            🚫 Please select an answer first!
          </p>
        </motion.div>
      )}

      {destination && (
        <>
          <div className="flex justify-between items-center w-full max-w-4xl">
            <p className="text-lg text-purple-400 font-semibold">
              Question {questionCount + 1} / {MAX_QUESTIONS}
            </p>
            <motion.div
              className="px-4 py-1 rounded-full border border-purple-500/50 bg-gray-800/30 backdrop-blur-sm shadow-lg shadow-purple-500/20"
              key={score}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 tracking-wide">
                Score: <span className="text-xl">{score}</span>
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-4xl"
          >
            <div className="md:grid md:grid-cols-2 md:gap-8 items-start">
              <div className="mb-6 md:mb-0">
                <ClueCard
                  key={questionCount}
                  clues={destination.clues}
                  options={destination.options}
                  onSelect={handleAnswer}
                  selectedAnswer={selectedAnswer}
                  correctAnswer={correctAnswer}
                />
              </div>
              <div className="md:sticky md:top-0">
                {feedback && <Feedback feedback={feedback} funFact={funFact} />}
                {gameFinished && (
                  <div className="mt-4 p-6 rounded-2xl bg-gray-800/30 border-2 border-violet-200/50 backdrop-blur-sm shadow-lg shadow-purple-500/20 text-center md:text-left">
                    <p className="text-lg font-semibold font-mono text-purple-300">
                      Your Final Score:
                    </p>
                    <p className="text-5xl font-extrabold text-purple-400 tracking-wide">
                      {score} / {MAX_QUESTIONS}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {!gameFinished ? (
                !loading &&
                questionCount < MAX_QUESTIONS && (
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-xl border border-purple-500 text-purple-400 bg-transparent hover:border-purple-400 hover:text-purple-300 transition-all duration-300 shadow-md cursor-pointer"
                    onClick={handleNext}
                  >
                    Next Destination 🔄
                  </motion.button>
                )
              ) : (
                <div className="flex justify-center space-x-4">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePlayAgain}
                    className="px-6 py-3 rounded-xl border border-purple-500 text-purple-400 bg-transparent hover:border-purple-400 hover:text-purple-300 transition-all duration-300 cursor-pointer"
                  >
                    Play Again 🔄
                  </motion.button>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleInvite}
                    className="px-6 py-3 rounded-xl border border-purple-500 text-purple-400 bg-transparent hover:border-purple-400 hover:text-purple-300 transition-all duration-300 cursor-pointer"
                  >
                    Challenge a Friend 🚀
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}

      {showInviteModal && (
        <InviteModal
          isOpen={showInviteModal}
          onClose={() => setShowInviteModal(false)}
          score={score}
        />
      )}
    </motion.div>
  );
};

export default GameContainer;
