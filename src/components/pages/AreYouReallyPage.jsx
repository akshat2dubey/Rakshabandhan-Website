import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { referenceAssets } from '../../config/referenceAssets';
import { scrapbookConfig } from '../../config/scrapbookData';
import { sounds } from '../../utils/audio';

export const AreYouReallyPage = ({ onYes }) => {
  const { areYouReallyPage } = scrapbookConfig;
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [isPleading, setIsPleading] = useState(false);

  const handleYes = () => {
    sounds.playPop();
    onYes();
  };

  const dodgeNoButton = () => {
    sounds.playBoing();
    setIsPleading(true);
    const randomX = (Math.random() - 0.5) * 150;
    const randomY = (Math.random() - 0.5) * 80;
    setNoPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-4 sm:p-6 text-center select-none">
      {/* Top Heading */}
      <div className="w-full pt-2">
        <h1 className="font-abril text-2xl sm:text-3xl text-neutral-900 leading-tight tracking-wide">
          {areYouReallyPage.question}
        </h1>
      </div>

      {/* Shin-chan Artwork (Cheeky Smile -> Sparkling Puppy Eyes on NO Dodge) */}
      <div className="relative my-auto flex flex-col justify-center items-center py-2 min-h-[240px]">
        <AnimatePresence mode="wait">
          {!isPleading ? (
            /* Cheeky Anime Smile Pose */
            <motion.div
              key="cheeky-smile"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative"
            >
              <img
                src={referenceAssets.shinchanThinking}
                alt="Cheeky Shin-chan Smile"
                className="w-48 h-48 sm:w-56 sm:h-56 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)]"
              />
            </motion.div>
          ) : (
            /* Sparkling Pleading Puppy Eyes (Anime Sparkly Eyes ✨_✨) */
            <motion.div
              key="sparkly-eyes"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: [1, 1.05, 1], opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Floating Anime Sparkles */}
              <motion.div
                animate={{ scale: [0.8, 1.4, 0.8], rotate: [0, 180, 360] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="absolute -top-3 left-4 text-2xl pointer-events-none z-20"
              >
                ✨
              </motion.div>
              <motion.div
                animate={{ scale: [0.8, 1.4, 0.8], rotate: [0, -180, -360] }}
                transition={{ duration: 1.2, delay: 0.4, repeat: Infinity }}
                className="absolute -top-3 right-4 text-2xl pointer-events-none z-20"
              >
                ✨
              </motion.div>

              <img
                src={referenceAssets.shinchanSparkle}
                alt="Sparkly Eyes Shin-chan"
                className="w-48 h-48 sm:w-56 sm:h-56 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)]"
              />

              {/* Pleading Speech Bubble */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-amber-50 border-2 border-[#C92A2A] text-[#C92A2A] font-patrick text-xs sm:text-sm font-bold px-3 py-0.5 rounded-full shadow-md whitespace-nowrap z-20"
              >
                Please say YES! 🥺✨
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive YES & Dodging NO Area */}
      <div className="w-full max-w-[280px] min-h-[90px] flex gap-3 items-center justify-center pb-4 z-20 relative">
        <button
          onClick={handleYes}
          className="flex-1 py-3 px-4 rounded-full bg-[#C92A2A] hover:bg-[#B02525] active:scale-95 text-white font-patrick text-xl font-bold shadow-md hover:shadow-lg transition-all duration-150 border-2 border-[#861A22] cursor-pointer z-10"
        >
          {areYouReallyPage.yesButtonText}
        </button>

        <motion.button
          animate={{ x: noPosition.x, y: noPosition.y }}
          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          onMouseEnter={dodgeNoButton}
          onTouchStart={dodgeNoButton}
          onClick={dodgeNoButton}
          className="flex-1 py-3 px-4 rounded-full bg-[#F2ECE0] hover:bg-[#E6DEC8] text-neutral-700 font-patrick text-xl font-bold shadow-md border-2 border-neutral-300 cursor-pointer select-none"
        >
          {areYouReallyPage.noButtonText}
        </motion.button>
      </div>
    </div>
  );
};
