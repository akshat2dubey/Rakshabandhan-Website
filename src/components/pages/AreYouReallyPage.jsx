import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShinchanThinking } from '../ui/ShinchanArtwork';
import { WashiTape, StampBadge } from '../ui/ScrapbookDecorations';
import { scrapbookConfig } from '../../config/scrapbookData';
import { sounds } from '../../utils/audio';

export const AreYouReallyPage = ({ onYes }) => {
  const { areYouReallyPage } = scrapbookConfig;
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [dodgeCount, setDodgeCount] = useState(0);

  const handleYes = () => {
    sounds.playPop();
    onYes();
  };

  const dodgeNoButton = () => {
    sounds.playBoing();
    // Random offset within safe bounds
    const randomX = (Math.random() - 0.5) * 160;
    const randomY = (Math.random() - 0.5) * 100;
    setNoPosition({ x: randomX, y: randomY });
    setDodgeCount(prev => prev + 1);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-4 sm:p-6 text-center select-none">
      {/* Top Washi Tape & Stamp */}
      <div className="w-full flex justify-between items-start mb-2">
        <WashiTape color="mint" width="w-20" rotate="-3deg" />
        <StampBadge text="QUESTION 02 ❓" color="amber" />
        <WashiTape color="yellow" width="w-20" rotate="4deg" />
      </div>

      {/* Large Handwritten Question */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-2"
      >
        <h1 className="font-abril text-2xl sm:text-3xl text-neutral-900 leading-tight">
          {areYouReallyPage.question}
        </h1>
        <p className="font-patrick text-base sm:text-lg text-red-700 font-bold mt-1">
          {areYouReallyPage.subQuestion}
        </p>
      </motion.div>

      {/* Thinking Shin-chan */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 180 }}
        className="relative my-auto flex justify-center items-center py-2"
      >
        <ShinchanThinking className="w-40 h-40 sm:w-48 sm:h-48" animated={true} />

        {/* Playful Dodging Hint */}
        {dodgeCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-3 bg-amber-100 border border-amber-400 text-amber-900 font-patrick text-xs font-bold px-2.5 py-1 rounded-full shadow-sm"
          >
            {dodgeCount >= 3 ? "Hehe, can't catch me! 🏃‍♂️💨" : "Oops! Too slow! 😜"}
          </motion.div>
        )}
      </motion.div>

      {/* Interactive YES & Dodging NO Buttons */}
      <div className="w-full max-w-xs flex flex-col sm:flex-row gap-3 items-center justify-center mt-2 z-20 relative min-h-[100px]">
        {/* YES Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleYes}
          className="w-full sm:w-1/2 py-2.5 px-4 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-patrick text-lg font-bold shadow-lg hover:shadow-red-500/30 border-2 border-red-700 flex items-center justify-center gap-1 cursor-pointer z-10"
        >
          {areYouReallyPage.yesButtonText}
        </motion.button>

        {/* Dodging NO Button */}
        <motion.button
          animate={{ x: noPosition.x, y: noPosition.y }}
          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          onMouseEnter={dodgeNoButton}
          onTouchStart={dodgeNoButton}
          onClick={dodgeNoButton}
          className="w-full sm:w-1/2 py-2.5 px-4 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 font-patrick text-base font-bold shadow-md border-2 border-neutral-300 flex items-center justify-center gap-1 cursor-pointer select-none"
        >
          {areYouReallyPage.noButtonText}
        </motion.button>
      </div>

      {/* Bottom Hint */}
      <div className="w-full flex justify-center mt-1">
        <span className="font-handwriting text-xs text-neutral-500">
          {areYouReallyPage.dodgingNoHint}
        </span>
      </div>
    </div>
  );
};
