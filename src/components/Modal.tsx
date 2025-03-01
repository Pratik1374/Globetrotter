import { ReactNode } from "react";
import { motion } from "framer-motion";

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.1, color: "#A855F7" }}
        className="absolute top-4 right-4 text-gray-400"
        onClick={onClose}
      >
        ✖
      </motion.button>
    </motion.div>
  );
};

export default Modal;
