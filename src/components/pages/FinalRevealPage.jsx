import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { referenceAssets } from '../../config/referenceAssets';
import { scrapbookConfig } from '../../config/scrapbookData';
import { sounds } from '../../utils/audio';

export const FinalRevealPage = ({ onRestart, onReadLetter }) => {
  const { finalQuestionPage, recipientName, senderName } = scrapbookConfig;
  const [isRevealed, setIsRevealed] = useState(false);

  const triggerConfetti = () => {
    const duration = 3.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 65,
        origin: { x: 0, y: 0.65 },
        colors: ['#C92A2A', '#F59E0B', '#10B981', '#3B82F6', '#EC4899', '#FDE047']
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 65,
        origin: { x: 1, y: 0.65 },
        colors: ['#C92A2A', '#F59E0B', '#10B981', '#3B82F6', '#EC4899', '#FDE047']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleYes = () => {
    sounds.playTada();
    triggerConfetti();
    setIsRevealed(true);
  };

  const handleRestart = () => {
    sounds.playClick();
    setIsRevealed(false);
    onRestart();
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-3 sm:p-5 text-center select-none overflow-hidden">
      {!isRevealed ? (
        <>
          {/* Pre-Question & Question */}
          <div className="w-full pt-2">
            {finalQuestionPage.preRevealText && (
              <motion.p 
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-handwriting text-lg sm:text-xl text-[#C92A2A] font-bold"
              >
                {finalQuestionPage.preRevealText}
              </motion.p>
            )}
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="font-abril text-2xl sm:text-3xl text-neutral-900 leading-tight tracking-wide mt-1 drop-shadow-sm"
            >
              {finalQuestionPage.question}
            </motion.h1>
          </div>

          {/* Sparkling Shin-chan Artwork (Cheeky / Curious) */}
          <div className="relative my-auto flex flex-col justify-center items-center py-2">
            <motion.div
              animate={{ scale: [0.97, 1.03, 0.97] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src={referenceAssets.shinchanSparkle}
                alt="Sparkle Shin-chan"
                className="w-52 h-52 sm:w-60 sm:h-60 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)]"
              />
            </motion.div>
          </div>

          {/* Interactive Dual YES Buttons (Both Clickable & Celebrate!) */}
          <div className="w-full max-w-[280px] flex gap-3 items-center justify-center pb-3 z-20">
            <button
              onClick={handleYes}
              className="flex-1 py-3 px-4 rounded-full bg-[#C92A2A] hover:bg-[#B02525] active:scale-95 text-white font-patrick text-xl font-bold shadow-md hover:shadow-lg transition-all duration-150 border-2 border-[#861A22] cursor-pointer animate-pulse"
            >
              {finalQuestionPage.yesButtonText || "YES ❤️"}
            </button>

            <button
              onClick={handleYes}
              className="flex-1 py-3 px-4 rounded-full bg-[#F2ECE0] hover:bg-[#E6DEC8] active:scale-95 text-[#C92A2A] font-patrick text-xl font-bold shadow-md hover:shadow-lg transition-all duration-150 border-2 border-[#C92A2A]/40 cursor-pointer animate-pulse"
            >
              {finalQuestionPage.secondYesButtonText || "YES ✨"}
            </button>
          </div>
        </>
      ) : (
        /* ========================================================================= */
        /* LAYERED GRAND FINALE CELEBRATION */
        /* ========================================================================= */
        <motion.div
          key="finale-celebration"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="w-full h-full flex flex-col justify-between items-center"
        >
          {/* Main Grand Festival Celebration Header */}
          <div className="w-full pt-1">
            <motion.div
              initial={{ scale: 0, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 18 }}
              className="bg-white/95 border-2 border-[#C92A2A] rounded-2xl p-3 sm:p-4 shadow-scrapbook"
            >
              <h1 className="font-abril text-2xl sm:text-3xl text-[#C92A2A] leading-tight tracking-wide drop-shadow-sm">
                {finalQuestionPage.mainCelebration || `Happy Rakshabandhan, ${recipientName || "Khushi Didi"}! ❤️✨`}
              </h1>
              <p className="font-handwriting text-lg sm:text-xl text-neutral-800 font-bold mt-1">
                {finalQuestionPage.fromSignature || `— ${senderName || "Bhai Om"}`}
              </p>
            </motion.div>
          </div>

          {/* Center Shin-chan Celebration Artwork + Sparkles */}
          <div className="relative my-auto flex flex-col justify-center items-center py-1">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.25, type: "spring", stiffness: 260, damping: 15 }}
              className="relative"
            >
              {/* Anime Sparkles */}
              <motion.span
                animate={{ scale: [0.8, 1.4, 0.8], rotate: [0, 180, 360] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -top-3 -left-3 text-2xl pointer-events-none z-20"
              >
                ✨
              </motion.span>
              <motion.span
                animate={{ scale: [0.8, 1.4, 0.8], rotate: [0, -180, -360] }}
                transition={{ duration: 1.5, delay: 0.4, repeat: Infinity }}
                className="absolute -top-3 -right-3 text-2xl pointer-events-none z-20"
              >
                🎉
              </motion.span>

              <img
                src={referenceAssets.shinchanCelebration || referenceAssets.shinchanSparkle}
                alt="Excited Shin-chan Celebration"
                className="w-48 h-48 sm:w-56 sm:h-56 object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.22)]"
              />
            </motion.div>

            {/* Small Final Handwritten Line */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="font-patrick text-sm sm:text-base text-neutral-600 font-semibold mt-1 bg-amber-50/90 px-3 py-0.5 rounded-full border border-amber-200 shadow-sm"
            >
              {finalQuestionPage.smallNote || "Made with love ❤️"}
            </motion.p>
          </div>

          {/* Final Controls Area */}
          <div className="w-full max-w-[280px] flex flex-col gap-2 pb-2 z-20">
            <button
              onClick={handleRestart}
              className="w-full py-2.5 px-4 rounded-full bg-[#C92A2A] hover:bg-[#B02525] active:scale-95 text-white font-patrick text-base font-bold shadow-md hover:shadow-lg transition-all duration-150 border-2 border-[#861A22] cursor-pointer"
            >
              {finalQuestionPage.restartButtonText || "Watch it again ↻"}
            </button>

            {onReadLetter && (
              <button
                onClick={() => {
                  sounds.playPageTurn();
                  onReadLetter();
                }}
                className="w-full py-1.5 px-4 rounded-full bg-amber-100 hover:bg-amber-200 active:scale-95 text-amber-950 font-patrick text-xs sm:text-sm font-bold shadow-sm transition-all border border-amber-300 cursor-pointer"
              >
                {finalQuestionPage.readLetterButtonText || "Read the letter again 💌"}
              </button>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};
