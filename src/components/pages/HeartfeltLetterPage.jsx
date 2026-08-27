import React from 'react';
import { motion } from 'framer-motion';
import { referenceAssets } from '../../config/referenceAssets';
import { scrapbookConfig } from '../../config/scrapbookData';
import { WashiTape } from '../ui/ScrapbookDecorations';
import { sounds } from '../../utils/audio';

const renderFormattedText = (text) => {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-bold text-[#861A22]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

export const HeartfeltLetterPage = ({ onBack }) => {
  const { letterPage } = scrapbookConfig;

  const handleBack = () => {
    sounds.playPageTurn();
    onBack();
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-2.5 sm:p-4 select-none overflow-hidden">
      {/* Scrollable Letter Area */}
      <div className="relative flex-1 w-full overflow-y-auto no-scrollbar py-2">
        {/* Lined Notebook Sheet */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative w-full bg-notebook-lines rounded-2xl p-4 sm:p-5 border border-[#e2d8c3] shadow-md text-left"
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
          <div className="space-y-3 font-patrick text-base sm:text-lg text-neutral-800 leading-relaxed whitespace-pre-line">
            {letterPage.paragraphs.map((p, idx) => (
              <p key={idx} className={idx === 0 ? "font-bold text-[#C92A2A] text-lg sm:text-xl" : ""}>
                {renderFormattedText(p)}
              </p>
            ))}
          </div>

          {/* Closing & Signature with Mini Shin-chan Sticker (No Text Overlap) */}
          <div className="mt-4 pt-3 border-t border-dashed border-amber-300/60 flex items-end justify-between">
            {/* Cute mini Shin-chan sticker */}
            <div className="pointer-events-none -mb-1">
              <img 
                src={referenceAssets.shinchanShy} 
                alt="Shy Shin-chan" 
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.12)] transform -rotate-3"
              />
            </div>

            {/* Closing & Signature */}
            <div className="text-right space-y-0.5">
              {letterPage.closing && (
                <p className="font-handwriting text-sm sm:text-base text-neutral-600 italic">
                  {renderFormattedText(letterPage.closing)}
                </p>
              )}
              <p className="font-patrick text-lg sm:text-xl font-bold text-[#C92A2A] tracking-wide">
                {renderFormattedText(letterPage.signature)}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back Button */}
      <div className="w-full pt-2 flex justify-center pb-1 z-20 shrink-0">
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
