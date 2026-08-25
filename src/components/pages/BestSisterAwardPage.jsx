import React from 'react';
import { motion } from 'framer-motion';
import { ShinchanAward } from '../ui/ShinchanArtwork';
import { CertificateSeal, WashiTape, StampBadge } from '../ui/ScrapbookDecorations';
import { scrapbookConfig } from '../../config/scrapbookData';
import { sounds } from '../../utils/audio';

export const BestSisterAwardPage = ({ onBack }) => {
  const { awardPage, recipientName } = scrapbookConfig;

  const handleBack = () => {
    sounds.playPageTurn();
    onBack();
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-5 select-none overflow-y-auto no-scrollbar">
      {/* Top Bar */}
      <div className="w-full flex items-center justify-between mb-1">
        <WashiTape color="gingham" width="w-20" rotate="-3deg" />
        <StampBadge text={awardPage.badge} color="red" />
        <WashiTape color="yellow" width="w-20" rotate="2deg" />
      </div>

      {/* Certificate Frame Box */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="relative my-auto w-full bg-amber-50/90 rounded-2xl p-4 sm:p-5 border-4 border-double border-amber-600 shadow-lg text-center"
      >
        {/* Certificate Golden Seal */}
        <div className="absolute -top-6 -right-2 z-20">
          <CertificateSeal className="w-16 h-20 sm:w-20 sm:h-24" />
        </div>

        {/* Certificate Title */}
        <h1 className="font-abril text-2xl sm:text-3xl text-red-700 uppercase tracking-wider drop-shadow-sm">
          {awardPage.title}
        </h1>

        {/* Presented To Label */}
        <p className="font-handwriting text-sm text-neutral-600 font-semibold mt-1">
          {awardPage.presentedTo}
        </p>

        {/* Recipient Name Highlight */}
        <div className="my-2 py-1 px-4 inline-block border-b-2 border-dashed border-red-500 bg-red-50/50 rounded">
          <span className="font-abril text-2xl sm:text-3xl text-red-600 tracking-wide">
            {recipientName}
          </span>
        </div>

        {/* Award Description Text */}
        <p className="font-patrick text-sm sm:text-base text-neutral-800 leading-relaxed max-w-xs mx-auto mt-2">
          "{awardPage.awardDescription}"
        </p>

        {/* Shin-chan Bowtie Artwork */}
        <div className="my-2 flex justify-center items-center">
          <ShinchanAward className="w-32 h-32 sm:w-36 sm:h-36" animated={true} />
        </div>

        {/* Certified By Footer */}
        <div className="border-t border-amber-300 pt-2 flex justify-between items-center px-2">
          <span className="font-handwriting text-xs text-neutral-600">
            {awardPage.certifiedBy}
          </span>
          <span className="font-patrick text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100 px-2 py-0.5 rounded">
            {awardPage.sealText}
          </span>
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
          {awardPage.backButtonText}
        </motion.button>
      </div>
    </div>
  );
};
