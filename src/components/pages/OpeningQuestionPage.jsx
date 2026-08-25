import React from 'react';
import { motion } from 'framer-motion';
import { referenceAssets } from '../../config/referenceAssets';
import { scrapbookConfig } from '../../config/scrapbookData';
import { sounds } from '../../utils/audio';

export const OpeningQuestionPage = ({ onYes, onNo }) => {
  const { openingPage } = scrapbookConfig;

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
      {/* Top Decorative Space */}
      <div className="w-full pt-2">
        <h1 className="font-abril text-2xl sm:text-3xl text-neutral-900 leading-tight tracking-wide drop-shadow-sm">
          {openingPage.question}
        </h1>
      </div>

      {/* Prominent Shin-chan Artwork (Reference Image) */}
      <div className="relative my-auto flex flex-col justify-center items-center py-2">
        <motion.img
          src={referenceAssets.shinchanOpening}
          alt="Shin-chan"
          className="w-48 h-48 sm:w-56 sm:h-56 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 15 }}
        />

        {/* Shiro Companion Sticker */}
        <motion.img
          src={referenceAssets.shiro}
          alt="Shiro"
          className="absolute -bottom-2 -right-4 w-20 h-20 sm:w-24 sm:h-24 object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)] transform rotate-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        />
      </div>

      {/* Interactive YES / NO Choice Area */}
      <div className="w-full max-w-[280px] flex gap-3 items-center justify-center pb-4 z-20">
        <button
          onClick={handleYes}
          className="flex-1 py-3 px-4 rounded-full bg-[#C92A2A] hover:bg-[#B02525] active:scale-95 text-white font-patrick text-xl font-bold shadow-md hover:shadow-lg transition-all duration-150 border-2 border-[#861A22] cursor-pointer"
        >
          {openingPage.yesButtonText}
        </button>

        <button
          onClick={handleNo}
          className="flex-1 py-3 px-4 rounded-full bg-[#F2ECE0] hover:bg-[#E6DEC8] active:scale-95 text-neutral-700 font-patrick text-xl font-bold shadow-md hover:shadow-lg transition-all duration-150 border-2 border-neutral-300 cursor-pointer"
        >
          {openingPage.noButtonText}
        </button>
      </div>
    </div>
  );
};
