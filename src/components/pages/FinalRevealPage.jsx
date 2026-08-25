import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { referenceAssets } from '../../config/referenceAssets';
import { scrapbookConfig } from '../../config/scrapbookData';
import { sounds } from '../../utils/audio';

export const FinalRevealPage = ({ onRestart }) => {
  const { finalQuestionPage, recipientName } = scrapbookConfig;
  const [isRevealed, setIsRevealed] = useState(false);

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.7 },
        colors: ['#C92A2A', '#F59E0B', '#10B981', '#3B82F6', '#EC4899', '#FDE047']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.7 },
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

  const handleNo = () => {
    sounds.playAngry();
  };

  const handleRestart = () => {
    sounds.playClick();
    setIsRevealed(false);
    onRestart();
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-4 sm:p-6 text-center select-none">
      {/* Top Heading */}
      <div className="w-full pt-2">
        <h1 className="font-abril text-3xl sm:text-4xl text-neutral-900 leading-tight tracking-wide">
          {finalQuestionPage.question}
        </h1>
      </div>

      {/* Sparkling Shin-chan Artwork (Reference Image) */}
      <div className="relative my-auto flex flex-col justify-center items-center py-2">
        <motion.img
          src={referenceAssets.shinchanSparkle}
          alt="Sparkle Shin-chan"
          className="w-52 h-52 sm:w-60 sm:h-60 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring' }}
        />

        <AnimatePresence>
          {isRevealed && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mt-3 bg-white/95 border-2 border-[#C92A2A] rounded-2xl px-4 py-2 shadow-lg"
            >
              <p className="font-abril text-xl text-[#C92A2A]">
                {finalQuestionPage.celebrationText}
              </p>
              <p className="font-patrick text-base text-neutral-700 mt-0.5">
                Dear {recipientName}, you are the best! 💖
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive YES / NO Buttons or Replay Button */}
      <div className="w-full max-w-[280px] flex gap-3 items-center justify-center pb-4 z-20">
        {!isRevealed ? (
          <>
            <button
              onClick={handleYes}
              className="flex-1 py-3 px-4 rounded-full bg-[#C92A2A] hover:bg-[#B02525] active:scale-95 text-white font-patrick text-xl font-bold shadow-md hover:shadow-lg transition-all duration-150 border-2 border-[#861A22] cursor-pointer"
            >
              {finalQuestionPage.yesButtonText}
            </button>

            <button
              onClick={handleNo}
              className="flex-1 py-3 px-4 rounded-full bg-[#F2ECE0] hover:bg-[#E6DEC8] active:scale-95 text-neutral-700 font-patrick text-xl font-bold shadow-md hover:shadow-lg transition-all duration-150 border-2 border-neutral-300 cursor-pointer"
            >
              {finalQuestionPage.noButtonText}
            </button>
          </>
        ) : (
          <button
            onClick={handleRestart}
            className="w-full py-3 px-6 rounded-full bg-neutral-800 hover:bg-neutral-700 active:scale-95 text-white font-patrick text-lg font-bold shadow-md transition-all cursor-pointer"
          >
            Replay Scrapbook 🔄
          </button>
        )}
      </div>
    </div>
  );
};
