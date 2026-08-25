import React from 'react';
import { motion } from 'framer-motion';
import { ShinchanCenter } from '../ui/ShinchanArtwork';
import { WashiTape, StampBadge } from '../ui/ScrapbookDecorations';
import { scrapbookConfig } from '../../config/scrapbookData';
import { sounds } from '../../utils/audio';

export const YouAreMyPage = ({ onBack }) => {
  const { youAreMyPage } = scrapbookConfig;

  const handleBack = () => {
    sounds.playPageTurn();
    onBack();
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-5 select-none overflow-y-auto no-scrollbar">
      {/* Top Bar */}
      <div className="w-full flex items-center justify-between mb-1">
        <WashiTape color="pink" width="w-20" rotate="3deg" />
        <StampBadge text="RELATIONSHIP STATS 📊" color="red" />
        <WashiTape color="yellow" width="w-20" rotate="-2deg" />
      </div>

      {/* Heading */}
      <div className="text-center my-1">
        <h1 className="font-abril text-2xl sm:text-3xl text-red-700 tracking-wider">
          {youAreMyPage.title}
        </h1>
        <p className="font-handwriting text-sm text-neutral-600 font-semibold">
          {youAreMyPage.subtitle}
        </p>
      </div>

      {/* Scattered Scrapbook Interactive Diagram */}
      <div className="relative w-full flex-1 my-2 min-h-[380px] bg-amber-50/50 rounded-2xl border-2 border-dashed border-red-200 overflow-hidden flex items-center justify-center">
        
        {/* Center Shin-chan Character */}
        <div className="relative z-10">
          <ShinchanCenter className="w-36 h-36 sm:w-44 sm:h-44" animated={true} />
        </div>

        {/* Scattered Handwritten Stickers with Arrows */}
        {/* Top-Left: Google Maps */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="absolute top-2 left-2 z-20"
        >
          <div className="bg-red-100 border border-red-300 px-2.5 py-1 rounded-xl shadow-sm transform -rotate-6">
            <span className="font-patrick text-xs sm:text-sm font-bold text-red-800">
              google maps 🗺️
            </span>
          </div>
          {/* Hand-drawn arrow indicator */}
          <div className="text-red-400 font-patrick text-xs pl-2 transform rotate-12">
            ➔ (finds everything)
          </div>
        </motion.div>

        {/* Top-Right: My Lifeline */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute top-2 right-2 z-20 text-right"
        >
          <div className="bg-rose-100 border border-rose-300 px-2.5 py-1 rounded-xl shadow-sm transform rotate-4">
            <span className="font-patrick text-xs sm:text-sm font-bold text-rose-800">
              my lifeline ❤️
            </span>
          </div>
          <div className="text-rose-400 font-patrick text-xs pr-2 transform -rotate-6">
            (always got my back) ➔
          </div>
        </motion.div>

        {/* Middle-Left: Food/Clothes Stealer */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute top-[38%] left-1 z-20"
        >
          <div className="bg-orange-100 border border-orange-300 px-2 py-0.5 rounded-lg shadow-sm transform rotate-3 max-w-[130px]">
            <span className="font-patrick text-[11px] sm:text-xs font-bold text-orange-900 leading-tight block">
              food/clothes stealer 🍟👗
            </span>
          </div>
        </motion.div>

        {/* Middle-Right: Bank Account */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute top-[38%] right-1 z-20 text-right"
        >
          <div className="bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-lg shadow-sm transform -rotate-4 max-w-[130px]">
            <span className="font-patrick text-[11px] sm:text-xs font-bold text-emerald-900 leading-tight block">
              bank account 💳💸
            </span>
          </div>
        </motion.div>

        {/* Bottom-Left: Crybaby */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-10 left-2 z-20"
        >
          <div className="bg-blue-100 border border-blue-300 px-2.5 py-1 rounded-xl shadow-sm transform -rotate-6">
            <span className="font-patrick text-xs sm:text-sm font-bold text-blue-800">
              crybaby 🥺
            </span>
          </div>
          <div className="text-blue-400 font-patrick text-[10px] pl-1">
            (cries at movie reels)
          </div>
        </motion.div>

        {/* Bottom-Right: Entertainment */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-10 right-2 z-20 text-right"
        >
          <div className="bg-purple-100 border border-purple-300 px-2.5 py-1 rounded-xl shadow-sm transform rotate-6">
            <span className="font-patrick text-xs sm:text-sm font-bold text-purple-800">
              entertainment 🍿
            </span>
          </div>
          <div className="text-purple-400 font-patrick text-[10px] pr-1">
            (24/7 free comedy)
          </div>
        </motion.div>

        {/* Center Bottom: Bestie */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20 text-center"
        >
          <div className="bg-pink-100 border-2 border-pink-400 px-3 py-1 rounded-full shadow-md">
            <span className="font-patrick text-xs sm:text-sm font-black text-pink-900">
              ✨ BESTIE FOR LIFE 👯‍♀️ ✨
            </span>
          </div>
        </motion.div>
      </div>

      {/* Back to Gifts Button */}
      <div className="w-full pt-2 flex justify-center z-20">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleBack}
          className="w-full max-w-xs py-2.5 px-4 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white font-patrick text-base sm:text-lg font-bold shadow-md flex items-center justify-center gap-2 cursor-pointer"
        >
          {youAreMyPage.backButtonText}
        </motion.button>
      </div>
    </div>
  );
};
