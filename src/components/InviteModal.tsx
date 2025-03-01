import { useState, useEffect } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion";

const InviteModal = ({
  isOpen,
  onClose,
  score,
}: {
  isOpen: boolean;
  onClose: () => void;
  score: number;
}) => {
  const [username, setUsername] = useState("");
  const [inviteLink, setInviteLink] = useState("");
  const [imageDataUrl, setImageDataUrl] = useState("");
  const [error, setError] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setUsername("");
      setInviteLink("");
      setImageDataUrl("");
      setError("");
      setIsCopied(false);
    }
  }, [isOpen]);

  const generateInviteLink = () => {
    if (!username.trim()) {
      setError("Username is required.");
      return;
    }
    if (
      username.length < 3 ||
      username.length > 20 ||
      !/^[a-zA-Z0-9_]+$/.test(username)
    ) {
      setError(
        "Username must be 3-20 characters (letters, numbers, underscores)."
      );
      return;
    }
    const link = `${window.location.origin}/play?invitedBy=${encodeURIComponent(
      username
    )}&score=${score}`;
    setInviteLink(link);
    generateDynamicImage();
    setError("");
  };

  const generateDynamicImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 200;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const backgroundImage = new Image();
    backgroundImage.src = "/invite-bg.webp";

    backgroundImage.onload = () => {
      ctx.filter = "blur(2px)";
      ctx.drawImage(backgroundImage, 0, 0, 400, 200);
      ctx.filter = "none";

      const gradient = ctx.createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(0, "rgba(30, 0, 60, 0.5)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.8)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 400, 200);

      ctx.textAlign = "center";

      ctx.font = "bold 28px sans-serif";
      ctx.fillStyle = "#A855F7";
      ctx.shadowColor = "#A855F7";
      ctx.shadowBlur = 10;
      ctx.fillText(`${username}'s Challenge!`, 200, 60);

      ctx.font = "bold 20px sans-serif";
      ctx.fillStyle = "#D8B4FE";
      ctx.shadowBlur = 8;
      ctx.fillText(`Score: ${score}`, 200, 100);

      ctx.font = "italic 18px sans-serif";
      ctx.fillStyle = "#FFFFFF";
      ctx.shadowBlur = 4;
      ctx.fillText("Play Now!", 200, 140);

      ctx.font = "32px sans-serif";
      ctx.fillStyle = "#FFD700";
      ctx.shadowBlur = 12;
      ctx.fillText("🌍", 350, 180);

      setImageDataUrl(canvas.toDataURL("image/png"));
    };

    backgroundImage.onerror = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(0, "rgba(30, 0, 60, 0.8)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.9)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 400, 200);

      ctx.textAlign = "center";
      ctx.font = "bold 28px sans-serif";
      ctx.fillStyle = "#A855F7";
      ctx.shadowColor = "#A855F7";
      ctx.shadowBlur = 10;
      ctx.fillText(`${username}'s Challenge!`, 200, 60);

      ctx.font = "bold 20px sans-serif";
      ctx.fillStyle = "#D8B4FE";
      ctx.shadowBlur = 8;
      ctx.fillText(`Score: ${score}`, 200, 100);

      ctx.font = "italic 18px sans-serif";
      ctx.fillStyle = "#FFFFFF";
      ctx.shadowBlur = 4;
      ctx.fillText("Play Now!", 200, 140);

      ctx.font = "32px sans-serif";
      ctx.fillStyle = "#FFD700";
      ctx.shadowBlur = 12;
      ctx.fillText("🌍", 350, 180);

      setImageDataUrl(canvas.toDataURL("image/png"));
    };
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleWhatsAppShare = async () => {
    if (!imageDataUrl || !inviteLink) return;

    try {
      const response = await fetch(imageDataUrl);
      const blob = await response.blob();
      const file = new File([blob], "globetrotter-invite.png", {
        type: "image/png",
      });

      const shareData: ShareData = {
        title: `${username}'s Challenge!`,
        text: `${username} challenges you! 🚀\nScore: ${score}\nJoin here: ${inviteLink}`,
        files: [file],
        url: inviteLink
      };

      if (navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        // Fallback: Open WhatsApp manually with text + link
        const whatsappURL = `https://wa.me/?text=${encodeURIComponent(
          `${username} challenges you! 🚀\nScore: ${score}\nJoin here: ${inviteLink}`
        )}`;
        window.open(whatsappURL, "_blank");
      }
    } catch (error) {
      console.error("Image sharing failed", error);
      alert("Failed to share the invite.");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="p-6 rounded-2xl bg-gray-800/50 border border-purple-500/50 backdrop-blur-sm shadow-lg shadow-purple-500/20 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Challenge a Friend! 🚀
        </h2>

        {!inviteLink ? (
          <>
            <motion.input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-4 py-3 mb-4 rounded-xl bg-transparent border border-purple-500/50 text-purple-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all duration-300 placeholder-purple-600/50"
              whileFocus={{ boxShadow: "0 0 12px rgba(168, 85, 247, 0.4)" }}
            />
            {error && <p className="text-red-400 mb-4">{error}</p>}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={generateInviteLink}
              className="w-full px-6 py-3 rounded-xl border border-purple-500 text-purple-400 bg-transparent hover:border-purple-400 hover:text-purple-300 transition-all duration-300 cursor-pointer"
            >
              Generate Link ✨
            </motion.button>
          </>
        ) : (
          <div className="space-y-6">
            <p className="text-purple-300">Share your challenge:</p>
            {imageDataUrl && (
              <motion.img
                src={imageDataUrl}
                alt="Challenge Invite"
                className="w-full rounded-xl border border-purple-500/50 shadow-lg shadow-purple-500/20"
                whileHover={{ scale: 1.03 }}
              />
            )}
            <input
              type="text"
              value={inviteLink}
              readOnly
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-purple-500/50 text-purple-300"
            />
            <div className="flex space-x-4">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyLink}
                className={`flex-1 px-4 py-3 rounded-xl border ${
                  isCopied
                    ? "border-green-400 text-green-400"
                    : "border-purple-500 text-purple-400"
                } bg-transparent hover:border-purple-400 hover:text-purple-300 transition-all duration-300 cursor-pointer`}
              >
                {isCopied ? "Copied! ✅" : "Copy Link 📋"}
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppShare}
                className="flex-1 px-4 py-3 rounded-xl border border-purple-500 text-purple-400 bg-transparent hover:border-purple-400 hover:text-purple-300 transition-all duration-300 cursor-pointer"
              >
                Share 📱
              </motion.button>
            </div>
          </div>
        )}
      </motion.div>
    </Modal>
  );
};

export default InviteModal;
