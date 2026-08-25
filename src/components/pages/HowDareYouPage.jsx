import React from 'react';
import { motion } from 'framer-motion';
import { referenceAssets } from '../../config/referenceAssets';
import { scrapbookConfig } from '../../config/scrapbookData';
import { sounds } from '../../utils/audio';

export const HowDareYouPage = ({ onRetry }) => {
  const { howDareYouPage } = scrapbookConfig;

  const handleRetry = () => {
    sounds.playPop();
    onRetry();
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-4 sm:p-6 text-center select-none bg-rose-50/20">
      {/* Heading with Vibrating Rage Animation */}
      <div className="w-full pt-4">
        <motion.h1 
          animate={{ 
            rotate: [-2, 2, -2, 2, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 0.4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="font-abril text-3xl sm:text-4xl text-[#C92A2A] tracking-wider drop-shadow-sm"
        >
          {howDareYouPage.title}
        </motion.h1>
      </div>

      {/* Angry Tantrum Shin-chan (Flailing & Stomping Tantrum Animation) */}
      <div className="relative my-auto flex flex-col justify-center items-center py-2">
        
        {/* Animated Anger Veins (💢) */}
        <motion.div
          animate={{ scale: [0.8, 1.3, 0.8], rotate: [-10, 10, -10] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="absolute -top-3 right-6 text-2xl z-20 pointer-events-none"
        >
          💢
        </motion.div>
        <motion.div
          animate={{ scale: [0.8, 1.3, 0.8], rotate: [10, -10, 10] }}
          transition={{ duration: 0.5, delay: 0.25, repeat: Infinity }}
          className="absolute -top-3 left-6 text-xl z-20 pointer-events-none"
        >
          💢
        </motion.div>

        {/* Tantrum Flailing Body Motion */}
        <motion.div
          animate={{ 
            rotate: [-6, 6, -6, 6, 0],
            y: [0, -8, 2, -8, 0],
            x: [-4, 4, -4, 4, 0]
          }}
          transition={{ 
            duration: 0.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <img
            src={referenceAssets.shinchanAngry}
            alt="Angry Shin-chan Tantrum"
            className="w-52 h-52 sm:w-60 sm:h-60 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
          />
        </motion.div>

        {/* Tears Flying */}
        <motion.div
          animate={{ y: [0, 8, 16], opacity: [1, 0.8, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
          className="absolute bottom-12 left-10 text-lg pointer-events-none"
        >
          💦
        </motion.div>
        <motion.div
          animate={{ y: [0, 8, 16], opacity: [1, 0.8, 0] }}
          transition={{ duration: 0.6, delay: 0.3, repeat: Infinity }}
          className="absolute bottom-12 right-10 text-lg pointer-events-none"
        >
          💦
        </motion.div>
      </div>

      {/* Return / Retry Button */}
      <div className="w-full max-w-[240px] pb-4 z-20">
        <button
          onClick={handleRetry}
          className="w-full py-3 px-6 rounded-full bg-[#C92A2A] hover:bg-[#B02525] active:scale-95 text-white font-patrick text-xl font-bold shadow-md hover:shadow-lg transition-all duration-150 border-2 border-[#861A22] cursor-pointer"
        >
          {howDareYouPage.retryButtonText}
        </button>
      </div>
    </div>
  );
};
