import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Sparkles, Heart } from 'lucide-react';
import { GinghamFrame } from './ui/ScrapbookDecorations';
import { sounds } from '../utils/audio';

export const ScrapbookContainer = ({ 
  children, 
  pageKey, 
  pageTitle = "Scrapbook", 
  onSoundToggle, 
  isMuted = false 
}) => {
  const [soundActive, setSoundActive] = useState(!isMuted);

  const handleToggleSound = () => {
    const muted = sounds.toggleMute();
    setSoundActive(!muted);
    if (onSoundToggle) onSoundToggle(muted);
  };

  // Page transition animations (realistic scrapbook paper flip/slide)
  const pageVariants = {
    initial: { opacity: 0, scale: 0.96, rotateY: -10 },
    animate: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 0.45, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.96, rotateY: 10, transition: { duration: 0.35, ease: "easeIn" } }
  };

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
      {/* Outer Aesthetic Desk Background with Subtle Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30 z-0">
        <div className="absolute top-10 left-10 text-rose-400/40 text-4xl animate-float">🖍️</div>
        <div className="absolute bottom-20 left-16 text-amber-400/30 text-3xl animate-bounce-gentle">⭐</div>
        <div className="absolute top-24 right-16 text-red-400/30 text-3xl animate-float">💖</div>
        <div className="absolute bottom-16 right-20 text-rose-400/30 text-4xl animate-bounce-gentle">🎁</div>
      </div>

      {/* Main Mobile Screen Viewport Container (9:16 mobile aspect ratio on desktop) */}
      <section 
        aria-label="Digital Scrapbook Viewport"
        className="relative w-full max-w-[425px] h-[92vh] max-h-[820px] min-h-[640px] flex flex-col z-10"
      >
        {/* Floating Top Floating Controls Bar */}
        <header className="w-full flex items-center justify-between px-3 py-1.5 mb-1 bg-amber-950/70 backdrop-blur-md rounded-full text-amber-100 shadow-md border border-amber-800/50 z-30">
          <div className="flex items-center gap-1.5 font-patrick text-xs sm:text-sm font-semibold tracking-wide">
            <span className="text-red-400 animate-pulse">●</span>
            <span className="truncate">{pageTitle}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Audio BGM / Sound Toggle */}
            <button
              onClick={handleToggleSound}
              className="p-1.5 rounded-full bg-amber-900/80 hover:bg-amber-800 text-amber-200 hover:text-white transition-all cursor-pointer shadow-sm active:scale-95"
              title={soundActive ? "Mute Sound" : "Enable Sound & Music"}
            >
              {soundActive ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>
          </div>
        </header>

        {/* Gingham Scrapbook Page Frame */}
        <div className="relative flex-1 w-full rounded-[28px] overflow-hidden shadow-2xl">
          <GinghamFrame className="h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={pageKey}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full h-full flex flex-col"
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </GinghamFrame>
        </div>
      </section>
    </main>
  );
};
