import React from 'react';
import { motion } from 'framer-motion';
import { referenceAssets } from '../../config/referenceAssets';
import { scrapbookConfig } from '../../config/scrapbookData';
import { sounds } from '../../utils/audio';

export const YouAreMyPage = ({ onBack }) => {
  const { youAreMyPage } = scrapbookConfig;

  const handleBack = () => {
    sounds.playPageTurn();
    onBack();
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-4 select-none overflow-hidden">
      {/* Title */}
      <div className="w-full text-center pt-2 z-20">
        <h1 className="font-abril text-2xl sm:text-3xl text-[#C92A2A] tracking-wider drop-shadow-sm">
          {youAreMyPage.title}
        </h1>
      </div>

      {/* Scattered Scrapbook Composition with Center Shin-chan & Arrows */}
      <div className="relative w-full flex-1 my-1 min-h-[390px] flex items-center justify-center overflow-hidden">
        
        {/* Authentic Center Shin-chan Artwork (Reference Image) */}
        <motion.div 
          className="relative z-10"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring' }}
        >
          <img
            src={referenceAssets.shinchanCenter}
            alt="Shin-chan Center"
            className="w-44 h-44 sm:w-52 sm:h-52 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)]"
          />
        </motion.div>

        {/* 1. Google Maps (Top Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-2 left-2 z-20"
        >
          <span className="font-patrick text-base sm:text-lg font-bold text-red-700 transform -rotate-6 inline-block bg-amber-50/90 px-2 py-0.5 rounded border border-red-200 shadow-sm">
            google maps 🗺️
          </span>
          <svg className="w-12 h-10 overflow-visible mt-0.5 ml-4" fill="none">
            <path d="M 5 0 Q 15 20 30 25" stroke="#C92A2A" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
            <polygon points="30,25 24,18 28,16" fill="#C92A2A" />
          </svg>
        </motion.div>

        {/* 2. My Lifeline (Top Right) */}
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-2 right-2 z-20 text-right"
        >
          <span className="font-patrick text-base sm:text-lg font-bold text-rose-700 transform rotate-6 inline-block bg-amber-50/90 px-2 py-0.5 rounded border border-rose-200 shadow-sm">
            my lifeline ❤️
          </span>
          <svg className="w-12 h-10 overflow-visible mt-0.5 mr-4 ml-auto" fill="none">
            <path d="M 25 0 Q 15 20 0 25" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
            <polygon points="0,25 6,18 2,16" fill="#E11D48" />
          </svg>
        </motion.div>

        {/* 3. Cloth Stealer (Middle Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="absolute top-[36%] left-0 z-20"
        >
          <span className="font-patrick text-sm sm:text-base font-bold text-amber-900 transform rotate-3 inline-block bg-amber-50/90 px-2 py-0.5 rounded border border-amber-300 shadow-sm leading-tight">
            cloth stealer 👗
          </span>
          <svg className="w-12 h-6 overflow-visible mt-0.5 ml-8" fill="none">
            <path d="M 0 5 Q 15 5 28 8" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
            <polygon points="28,8 20,4 21,11" fill="#D97706" />
          </svg>
        </motion.div>

        {/* 4. Bank Account (Middle Right) */}
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="absolute top-[36%] right-0 z-20 text-right"
        >
          <span className="font-patrick text-sm sm:text-base font-bold text-emerald-900 transform -rotate-4 inline-block bg-amber-50/90 px-2 py-0.5 rounded border border-emerald-300 shadow-sm leading-tight">
            bank account 💳
          </span>
          <svg className="w-12 h-6 overflow-visible mt-0.5 mr-8 ml-auto" fill="none">
            <path d="M 28 5 Q 15 5 0 8" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
            <polygon points="0,8 8,4 7,11" fill="#059669" />
          </svg>
        </motion.div>

        {/* 5. Crybaby (Bottom Left) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-12 left-2 z-20"
        >
          <svg className="w-10 h-8 overflow-visible ml-6 mb-0.5" fill="none">
            <path d="M 5 25 Q 12 10 20 0" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
            <polygon points="20,0 12,5 18,8" fill="#2563EB" />
          </svg>
          <span className="font-patrick text-base sm:text-lg font-bold text-blue-800 transform -rotate-6 inline-block bg-amber-50/90 px-2 py-0.5 rounded border border-blue-200 shadow-sm">
            crybaby 🥺
          </span>
        </motion.div>

        {/* 6. Entertainment (Bottom Right) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-12 right-2 z-20 text-right"
        >
          <svg className="w-10 h-8 overflow-visible mr-6 ml-auto mb-0.5" fill="none">
            <path d="M 20 25 Q 12 10 0 0" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
            <polygon points="0,0 8,5 2,8" fill="#7C3AED" />
          </svg>
          <span className="font-patrick text-base sm:text-lg font-bold text-purple-800 transform rotate-6 inline-block bg-amber-50/90 px-2 py-0.5 rounded border border-purple-200 shadow-sm">
            entertainment 🍿
          </span>
        </motion.div>

        {/* 7. Bestie (Bottom Center) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20 text-center"
        >
          <svg className="w-6 h-6 overflow-visible mx-auto mb-0.5" fill="none">
            <path d="M 3 18 L 3 2" stroke="#BE185D" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
            <polygon points="3,2 0,7 6,7" fill="#BE185D" />
          </svg>
          <span className="font-patrick text-lg sm:text-xl font-bold text-pink-900 inline-block bg-pink-100 px-3 py-0.5 rounded-full border border-pink-300 shadow-sm">
            bestie ✨
          </span>
        </motion.div>
      </div>

      {/* Back Button */}
      <div className="w-full pt-1 flex justify-center pb-2 z-30">
        <button
          onClick={handleBack}
          className="w-full max-w-[240px] py-2.5 px-4 rounded-full bg-neutral-800 hover:bg-neutral-700 active:scale-95 text-white font-patrick text-base font-bold shadow-md transition-all cursor-pointer"
        >
          {youAreMyPage.backButtonText}
        </button>
      </div>
    </div>
  );
};
