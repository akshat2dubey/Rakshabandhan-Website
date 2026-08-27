import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { referenceAssets } from '../../config/referenceAssets';
import { scrapbookConfig } from '../../config/scrapbookData';
import { WashiTape } from '../ui/ScrapbookDecorations';
import { sounds } from '../../utils/audio';

const INTRO_STAGES = {
  OPENING_BOOK: 0,
  GREETING: 1,
  REVEAL: 2,
  PROMPT: 3,
  QUESTION: 4
};

export const OpeningQuestionPage = ({ onYes, onNo, skipIntro = false }) => {
  const { openingPage, recipientName, senderName } = scrapbookConfig;
  const [stage, setStage] = useState(skipIntro ? INTRO_STAGES.QUESTION : INTRO_STAGES.OPENING_BOOK);

  useEffect(() => {
    if (stage === INTRO_STAGES.OPENING_BOOK) {
      sounds.playPageTurn();
      const timer = setTimeout(() => {
        setStage(INTRO_STAGES.GREETING);
      }, 1200);
      return () => clearTimeout(timer);
    } else if (stage === INTRO_STAGES.GREETING) {
      const timer = setTimeout(() => {
        setStage(INTRO_STAGES.REVEAL);
      }, 1300);
      return () => clearTimeout(timer);
    } else if (stage === INTRO_STAGES.REVEAL) {
      const timer = setTimeout(() => {
        setStage(INTRO_STAGES.PROMPT);
      }, 1300);
      return () => clearTimeout(timer);
    } else if (stage === INTRO_STAGES.PROMPT) {
      const timer = setTimeout(() => {
        setStage(INTRO_STAGES.QUESTION);
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const handleSkip = (e) => {
    if (e) e.stopPropagation();
    sounds.playClick();
    setStage(INTRO_STAGES.QUESTION);
  };

  const handleContainerTap = () => {
    if (stage < INTRO_STAGES.QUESTION) {
      sounds.playClick();
      setStage(prev => prev + 1);
    }
  };

  const handleYes = () => {
    sounds.playPop();
    onYes();
  };

  const handleNo = () => {
    sounds.playAngry();
    onNo();
  };

  const openingBookText = openingPage.introOpening || "Opening your scrapbook… 📖";
  const greetingText = openingPage.introGreeting || `Hey ${recipientName || "Khushi didi"}… 👀`;
  const revealText = openingPage.introSubtitle || "I made something for you.";
  const promptText = openingPage.introPrompt || "But first, answer one very important question…";
  const senderTag = openingPage.senderBadge || (senderName ? `From ${senderName} ❤️` : "A special surprise ✨");

  return (
    <div 
      onClick={handleContainerTap}
      className="relative w-full h-full flex flex-col justify-between items-center p-4 sm:p-6 text-center select-none overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {/* ========================================================================= */}
        {/* STAGE 0: OPENING BOOK ("Opening your scrapbook… 📖") */}
        {/* ========================================================================= */}
        {stage === INTRO_STAGES.OPENING_BOOK && (
          <motion.div
            key="stage-opening-book"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.25 }}
            className="w-full h-full flex flex-col justify-between items-center"
          >
            {/* Top Washi Tape */}
            <div className="relative pt-2 flex flex-col items-center">
              <WashiTape color="gingham" rotate="-1deg" width="w-24" />
            </div>

            {/* Center Scrapbook Icon & Paper Flip */}
            <div className="relative my-auto flex flex-col justify-center items-center py-2">
              <motion.div
                animate={{ rotate: [-2, 2, -2], y: [0, -4, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-white/90 p-4 rounded-2xl border-2 border-dashed border-[#C92A2A]/50 shadow-scrapbook"
              >
                <span className="text-4xl sm:text-5xl block mb-2">📖</span>
                <p className="font-handwriting text-2xl sm:text-3xl text-[#C92A2A] font-bold">
                  {openingBookText}
                </p>
              </motion.div>
            </div>

            {/* Bottom Skip Indicator */}
            <div className="w-full pb-2 flex justify-center z-20">
              <button
                onClick={handleSkip}
                className="font-patrick text-xs text-neutral-500 hover:text-neutral-800 bg-amber-100/60 hover:bg-amber-100 px-3 py-1 rounded-full border border-amber-300/60 transition-all cursor-pointer active:scale-95"
              >
                {openingPage.skipText || "Skip ➔"}
              </button>
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* STAGE 1: GREETING ("Hey Khushi didi… 👀") */}
        {/* ========================================================================= */}
        {stage === INTRO_STAGES.GREETING && (
          <motion.div
            key="stage-greeting"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col justify-between items-center"
          >
            {/* Top Sender Tag & Washi Tape */}
            <div className="relative pt-2 flex flex-col items-center">
              <WashiTape color="yellow" rotate="-2deg" width="w-20" />
              <span className="font-patrick text-xs sm:text-sm text-neutral-600 font-semibold bg-amber-50/90 px-3 py-0.5 rounded-full border border-amber-200/80 shadow-sm mt-1">
                {senderTag}
              </span>
            </div>

            {/* Center Shin-chan Waving + Greeting */}
            <div className="relative my-auto flex flex-col justify-center items-center py-2">
              <motion.div
                initial={{ scale: 0.85, rotate: -4 }}
                animate={{ scale: 1, rotate: [ -4, 4, -4 ] }}
                transition={{ 
                  scale: { duration: 0.4 },
                  rotate: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative"
              >
                <img
                  src={referenceAssets.shinchanOpening}
                  alt="Shin-chan Waving"
                  className="w-48 h-48 sm:w-56 sm:h-56 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)]"
                />
              </motion.div>

              {/* Handwritten Greeting Text */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.35 }}
                className="mt-3 bg-white/95 px-4 py-2 rounded-2xl border-2 border-[#C92A2A]/40 shadow-scrapbook"
              >
                <h1 className="font-handwriting text-3xl sm:text-4xl text-[#C92A2A] font-bold tracking-wide leading-tight">
                  {greetingText}
                </h1>
              </motion.div>
            </div>

            {/* Bottom Skip Indicator */}
            <div className="w-full pb-2 flex justify-center z-20">
              <button
                onClick={handleSkip}
                className="font-patrick text-xs text-neutral-500 hover:text-neutral-800 bg-amber-100/60 hover:bg-amber-100 px-3 py-1 rounded-full border border-amber-300/60 transition-all cursor-pointer active:scale-95"
              >
                {openingPage.skipText || "Skip ➔"}
              </button>
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* STAGE 1: REVEAL ("I made something for you.") */}
        {/* ========================================================================= */}
        {stage === INTRO_STAGES.REVEAL && (
          <motion.div
            key="stage-reveal"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col justify-between items-center"
          >
            {/* Top Washi Tape */}
            <div className="relative pt-2 flex flex-col items-center">
              <WashiTape color="pink" rotate="2deg" width="w-20" />
              <span className="font-patrick text-xs sm:text-sm text-neutral-600 font-semibold bg-rose-50/90 px-3 py-0.5 rounded-full border border-rose-200/80 shadow-sm mt-1">
                {senderTag}
              </span>
            </div>

            {/* Center Shin-chan Shy / Blushing */}
            <div className="relative my-auto flex flex-col justify-center items-center py-2">
              <motion.div
                initial={{ scale: 0.88 }}
                animate={{ scale: [1, 1.04, 1], rotate: [-2, 2, -2] }}
                transition={{ 
                  scale: { duration: 1.0, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative"
              >
                <img
                  src={referenceAssets.shinchanShy}
                  alt="Shin-chan Shy"
                  className="w-48 h-48 sm:w-56 sm:h-56 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)]"
                />

                {/* Floating Heart & Sparkle */}
                <motion.span
                  animate={{ y: [-2, -8, -2], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute -top-2 right-2 text-xl pointer-events-none"
                >
                  💖
                </motion.span>
              </motion.div>

              {/* Handwritten Note Reveal */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.35 }}
                className="mt-3 bg-white/95 px-5 py-2.5 rounded-2xl border-2 border-rose-400/50 shadow-scrapbook"
              >
                <p className="font-patrick text-xl sm:text-2xl text-neutral-800 font-bold leading-tight">
                  {revealText} <span className="inline-block animate-bounce">🎁</span>
                </p>
              </motion.div>
            </div>

            {/* Bottom Skip Indicator */}
            <div className="w-full pb-2 flex justify-center z-20">
              <button
                onClick={handleSkip}
                className="font-patrick text-xs text-neutral-500 hover:text-neutral-800 bg-amber-100/60 hover:bg-amber-100 px-3 py-1 rounded-full border border-amber-300/60 transition-all cursor-pointer active:scale-95"
              >
                {openingPage.skipText || "Skip ➔"}
              </button>
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* STAGE 2: PROMPT ("But first, answer one very important question…") */}
        {/* ========================================================================= */}
        {stage === INTRO_STAGES.PROMPT && (
          <motion.div
            key="stage-prompt"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col justify-between items-center"
          >
            {/* Top Washi Tape */}
            <div className="relative pt-2 flex flex-col items-center">
              <WashiTape color="mint" rotate="-1deg" width="w-20" />
            </div>

            {/* Center Shin-chan Thinking */}
            <div className="relative my-auto flex flex-col justify-center items-center py-2">
              <motion.div
                initial={{ scale: 0.9, rotate: -3 }}
                animate={{ scale: 1, rotate: [-2, 3, -2] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src={referenceAssets.shinchanThinking}
                  alt="Shin-chan Thinking"
                  className="w-48 h-48 sm:w-56 sm:h-56 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)]"
                />

                {/* Thinking bubble icon */}
                <motion.span
                  animate={{ scale: [0.9, 1.2, 0.9] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="absolute -top-2 left-3 text-xl pointer-events-none"
                >
                  🤔
                </motion.span>
              </motion.div>

              {/* Handwritten Prompt Text */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.35 }}
                className="mt-3 bg-white/95 px-5 py-2.5 rounded-2xl border-2 border-amber-400/60 shadow-scrapbook max-w-[280px]"
              >
                <p className="font-patrick text-lg sm:text-xl text-[#C92A2A] font-bold leading-snug">
                  {promptText}
                </p>
              </motion.div>
            </div>

            {/* Bottom Skip Indicator */}
            <div className="w-full pb-2 flex justify-center z-20">
              <button
                onClick={handleSkip}
                className="font-patrick text-xs text-neutral-500 hover:text-neutral-800 bg-amber-100/60 hover:bg-amber-100 px-3 py-1 rounded-full border border-amber-300/60 transition-all cursor-pointer active:scale-95"
              >
                {openingPage.skipText || "Skip ➔"}
              </button>
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* STAGE 3: MAIN QUESTION ("Do you know what today is?") */}
        {/* ========================================================================= */}
        {stage === INTRO_STAGES.QUESTION && (
          <motion.div
            key="stage-question"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full flex flex-col justify-between items-center"
          >
            {/* Top Question Space */}
            <div className="w-full pt-2">
              <motion.h1 
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="font-abril text-2xl sm:text-3xl text-neutral-900 leading-tight tracking-wide drop-shadow-sm"
              >
                {openingPage.question}
              </motion.h1>
              {recipientName && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="font-handwriting text-lg text-[#C92A2A] font-bold mt-0.5"
                >
                  For {recipientName} ✨
                </motion.p>
              )}
            </div>

            {/* Shin-chan Hula Hula / Butt Dance (Pure Centered) */}
            <div className="relative my-auto flex flex-col justify-center items-center py-2">
              {/* Animated Dance Swaying Motion */}
              <motion.div
                animate={{ 
                  rotate: [-6, 6, -6],
                  x: [-5, 5, -5],
                  y: [0, -4, 0]
                }}
                transition={{ 
                  duration: 0.9, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-10"
              >
                <img
                  src={referenceAssets.shinchanHula}
                  alt="Shin-chan Hula Dance"
                  className="w-56 h-56 sm:w-64 sm:h-64 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)]"
                />

                {/* Dance Music / Motion Notes */}
                <motion.span
                  animate={{ y: [-4, -14, -4], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="absolute -top-2 -left-2 text-xl pointer-events-none"
                >
                  🎵
                </motion.span>
                <motion.span
                  animate={{ y: [-4, -14, -4], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.2, delay: 0.5, repeat: Infinity }}
                  className="absolute -top-2 -right-2 text-xl pointer-events-none"
                >
                  🎶
                </motion.span>
              </motion.div>
            </div>

            {/* Interactive YES / NO Choice Area */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="w-full max-w-[280px] flex gap-3 items-center justify-center pb-4 z-20"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleYes();
                }}
                className="flex-1 py-3 px-4 rounded-full bg-[#C92A2A] hover:bg-[#B02525] active:scale-95 text-white font-patrick text-xl font-bold shadow-md hover:shadow-lg transition-all duration-150 border-2 border-[#861A22] cursor-pointer"
              >
                {openingPage.yesButtonText}
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNo();
                }}
                className="flex-1 py-3 px-4 rounded-full bg-[#F2ECE0] hover:bg-[#E6DEC8] active:scale-95 text-neutral-700 font-patrick text-xl font-bold shadow-md hover:shadow-lg transition-all duration-150 border-2 border-neutral-300 cursor-pointer"
              >
                {openingPage.noButtonText}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
