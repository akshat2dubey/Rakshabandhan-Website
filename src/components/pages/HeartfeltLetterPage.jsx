import React from 'react';
import { motion } from 'framer-motion';
import { ShinchanWaving } from '../ui/ShinchanArtwork';
import { WashiTape, StampBadge } from '../ui/ScrapbookDecorations';
import { scrapbookConfig } from '../../config/scrapbookData';
import { sounds } from '../../utils/audio';

export const HeartfeltLetterPage = ({ onBack }) => {
  const { letterPage } = scrapbookConfig;

  const handleBack = () => {
    sounds.playPageTurn();
    onBack();
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-5 select-none overflow-y-auto no-scrollbar">
      {/* Top Bar */}
      <div className="w-full flex items-center justify-between mb-1">
        <WashiTape color="yellow" width="w-20" rotate="-2deg" />
        <StampBadge text={letterPage.dateStamp} color="red" />
        <WashiTape color="pink" width="w-20" rotate="3deg" />
      </div>

      {/* Lined Notebook Letter Sheet */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative my-auto w-full bg-notebook-lines rounded-2xl p-4 sm:p-5 border-2 border-[#e6decb] shadow-md text-left"
      >
        {/* Top Tape Corner */}
        <div className="absolute -top-3 left-6">
          <WashiTape color="mint" width="w-20" rotate="-4deg" />
        </div>

        {/* Letter Heading */}
        <h1 className="font-abril text-xl sm:text-2xl text-red-700 mb-3 border-b-2 border-dashed border-red-200 pb-1">
          {letterPage.title}
        </h1>

        {/* Handwritten Letter Paragraphs */}
        <div className="space-y-3 font-patrick text-base sm:text-lg text-neutral-800 leading-relaxed">
          {letterPage.paragraphs.map((p, idx) => (
            <p key={idx} className={idx === 0 ? "font-bold text-red-800 text-lg" : ""}>
              {p}
            </p>
          ))}
        </div>

        {/* Signoff & Signature */}
        <div className="mt-4 pt-2 text-right">
          <p className="font-handwriting text-sm text-neutral-600">
            {letterPage.signoff}
          </p>
          <p className="font-abril text-lg text-red-600 mt-0.5">
            {letterPage.senderSign}
          </p>
        </div>

        {/* Peeking Shin-chan in the bottom left */}
        <div className="absolute -bottom-3 -left-3 pointer-events-none">
          <ShinchanWaving className="w-20 h-20 sm:w-24 sm:h-24" animated={false} />
        </div>
      </motion.div>

      {/* Back to Gifts Button */}
      <div className="w-full pt-2 flex justify-center z-20">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleBack}
          className="w-full max-w-xs py-2.5 px-4 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white font-patrick text-base sm:text-lg font-bold shadow-md flex items-center justify-center gap-2 cursor-pointer"
        >
          {letterPage.backButtonText}
        </motion.button>
      </div>
    </div>
  );
};
