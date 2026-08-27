import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GiftBoxItem } from '../ui/ScrapbookDecorations';
import { scrapbookConfig } from '../../config/scrapbookData';
import { sounds } from '../../utils/audio';

export const GiftSectionPage = ({ onSelectGift, onBack, onProceedToFinal, openedGifts = [] }) => {
  const { giftsSection } = scrapbookConfig;
  const [openingId, setOpeningId] = useState(null);
  const allOpened = openedGifts.length >= 3;

  const handleGiftClick = (gift) => {
    sounds.playGiftOpen();
    setOpeningId(gift.id);
    setTimeout(() => {
      onSelectGift(gift.targetPage, gift.id);
      setOpeningId(null);
    }, 280);
  };

  const progressText = allOpened
    ? (giftsSection.allOpenedText || "All 3 gifts opened! 🎉")
    : (giftsSection.progressText ? giftsSection.progressText.replace('{count}', openedGifts.length) : `${openedGifts.length} / 3 gifts opened ✨`);

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-3 sm:p-5 text-center select-none">
      {/* Heading & Progress */}
      <div className="w-full pt-2">
        <h1 className="font-abril text-2xl sm:text-3xl text-neutral-900 leading-tight">
          {giftsSection.heading}
        </h1>
        <p className="font-patrick text-base sm:text-lg text-[#C92A2A] font-bold tracking-wider mt-1">
          {giftsSection.instruction}
        </p>
        {/* Progress Counter */}
        <div className="mt-1">
          <span className={`inline-block font-patrick text-xs sm:text-sm font-semibold px-3 py-0.5 rounded-full border shadow-sm ${
            allOpened 
              ? "bg-emerald-50 text-emerald-800 border-emerald-300 animate-bounce" 
              : "bg-amber-50 text-amber-900 border-amber-200"
          }`}>
            {progressText}
          </span>
        </div>
      </div>

      {/* 3 Interactive Gift Boxes */}
      <div className="w-full my-auto py-3 flex flex-row justify-center items-center gap-2.5 sm:gap-4">
        {giftsSection.gifts.map((gift, idx) => {
          const isOpened = openedGifts.includes(gift.id);
          const isCurrentlyOpening = openingId === gift.id;
          return (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: isCurrentlyOpening ? 1.15 : 1
              }}
              transition={{ delay: idx * 0.1, duration: 0.3 }}
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

      {/* Navigation Buttons */}
      <div className="w-full pb-2 flex flex-col items-center gap-2 z-20">
        {allOpened && onProceedToFinal ? (
          <button
            onClick={() => {
              sounds.playTada();
              onProceedToFinal();
            }}
            className="w-full max-w-[240px] py-3 px-4 rounded-full bg-[#C92A2A] hover:bg-[#B02525] active:scale-95 text-white font-patrick text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-150 border-2 border-[#861A22] cursor-pointer animate-pulse"
          >
            {giftsSection.proceedButtonText || "One Last Surprise ➔"}
          </button>
        ) : (
          <span className="font-handwriting text-xs text-neutral-500">
            Open all 3 gifts to unlock the final surprise ✨
          </span>
        )}

        {onBack && (
          <button
            onClick={() => {
              sounds.playPageTurn();
              onBack();
            }}
            className="w-full max-w-[220px] py-1.5 px-4 rounded-full bg-neutral-800/90 hover:bg-neutral-800 active:scale-95 text-white font-patrick text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
          >
            {giftsSection.backButtonText || "⬅ Back to Memories 📸"}
          </button>
        )}
      </div>
    </div>
  );
};
