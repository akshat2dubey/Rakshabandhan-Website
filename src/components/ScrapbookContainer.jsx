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
      {/* Sound Toggle (Scrapbook Taped Paper Badge in top-right corner) */}
      <div className="fixed top-2.5 right-2.5 sm:top-4 sm:right-4 z-50">
        <button
          onClick={handleToggleSound}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50/95 hover:bg-amber-100 text-neutral-800 font-patrick text-xs font-bold backdrop-blur-sm transition-all cursor-pointer shadow-md border border-amber-300/80 active:scale-95 select-none"
          title={soundActive ? "Mute Sound" : "Enable Sound & Music"}
          aria-label={soundActive ? "Mute Sound" : "Enable Sound"}
        >
          {soundActive ? (
            <>
              <Volume2 size={13} className="text-[#C92A2A]" />
              <span>Sound On 🎵</span>
            </>
          ) : (
            <>
              <VolumeX size={13} className="text-neutral-500" />
              <span>Muted 🔇</span>
            </>
          )}
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
