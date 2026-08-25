import React from 'react';
import { motion } from 'framer-motion';
import { referenceAssets } from '../../config/referenceAssets';
import { scrapbookConfig } from '../../config/scrapbookData';
import { CertificateSeal } from '../ui/ScrapbookDecorations';
import { sounds } from '../../utils/audio';

export const BestSisterAwardPage = ({ onBack }) => {
  const { awardPage, recipientName } = scrapbookConfig;

  const handleBack = () => {
    sounds.playPageTurn();
    onBack();
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-5 select-none overflow-y-auto no-scrollbar">
      {/* Certificate Card on Paper */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative my-auto w-full bg-[#FFFDF8] rounded-2xl p-4 sm:p-5 border-4 border-double border-amber-600 shadow-md text-center"
      >
        {/* Certificate Seal */}
        <div className="absolute -top-5 -right-2 z-20">
          <CertificateSeal className="w-16 h-20 sm:w-18 sm:h-22" />
        </div>

        {/* Certificate Title */}
        <h1 className="font-abril text-2xl sm:text-3xl text-[#C92A2A] uppercase tracking-wide">
          {awardPage.title}
        </h1>

        {/* Presented to */}
        <p className="font-handwriting text-sm text-neutral-600 font-semibold mt-1">
          {awardPage.subtitle}
        </p>

        {/* Recipient Name */}
        <div className="my-1 py-1 px-4 inline-block border-b-2 border-dashed border-[#C92A2A]">
          <span className="font-abril text-2xl sm:text-3xl text-[#C92A2A]">
            {recipientName}
          </span>
        </div>

        {/* Award Text */}
        <p className="font-patrick text-sm sm:text-base text-neutral-800 leading-snug mt-2 max-w-xs mx-auto">
          "{awardPage.awardText}"
        </p>

        {/* Authentic Award Shin-chan Artwork (Reference Image) */}
        <div className="my-2 flex justify-center items-center">
          <motion.img
            src={referenceAssets.shinchanAward}
            alt="Shin-chan with Trophy"
            className="w-36 h-36 sm:w-40 sm:h-40 object-contain filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.18)]"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring' }}
          />
        </div>

        {/* Footer Stamp */}
        <div className="border-t border-amber-200 pt-1.5 flex justify-center">
          <span className="font-patrick text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-100/80 px-2.5 py-0.5 rounded">
            ★ {awardPage.certifiedText} ★
          </span>
        </div>
      </motion.div>

      {/* Back Button */}
      <div className="w-full pt-2 flex justify-center pb-2 z-20">
        <button
          onClick={handleBack}
          className="w-full max-w-[240px] py-2.5 px-4 rounded-full bg-neutral-800 hover:bg-neutral-700 active:scale-95 text-white font-patrick text-base font-bold shadow-md transition-all cursor-pointer"
        >
          {awardPage.backButtonText}
        </button>
      </div>
    </div>
  );
};
