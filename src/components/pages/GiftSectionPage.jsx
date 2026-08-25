import React from 'react';
import { motion } from 'framer-motion';
import { GiftBoxItem } from '../ui/ScrapbookDecorations';
import { scrapbookConfig } from '../../config/scrapbookData';
import { sounds } from '../../utils/audio';

export const GiftSectionPage = ({ onSelectGift, openedGifts = [] }) => {
  const { giftsSection } = scrapbookConfig;

  const handleGiftClick = (gift) => {
    sounds.playGiftOpen();
    onSelectGift(gift.targetPage, gift.id);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-4 sm:p-6 text-center select-none">
      {/* Heading & Instruction */}
      <div className="w-full pt-4">
        <h1 className="font-abril text-2xl sm:text-3xl text-neutral-900 leading-tight">
          {giftsSection.heading}
        </h1>
        <p className="font-patrick text-base sm:text-lg text-[#C92A2A] font-bold tracking-wider mt-2">
          {giftsSection.instruction}
        </p>
      </div>

      {/* 3 Interactive Gift Boxes */}
      <div className="w-full my-auto py-6 flex flex-row justify-center items-center gap-4 sm:gap-6">
        {giftsSection.gifts.map((gift, idx) => {
          const isOpened = openedGifts.includes(gift.id);
          return (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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

      {/* Bottom Spacer */}
      <div className="w-full pb-4 text-center">
        <span className="font-handwriting text-sm text-neutral-500">
          Tap any gift box to open ✨
        </span>
      </div>
    </div>
  );
};
