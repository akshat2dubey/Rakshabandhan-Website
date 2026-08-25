import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { GinghamFrame } from './ui/ScrapbookDecorations';
import { sounds } from '../utils/audio';

export const ScrapbookContainer = ({ 
  children, 
  pageKey, 
  onSoundToggle, 
  isMuted = false 
}) => {
  const [soundActive, setSoundActive] = useState(!isMuted);

  const handleToggleSound = () => {
    const muted = sounds.toggleMute();
    setSoundActive(!muted);
    if (onSoundToggle) onSoundToggle(muted);
  };

  // Subtle page turn / scrapbook paper transition
  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.25, ease: "easeIn" } }
  };

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-2 sm:p-4 overflow-hidden bg-[#241711]">
      {/* Sound Toggle (Discreet in top-right corner) */}
      <div className="fixed top-3 right-3 z-50">
        <button
          onClick={handleToggleSound}
          className="p-2 rounded-full bg-neutral-900/60 hover:bg-neutral-900/90 text-amber-200 hover:text-white backdrop-blur-sm transition-all cursor-pointer shadow-md border border-neutral-700/50 active:scale-95"
          title={soundActive ? "Mute Sound" : "Enable Sound & Music"}
          aria-label="Toggle Sound"
        >
          {soundActive ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </button>
      </div>

      {/* Main Mobile Screen Viewport Container (9:16 aspect ratio matching mobile reference) */}
      <section 
        aria-label="Digital Scrapbook Viewport"
        className="relative w-full max-w-[400px] h-[92vh] max-h-[780px] min-h-[600px] flex flex-col z-10"
      >
        {/* Gingham Scrapbook Page Frame */}
        <div className="relative flex-1 w-full rounded-[24px] overflow-hidden shadow-2xl">
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
