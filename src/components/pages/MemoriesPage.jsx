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
    <div className="relative w-full h-full flex flex-col justify-between p-2.5 sm:p-3.5 select-none overflow-hidden">
      {/* Title */}
      <div className="w-full text-center pt-0.5 z-20">
        <h1 className="font-abril text-2xl sm:text-3xl text-[#C92A2A] tracking-widest drop-shadow-sm">
          {memoriesPage.title}
        </h1>
      </div>

      {/* 5-Photo Zero-Scroll Physical Scrapbook Collage */}
      <div className="relative w-full flex-1 my-0.5 min-h-[380px] overflow-hidden">
        
        {/* Photo 1 (Childhood Throwback - Top Left) */}
        <motion.div
          initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
          animate={{ opacity: 1, rotate: -4, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="absolute top-1 left-0.5 w-[45%] max-w-[155px] bg-white p-1.5 pb-2 rounded-sm shadow-polaroid border border-neutral-200 z-10"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2">
            <WashiTape color="yellow" width="w-12" rotate="-2deg" />
          </div>
          <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden rounded-[1px]">
            <img 
              src={memoriesPage.photos[0].src} 
              alt={memoriesPage.photos[0].caption}
              className="w-full h-full object-cover object-top" 
            />
          </div>
          <p className="font-patrick text-[11px] sm:text-xs font-bold text-neutral-800 text-center mt-1 truncate">
            {memoriesPage.photos[0].caption}
          </p>
        </motion.div>

        {/* Photo 2 (Traditional Outfit - Top Right) */}
        <motion.div
          initial={{ opacity: 0, rotate: 8, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 4, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.08 }}
          className="absolute top-2 right-0.5 w-[46%] max-w-[160px] bg-white p-1.5 pb-2 rounded-sm shadow-polaroid border border-neutral-200 z-10"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2">
            <WashiTape color="pink" width="w-12" rotate="3deg" />
          </div>
          <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden rounded-[1px]">
            <img 
              src={memoriesPage.photos[1].src} 
              alt={memoriesPage.photos[1].caption}
              className="w-full h-full object-cover object-top" 
            />
          </div>
          <p className="font-patrick text-[11px] sm:text-xs font-bold text-neutral-800 text-center mt-1 truncate">
            {memoriesPage.photos[1].caption}
          </p>
        </motion.div>

        {/* Center Chocobi Sticker */}
        <motion.img
          src={referenceAssets.chocobi}
          alt="Chocobi"
          className="absolute top-[34%] left-[42%] -translate-x-1/2 w-12 h-16 object-contain z-20 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)] transform -rotate-12 pointer-events-none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        />

        {/* Photo 3 (Terrace Smiling - Middle Left) */}
        <motion.div
          initial={{ opacity: 0, rotate: -6, scale: 0.9 }}
          animate={{ opacity: 1, rotate: -3, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="absolute top-[130px] left-0.5 w-[45%] max-w-[155px] bg-white p-1.5 pb-2 rounded-sm shadow-polaroid border border-neutral-200 z-10"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2">
            <WashiTape color="mint" width="w-12" rotate="-3deg" />
          </div>
          <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden rounded-[1px]">
            <img 
              src={memoriesPage.photos[2].src} 
              alt={memoriesPage.photos[2].caption}
              className="w-full h-full object-cover" 
            />
          </div>
          <p className="font-patrick text-[11px] sm:text-xs font-bold text-neutral-800 text-center mt-1 truncate">
            {memoriesPage.photos[2].caption}
          </p>
        </motion.div>

        {/* Photo 4 (Chilling Selfie - Middle Right) */}
        <motion.div
          initial={{ opacity: 0, rotate: 6, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 3, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.22 }}
          className="absolute top-[138px] right-0.5 w-[46%] max-w-[160px] bg-white p-1.5 pb-2 rounded-sm shadow-polaroid border border-neutral-200 z-10"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2">
            <WashiTape color="red" width="w-12" rotate="2deg" />
          </div>
          <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden rounded-[1px]">
            <img 
              src={memoriesPage.photos[3].src} 
              alt={memoriesPage.photos[3].caption}
              className="w-full h-full object-cover" 
            />
          </div>
          <p className="font-patrick text-[11px] sm:text-xs font-bold text-neutral-800 text-center mt-1 truncate">
            {memoriesPage.photos[3].caption}
          </p>
        </motion.div>

        {/* Photo 5 (Cute Selfie - Bottom Center/Left) */}
        <motion.div
          initial={{ opacity: 0, rotate: -6, scale: 0.9 }}
          animate={{ opacity: 1, rotate: -2, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.3 }}
          className="absolute bottom-1 left-2 w-[46%] max-w-[160px] bg-white p-1.5 pb-2 rounded-sm shadow-polaroid border border-neutral-200 z-10"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2">
            <WashiTape color="yellow" width="w-12" rotate="-2deg" />
          </div>
          <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden rounded-[1px]">
            <img 
              src={memoriesPage.photos[4].src} 
              alt={memoriesPage.photos[4].caption}
              className="w-full h-full object-cover object-top" 
            />
          </div>
          <p className="font-patrick text-[11px] sm:text-xs font-bold text-neutral-800 text-center mt-1 truncate">
            {memoriesPage.photos[4].caption}
          </p>
        </motion.div>

        {/* Shiro Sticker Bottom Right */}
        <motion.img
          src={referenceAssets.shiro}
          alt="Shiro"
          className="absolute bottom-2 right-4 w-18 h-18 sm:w-20 sm:h-20 object-contain z-20 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.12)] transform rotate-6 pointer-events-none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.35, type: 'spring' }}
        />
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
