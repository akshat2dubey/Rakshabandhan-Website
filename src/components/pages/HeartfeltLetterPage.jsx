import React from 'react';
import { motion } from 'framer-motion';
import { referenceAssets } from '../../config/referenceAssets';
import { scrapbookConfig } from '../../config/scrapbookData';
import { WashiTape } from '../ui/ScrapbookDecorations';
import { sounds } from '../../utils/audio';

export const HeartfeltLetterPage = ({ onBack }) => {
  const { letterPage } = scrapbookConfig;

  const handleBack = () => {
    sounds.playPageTurn();
    onBack();
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-5 select-none overflow-y-auto no-scrollbar">
      {/* Lined Notebook Sheet */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative my-auto w-full bg-notebook-lines rounded-2xl p-4 sm:p-5 border border-[#e2d8c3] shadow-md text-left"
      >
        {/* Washi Tape at Top Corner */}
        <div className="absolute -top-3 left-6">
          <WashiTape color="mint" width="w-20" rotate="-4deg" />
        </div>

        {/* Heading */}
        <h1 className="font-abril text-xl sm:text-2xl text-[#C92A2A] mb-3 border-b-2 border-dashed border-red-200 pb-1">
          {letterPage.title}
        </h1>

        {/* Handwritten Paragraphs */}
        <div className="space-y-3 font-patrick text-base sm:text-lg text-neutral-800 leading-relaxed">
          {letterPage.paragraphs.map((p, idx) => (
            <p key={idx} className={idx === 0 ? "font-bold text-red-800 text-lg sm:text-xl" : ""}>
              {p}
            </p>
          ))}
        </div>

        {/* Signature - Replaced 'Forever Yours' with 'Yours beloved Bhai Om' */}
        <div className="mt-5 pt-2 text-right">
          <p className="font-patrick text-lg sm:text-xl font-bold text-[#C92A2A] tracking-wide">
            {letterPage.signature}
          </p>
        </div>

        {/* Peeking Shin-chan Sticker Bottom Left */}
        <div className="absolute -bottom-3 -left-3 pointer-events-none">
          <img 
            src={referenceAssets.shinchanOpening} 
            alt="Shin-chan" 
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
          />
        </div>
      </motion.div>

      {/* Back Button */}
      <div className="w-full pt-2 flex justify-center pb-2 z-20">
        <button
          onClick={handleBack}
          className="w-full max-w-[240px] py-2.5 px-4 rounded-full bg-neutral-800 hover:bg-neutral-700 active:scale-95 text-white font-patrick text-base font-bold shadow-md transition-all cursor-pointer"
        >
          {letterPage.backButtonText}
        </button>
      </div>
    </div>
  );
};
