import React from 'react';
import { motion } from 'framer-motion';
import { GiftBoxItem, WashiTape, StampBadge } from '../ui/ScrapbookDecorations';
import { ShinchanWaving } from '../ui/ShinchanArtwork';
import { scrapbookConfig } from '../../config/scrapbookData';
import { sounds } from '../../utils/audio';

export const GiftSectionPage = ({ onSelectGift, openedGifts = [], onFinalSurprise }) => {
  const { giftsSection } = scrapbookConfig;

  const handleGiftClick = (gift) => {
    sounds.playGiftOpen();
    onSelectGift(gift.targetPage, gift.id);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-4 sm:p-5 text-center select-none overflow-y-auto no-scrollbar">
      {/* Top Header */}
      <div className="w-full flex items-center justify-between mb-1">
        <WashiTape color="yellow" width="w-20" rotate="-2deg" />
        <StampBadge text="GIFTS CORNER 🎁" color="red" />
        <WashiTape color="pink" width="w-20" rotate="3deg" />
      </div>

      {/* Heading & Subtext */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="my-1"
      >
        <h1 className="font-abril text-2xl sm:text-3xl text-neutral-900 leading-tight">
          {giftsSection.heading}
        </h1>
        <p className="font-patrick text-base sm:text-lg text-red-600 font-bold tracking-wider mt-1 animate-pulse">
          {giftsSection.subHeading}
        </p>
      </motion.div>

      {/* Interactive Gift Boxes Grid */}
      <div className="w-full my-auto py-4 flex flex-row justify-center items-center gap-3 sm:gap-6 flex-wrap">
        {giftsSection.gifts.map((gift, idx) => {
          const isOpened = openedGifts.includes(gift.id);
          return (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.15, type: 'spring' }}
            >
              <GiftBoxItem
                giftNumber={gift.giftNumber}
                title={gift.title}
                color={gift.color}
                isOpened={isOpened}
                onClick={() => handleGiftClick(gift)}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Shin-chan Helper Illustration */}
      <div className="relative flex justify-center items-center py-1">
        <ShinchanWaving className="w-28 h-28 sm:w-32 sm:h-32" animated={false} />
        <div className="bg-amber-50 border border-amber-300 rounded-xl px-3 py-1 font-patrick text-xs text-neutral-800 shadow-sm ml-2">
          Pick any gift box to unwrap! 🎀
        </div>
      </div>

      {/* Final Surprise Reveal Button (Unlocks or always accessible) */}
      <div className="w-full pt-2 flex flex-col items-center gap-1 z-20">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => {
            sounds.playPageTurn();
            onFinalSurprise();
          }}
          className="w-full max-w-xs py-2.5 px-4 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-patrick text-base sm:text-lg font-bold shadow-lg hover:shadow-red-500/30 border-2 border-red-700 flex items-center justify-center gap-2 cursor-pointer"
        >
          See Final Surprise ➔
        </motion.button>
        <span className="font-handwriting text-xs text-neutral-500">
          {openedGifts.length === 3 ? "All gifts opened! Ready for the grand finale 🎉" : `Opened ${openedGifts.length}/3 gifts so far`}
        </span>
      </div>
    </div>
  );
};
