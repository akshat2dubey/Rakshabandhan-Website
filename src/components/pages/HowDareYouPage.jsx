import React from 'react';
import { motion } from 'framer-motion';
import { ShinchanAngry } from '../ui/ShinchanArtwork';
import { WashiTape, StampBadge } from '../ui/ScrapbookDecorations';
import { scrapbookConfig } from '../../config/scrapbookData';
import { sounds } from '../../utils/audio';

export const HowDareYouPage = ({ onRetry }) => {
  const { howDareYouPage } = scrapbookConfig;

  const handleRetry = () => {
    sounds.playPop();
    onRetry();
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-4 sm:p-6 text-center select-none bg-rose-50/30">
      {/* Top Tape & Badges */}
      <div className="w-full flex justify-between items-start mb-1">
        <WashiTape color="red" width="w-20" rotate="5deg" />
        <StampBadge text="DRAMA ALERT ⚠️" color="red" className="animate-bounce" />
        <WashiTape color="red" width="w-20" rotate="-3deg" />
      </div>

      {/* Dramatic Heading */}
      <motion.div
        initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
        animate={{ scale: [1, 1.15, 1], rotate: [0, -3, 3, 0], opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="my-2"
      >
        <h1 className="font-abril text-3xl sm:text-4xl text-red-600 tracking-wider drop-shadow-md">
          {howDareYouPage.title}
        </h1>
        <p className="font-patrick text-base sm:text-lg text-neutral-800 font-bold mt-1">
          {howDareYouPage.subtitle}
        </p>
      </motion.div>

      {/* Angry Shin-chan Animation */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="relative my-auto flex justify-center items-center py-2"
      >
        <ShinchanAngry className="w-44 h-44 sm:w-52 sm:h-52" animated={true} />

        {/* Dramatic Speech Bubble */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: 'spring' }}
          className="absolute -top-4 -right-2 sm:-right-4 bg-red-600 text-white font-patrick text-xs sm:text-sm font-bold px-3 py-1.5 rounded-2xl shadow-lg border-2 border-white transform rotate-6 max-w-[140px]"
        >
          {howDareYouPage.shinchanAngryQuote}
          <div className="absolute -bottom-2 left-4 w-3 h-3 bg-red-600 border-r-2 border-b-2 border-white transform rotate-45" />
        </motion.div>
      </motion.div>

      {/* Forgiveness / Retry Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="w-full max-w-xs mt-3 z-20"
      >
        <button
          onClick={handleRetry}
          className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-400 hover:to-red-400 text-white font-patrick text-lg font-bold shadow-lg hover:shadow-amber-500/30 transform hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-amber-600 flex items-center justify-center gap-2 cursor-pointer animate-pulse-slow"
        >
          {howDareYouPage.retryButtonText}
        </button>
      </motion.div>

      {/* Bottom Tape */}
      <div className="w-full flex justify-center mt-2">
        <WashiTape color="pink" width="w-24" rotate="2deg" />
      </div>
    </div>
  );
};
