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
    <div className="relative w-full h-full flex flex-col justify-between p-2.5 sm:p-3 select-none overflow-hidden">
      {/* Title */}
      <div className="w-full text-center pt-0.5 z-20">
        <h1 className="font-abril text-2xl sm:text-3xl text-[#C92A2A] tracking-widest drop-shadow-sm">
          {memoriesPage.title}
        </h1>
      </div>

      {/* 5-Photo Balanced Full-Height Scrapbook Collage */}
      <div className="relative w-full flex-1 my-1 min-h-[420px] overflow-hidden">
        
        {/* Tier 1 - Left: Photo 1 (Childhood Throwback) */}
        <motion.div
          initial={{ opacity: 0, rotate: -6, scale: 0.95 }}
          animate={{ opacity: 1, rotate: -3, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="absolute top-1 left-1 w-[46%] max-w-[155px] bg-white p-1.5 pb-2 rounded-sm shadow-polaroid border border-neutral-200 z-10"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 pointer-events-none z-20">
            <WashiTape color="yellow" width="w-12" rotate="-2deg" />
          </div>
          <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden rounded-[2px]">
            <img 
              src={memoriesPage.photos[0].src} 
              alt={memoriesPage.photos[0].caption}
              className="w-full h-full object-cover" 
            />
          </div>
          <p className="font-patrick text-[11px] sm:text-xs font-bold text-neutral-900 text-center mt-1 leading-tight">
            {memoriesPage.photos[0].caption}
          </p>
        </motion.div>

        {/* Tier 1 - Right: Photo 2 (Partners in Crime) */}
        <motion.div
          initial={{ opacity: 0, rotate: 6, scale: 0.95 }}
          animate={{ opacity: 1, rotate: 3, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.08 }}
          className="absolute top-1 right-1 w-[46%] max-w-[155px] bg-white p-1.5 pb-2 rounded-sm shadow-polaroid border border-neutral-200 z-10"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 pointer-events-none z-20">
            <WashiTape color="pink" width="w-12" rotate="2deg" />
          </div>
          <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden rounded-[2px]">
            <img 
              src={memoriesPage.photos[1].src} 
              alt={memoriesPage.photos[1].caption}
              className="w-full h-full object-cover" 
            />
          </div>
          <p className="font-patrick text-[11px] sm:text-xs font-bold text-neutral-900 text-center mt-1 leading-tight">
            {memoriesPage.photos[1].caption}
          </p>
        </motion.div>

        {/* Tier 2 - Left: Photo 3 (Forever Smiling) */}
        <motion.div
          initial={{ opacity: 0, rotate: -5, scale: 0.95 }}
          animate={{ opacity: 1, rotate: -2, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="absolute top-[35%] left-1 w-[46%] max-w-[155px] bg-white p-1.5 pb-2 rounded-sm shadow-polaroid border border-neutral-200 z-10"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 pointer-events-none z-20">
            <WashiTape color="mint" width="w-12" rotate="-2deg" />
          </div>
          <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden rounded-[2px]">
            <img 
              src={memoriesPage.photos[2].src} 
              alt={memoriesPage.photos[2].caption}
              className="w-full h-full object-cover" 
            />
          </div>
          <p className="font-patrick text-[11px] sm:text-xs font-bold text-neutral-900 text-center mt-1 leading-tight">
            {memoriesPage.photos[2].caption}
          </p>
        </motion.div>

        {/* Tier 2 - Right: Photo 4 (Unmatched Chaos) */}
        <motion.div
          initial={{ opacity: 0, rotate: 5, scale: 0.95 }}
          animate={{ opacity: 1, rotate: 2, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.22 }}
          className="absolute top-[35%] right-1 w-[46%] max-w-[155px] bg-white p-1.5 pb-2 rounded-sm shadow-polaroid border border-neutral-200 z-10"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 pointer-events-none z-20">
            <WashiTape color="red" width="w-12" rotate="3deg" />
          </div>
          <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden rounded-[2px]">
            <img 
              src={memoriesPage.photos[3].src} 
              alt={memoriesPage.photos[3].caption}
              className="w-full h-full object-cover" 
            />
          </div>
          <p className="font-patrick text-[11px] sm:text-xs font-bold text-neutral-900 text-center mt-1 leading-tight">
            {memoriesPage.photos[3].caption}
          </p>
        </motion.div>

        {/* Center Chocobi Sticker between Tier 1 & 2 */}
        <motion.img
          src={referenceAssets.chocobi}
          alt="Chocobi"
          className="absolute top-[33%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-10 h-14 object-contain z-20 filter drop-shadow-[0_3px_6px_rgba(0,0,0,0.15)] transform -rotate-12 pointer-events-none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.25, type: 'spring' }}
        />

        {/* Tier 3 - Left/Center: Photo 5 (Cutest Sister Ever) */}
        <motion.div
          initial={{ opacity: 0, rotate: -4, scale: 0.95 }}
          animate={{ opacity: 1, rotate: -2, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.3 }}
          className="absolute bottom-1 left-2 w-[48%] max-w-[165px] bg-white p-1.5 pb-2 rounded-sm shadow-polaroid border border-neutral-200 z-10"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 pointer-events-none z-20">
            <WashiTape color="yellow" width="w-12" rotate="-1deg" />
          </div>
          <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden rounded-[2px]">
            <img 
              src={memoriesPage.photos[4].src} 
              alt={memoriesPage.photos[4].caption}
              className="w-full h-full object-cover" 
            />
          </div>
          <p className="font-patrick text-[11px] sm:text-xs font-bold text-neutral-900 text-center mt-1 leading-tight">
            {memoriesPage.photos[4].caption}
          </p>
        </motion.div>

        {/* Tier 3 - Right: Shiro Sticker & Decorative Note */}
        <div className="absolute bottom-2 right-3 w-[44%] flex flex-col items-center justify-center pointer-events-none z-20">
          <motion.img
            src={referenceAssets.shiro}
            alt="Shiro"
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)] transform rotate-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.35, type: 'spring' }}
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-handwriting text-sm text-[#C92A2A] font-bold text-center -mt-1 transform rotate-2"
          >
            Best Memories Forever ❤️
          </motion.span>
        </div>

      </div>

      {/* Next Button */}
      <div className="w-full flex justify-center pb-1 pt-1 z-30">
        <button
          onClick={handleNext}
          className="w-full max-w-[220px] py-2.5 px-4 rounded-full bg-[#C92A2A] hover:bg-[#B02525] active:scale-95 text-white font-patrick text-base sm:text-lg font-bold shadow-md hover:shadow-lg transition-all duration-150 border-2 border-[#861A22] cursor-pointer"
        >
          {memoriesPage.nextButtonText}
        </button>
      </div>
    </div>
  );
};
