import React from 'react';
import { motion } from 'framer-motion';
import { referenceAssets } from '../../config/referenceAssets';
import { scrapbookConfig } from '../../config/scrapbookData';
import { WashiTape } from '../ui/ScrapbookDecorations';
import { sounds } from '../../utils/audio';

export const MemoriesPage = ({ onNext }) => {
  const { memoriesPage } = scrapbookConfig;

  const handleNext = () => {
    sounds.playPageTurn();
    onNext();
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-4 select-none overflow-hidden">
      {/* Title */}
      <div className="w-full text-center pt-1 z-20">
        <h1 className="font-abril text-3xl sm:text-4xl text-[#C92A2A] tracking-widest drop-shadow-sm">
          {memoriesPage.title}
        </h1>
      </div>

      {/* Physical Handmade Scrapbook Collage (Manual Layered Placement) */}
      <div className="relative w-full flex-1 my-1 overflow-hidden">
        {/* Photo 1 (Top Left) */}
        <motion.div
          initial={{ opacity: 0, rotate: -12, scale: 0.9 }}
          animate={{ opacity: 1, rotate: -6, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute top-1 left-1 w-[49%] max-w-[170px] bg-white p-2 pb-3 rounded-sm shadow-polaroid border border-neutral-200 z-10"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2">
            <WashiTape color="yellow" width="w-16" rotate="-2deg" />
          </div>
          <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden rounded-[1px]">
            <img 
              src={memoriesPage.photos[0].src} 
              alt={memoriesPage.photos[0].caption}
              className="w-full h-full object-cover" 
            />
          </div>
          <p className="font-patrick text-xs sm:text-sm font-semibold text-neutral-800 text-center mt-1.5 truncate">
            {memoriesPage.photos[0].caption}
          </p>
        </motion.div>

        {/* Photo 2 (Top Right) */}
        <motion.div
          initial={{ opacity: 0, rotate: 12, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 5, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="absolute top-4 right-1 w-[49%] max-w-[170px] bg-white p-2 pb-3 rounded-sm shadow-polaroid border border-neutral-200 z-10"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2">
            <WashiTape color="pink" width="w-16" rotate="3deg" />
          </div>
          <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden rounded-[1px]">
            <img 
              src={memoriesPage.photos[1].src} 
              alt={memoriesPage.photos[1].caption}
              className="w-full h-full object-cover" 
            />
          </div>
          <p className="font-patrick text-xs sm:text-sm font-semibold text-neutral-800 text-center mt-1.5 truncate">
            {memoriesPage.photos[1].caption}
          </p>
        </motion.div>

        {/* Center Chocobi Sticker */}
        <motion.img
          src={referenceAssets.chocobi}
          alt="Chocobi"
          className="absolute top-[40%] left-[38%] -translate-x-1/2 -translate-y-1/2 w-16 h-20 object-contain z-20 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)] transform -rotate-12 pointer-events-none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        />

        {/* Photo 3 (Bottom Left) */}
        <motion.div
          initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
          animate={{ opacity: 1, rotate: -3, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="absolute bottom-2 left-2 w-[48%] max-w-[165px] bg-white p-2 pb-3 rounded-sm shadow-polaroid border border-neutral-200 z-10"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2">
            <WashiTape color="mint" width="w-16" rotate="-4deg" />
          </div>
          <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden rounded-[1px]">
            <img 
              src={memoriesPage.photos[2].src} 
              alt={memoriesPage.photos[2].caption}
              className="w-full h-full object-cover" 
            />
          </div>
          <p className="font-patrick text-xs sm:text-sm font-semibold text-neutral-800 text-center mt-1.5 truncate">
            {memoriesPage.photos[2].caption}
          </p>
        </motion.div>

        {/* Photo 4 (Bottom Right) */}
        <motion.div
          initial={{ opacity: 0, rotate: 10, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 4, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="absolute bottom-1 right-1 w-[49%] max-w-[170px] bg-white p-2 pb-3 rounded-sm shadow-polaroid border border-neutral-200 z-10"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2">
            <WashiTape color="red" width="w-16" rotate="2deg" />
          </div>
          <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden rounded-[1px]">
            <img 
              src={memoriesPage.photos[3].src} 
              alt={memoriesPage.photos[3].caption}
              className="w-full h-full object-cover" 
            />
          </div>
          <p className="font-patrick text-xs sm:text-sm font-semibold text-neutral-800 text-center mt-1.5 truncate">
            {memoriesPage.photos[3].caption}
          </p>
        </motion.div>

        {/* Shiro Sticker Bottom Right */}
        <motion.img
          src={referenceAssets.shiro}
          alt="Shiro"
          className="absolute -bottom-2 -right-2 w-16 h-16 object-contain z-30 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)] transform rotate-12 pointer-events-none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: 'spring' }}
        />
      </div>

      {/* Next Button */}
      <div className="w-full flex justify-center pb-2 z-30">
        <button
          onClick={handleNext}
          className="w-full max-w-[240px] py-2.5 px-5 rounded-full bg-[#C92A2A] hover:bg-[#B02525] active:scale-95 text-white font-patrick text-lg font-bold shadow-md hover:shadow-lg transition-all duration-150 border-2 border-[#861A22] cursor-pointer"
        >
          {memoriesPage.nextButtonText}
        </button>
      </div>
    </div>
  );
};
