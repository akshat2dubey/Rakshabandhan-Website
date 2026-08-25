import React from 'react';
import { motion } from 'framer-motion';
import { referenceAssets } from '../../config/referenceAssets';
import { scrapbookConfig } from '../../config/scrapbookData';
import { sounds } from '../../utils/audio';

export const HowDareYouPage = ({ onRetry }) => {
  const { howDareYouPage } = scrapbookConfig;

  const handleRetry = () => {
    sounds.playPop();
    onRetry();
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-4 sm:p-6 text-center select-none bg-rose-50/20">
      {/* Heading */}
      <div className="w-full pt-4">
        <motion.h1 
          initial={{ scale: 0.8 }}
          animate={{ scale: [1, 1.08, 1], rotate: [-2, 2, 0] }}
          transition={{ duration: 0.5 }}
          className="font-abril text-3xl sm:text-4xl text-[#C92A2A] tracking-wider drop-shadow-sm"
        >
          {howDareYouPage.title}
        </motion.h1>
      </div>

      {/* Angry Shin-chan Artwork (Reference Image) */}
      <div className="relative my-auto flex justify-center items-center py-2">
        <motion.img
          src={referenceAssets.shinchanAngry}
          alt="Angry Shin-chan"
          className="w-52 h-52 sm:w-60 sm:h-60 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
          initial={{ scale: 0.8, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 220 }}
        />
      </div>

      {/* Return / Retry Button */}
      <div className="w-full max-w-[240px] pb-4 z-20">
        <button
          onClick={handleRetry}
          className="w-full py-3 px-6 rounded-full bg-[#C92A2A] hover:bg-[#B02525] active:scale-95 text-white font-patrick text-xl font-bold shadow-md hover:shadow-lg transition-all duration-150 border-2 border-[#861A22] cursor-pointer"
        >
          {howDareYouPage.retryButtonText}
        </button>
      </div>
    </div>
  );
};
