import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ShinchanSparkle, ShinchanWaving, ShiroSticker, ChocobiSticker } from '../ui/ShinchanArtwork';
import { WashiTape, StampBadge } from '../ui/ScrapbookDecorations';
import { scrapbookConfig } from '../../config/scrapbookData';
import { sounds } from '../../utils/audio';

export const FinalRevealPage = ({ onRestart }) => {
  const { finalRevealPage, recipientName } = scrapbookConfig;
  const [isRevealed, setIsRevealed] = useState(false);

  const triggerConfetti = () => {
    // 1. Multi-stage confetti fireworks
    const duration = 3.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#EC4899', '#FDE047']
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#EC4899', '#FDE047']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleYes = () => {
    sounds.playTada();
    triggerConfetti();
    setIsRevealed(true);
  };

  const handleNo = () => {
    sounds.playAngry();
    // Playful dodge/shake
    alert("There's no saying NO on the final page! Hehe 😜");
  };

  const handleRestart = () => {
    sounds.playClick();
    setIsRevealed(false);
    onRestart();
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-4 sm:p-6 text-center select-none overflow-y-auto no-scrollbar">
      {/* Top Bar */}
      <div className="w-full flex justify-between items-start mb-2">
        <WashiTape color="gingham" width="w-20" rotate="-3deg" />
        <StampBadge text="THE GRAND FINALE ✨" color="red" />
        <WashiTape color="yellow" width="w-20" rotate="3deg" />
      </div>

      <AnimatePresence mode="wait">
        {!isRevealed ? (
          /* Pre-Reveal Question State (38.0s - 39.98s) */
          <motion.div
            key="question"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="w-full flex flex-col items-center justify-between flex-1 py-2"
          >
            {/* Question Heading */}
            <div className="my-2">
              <h1 className="font-abril text-3xl sm:text-4xl text-neutral-900 leading-tight">
                {finalRevealPage.question}
              </h1>
              <p className="font-patrick text-base sm:text-lg text-red-600 font-bold mt-1 animate-pulse">
                {finalRevealPage.subtext}
              </p>
            </div>

            {/* Sparkling Shin-chan Centerpiece */}
            <div className="relative my-auto flex justify-center items-center py-2">
              <ShinchanSparkle className="w-44 h-44 sm:w-52 sm:h-52" animated={true} />
              
              <div className="absolute -bottom-2 -right-4">
                <ShiroSticker className="w-16 h-16 sm:w-20 sm:h-20" />
              </div>
            </div>

            {/* Final YES / NO Action Buttons */}
            <div className="w-full max-w-xs flex flex-col sm:flex-row gap-3 items-center justify-center mt-3 z-20">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                onClick={handleYes}
                className="w-full sm:w-1/2 py-3 px-5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-patrick text-xl font-bold shadow-xl hover:shadow-red-500/40 border-2 border-red-700 flex items-center justify-center gap-1 cursor-pointer animate-pulse-slow"
              >
                {finalRevealPage.yesButtonText}
              </motion.button>

              <button
                onClick={handleNo}
                className="w-full sm:w-1/2 py-2.5 px-4 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-patrick text-base font-bold shadow-md border-2 border-neutral-300 flex items-center justify-center gap-1 cursor-pointer"
              >
                {finalRevealPage.noButtonText}
              </button>
            </div>
          </motion.div>
        ) : (
          /* Post-Reveal Celebration State */
          <motion.div
            key="celebration"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 15 }}
            className="w-full flex flex-col items-center justify-between flex-1 py-2"
          >
            {/* Celebration Box */}
            <div className="my-auto w-full bg-white/95 rounded-2xl p-5 border-4 border-double border-red-500 shadow-2xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <WashiTape color="pink" width="w-28" rotate="0deg" />
              </div>

              <h2 className="font-abril text-2xl sm:text-3xl text-red-600 mb-2">
                {finalRevealPage.celebrationTitle}
              </h2>

              <p className="font-patrick text-lg text-neutral-800 leading-relaxed max-w-xs mx-auto">
                Dear {recipientName}, {finalRevealPage.celebrationMessage}
              </p>

              {/* Celebrating Characters */}
              <div className="my-3 flex justify-center items-center gap-2">
                <ChocobiSticker className="w-14 h-16 transform -rotate-12" />
                <ShinchanWaving className="w-32 h-32" animated={true} />
                <ShiroSticker className="w-14 h-14 transform rotate-12" />
              </div>

              {/* Action Kamen Badge */}
              <div className="inline-block bg-amber-100 border border-amber-400 px-3 py-1 rounded-full font-patrick text-xs font-bold text-amber-800">
                Action Kamen Approved! 🦸‍♂️⚡
              </div>
            </div>

            {/* Replay Button */}
            <div className="w-full max-w-xs mt-4 z-20">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleRestart}
                className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-neutral-800 to-neutral-900 text-white font-patrick text-lg font-bold shadow-lg flex items-center justify-center gap-2 cursor-pointer border-2 border-neutral-700"
              >
                {finalRevealPage.restartButtonText}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Tape */}
      <div className="w-full flex justify-center mt-2">
        <WashiTape color="pink" width="w-24" rotate="1deg" />
      </div>
    </div>
  );
};
