import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { referenceAssets } from '../../config/referenceAssets';
import { scrapbookConfig } from '../../config/scrapbookData';
import { sounds } from '../../utils/audio';

export const AreYouReallyPage = ({ onYes }) => {
  const { areYouReallyPage } = scrapbookConfig;
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const handleYes = () => {
    sounds.playPop();
    onYes();
  };

  const dodgeNoButton = () => {
    sounds.playBoing();
    const randomX = (Math.random() - 0.5) * 140;
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

      {/* Thinking Shin-chan Artwork (Reference Image) */}
      <div className="relative my-auto flex justify-center items-center py-2">
        <motion.img
          src={referenceAssets.shinchanThinking}
          alt="Thinking Shin-chan"
          className="w-48 h-48 sm:w-56 sm:h-56 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring' }}
        />
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
