import React from 'react';
import { motion } from 'framer-motion';
import { ShinchanWaving, ShiroSticker } from '../ui/ShinchanArtwork';
import { WashiTape, StampBadge } from '../ui/ScrapbookDecorations';
import { scrapbookConfig } from '../../config/scrapbookData';
import { sounds } from '../../utils/audio';

export const OpeningQuestionPage = ({ onYes, onNo }) => {
  const { openingPage, recipientName } = scrapbookConfig;

  const handleYes = () => {
    sounds.playPop();
    onYes();
  };

  const handleNo = () => {
    sounds.playAngry();
    onNo();
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-4 sm:p-6 text-center select-none">
      {/* Top Washi Tape & Stamp */}
      <div className="w-full flex justify-between items-start mb-2">
        <WashiTape color="gingham" width="w-20" rotate="-4deg" />
        <StampBadge text="FOR YOU ❤️" color="red" />
        <WashiTape color="pink" width="w-20" rotate="3deg" />
      </div>

      {/* Recipient Greeting */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-1"
      >
        <span className="font-handwriting text-xl sm:text-2xl text-red-700 font-bold tracking-wider">
          Hey {recipientName}! ✨
        </span>
      </motion.div>

      {/* Large Handwritten Question */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="my-2"
      >
        <h1 className="font-abril text-2xl sm:text-3xl text-neutral-900 leading-tight drop-shadow-sm">
          {openingPage.question}
        </h1>
        <p className="font-patrick text-base sm:text-lg text-neutral-700 mt-1">
          {openingPage.subQuestion}
        </p>
      </motion.div>

      {/* Shin-chan Centerpiece Artwork */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.35, type: 'spring', stiffness: 180 }}
        className="relative my-auto flex justify-center items-center py-2"
      >
        <ShinchanWaving className="w-40 h-40 sm:w-48 sm:h-48" animated={true} />
        
        {/* Shiro peeking from bottom right */}
        <div className="absolute -bottom-2 -right-4">
          <ShiroSticker className="w-16 h-16 sm:w-20 sm:h-20" />
        </div>

        {/* Speech Bubble */}
        <div className="absolute -top-3 -right-3 sm:-right-6 bg-white/95 border-2 border-neutral-800 rounded-2xl px-3 py-1 shadow-md font-patrick text-xs sm:text-sm text-neutral-800 transform rotate-6">
          {openingPage.shinchanQuote}
          <div className="absolute -bottom-2 left-3 w-2 h-2 bg-white border-r-2 border-b-2 border-neutral-800 transform rotate-45" />
        </div>
      </motion.div>

      {/* Interactive YES / NO Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="w-full max-w-xs flex flex-col sm:flex-row gap-3 items-center justify-center mt-2 z-20"
      >
        <button
          onClick={handleYes}
          className="w-full sm:w-1/2 py-2.5 px-4 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-patrick text-lg font-bold shadow-lg hover:shadow-red-500/30 transform hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-red-700 flex items-center justify-center gap-1 cursor-pointer"
        >
          {openingPage.yesButtonText}
        </button>

        <button
          onClick={handleNo}
          className="w-full sm:w-1/2 py-2.5 px-4 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-patrick text-lg font-bold shadow-md hover:shadow-neutral-400/20 transform hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-neutral-300 flex items-center justify-center gap-1 cursor-pointer"
        >
          {openingPage.noButtonText}
        </button>
      </motion.div>

      {/* Bottom Washi Tape */}
      <div className="w-full flex justify-center mt-2">
        <WashiTape color="yellow" width="w-24" rotate="-1deg" />
      </div>
    </div>
  );
};
