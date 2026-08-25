import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PolaroidPhoto, WashiTape, StampBadge } from '../ui/ScrapbookDecorations';
import { ChocobiSticker, ShiroSticker } from '../ui/ShinchanArtwork';
import { scrapbookConfig } from '../../config/scrapbookData';
import { sounds } from '../../utils/audio';

export const MemoriesPage = ({ onNext }) => {
  const { memoriesPage } = scrapbookConfig;
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    sounds.playPop();
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    sounds.playClick();
    setSelectedPhoto(null);
  };

  const handleProceed = () => {
    sounds.playPageTurn();
    onNext();
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-5 select-none overflow-y-auto no-scrollbar">
      {/* Header Bar */}
      <div className="w-full flex items-center justify-between border-b-2 border-dashed border-red-200 pb-2 mb-2">
        <StampBadge text="CHAPTER 01" color="red" />
        <div className="text-center">
          <h1 className="font-abril text-2xl sm:text-3xl text-red-700 tracking-wider">
            {memoriesPage.title}
          </h1>
          <p className="font-handwriting text-sm text-neutral-600 font-semibold">
            {memoriesPage.subtitle}
          </p>
        </div>
        <WashiTape color="gingham" width="w-16" rotate="4deg" />
      </div>

      {/* Scrapbook Photo Collage (Non-generic physical layout) */}
      <div className="relative w-full flex-1 my-2 grid grid-cols-2 gap-3 sm:gap-4 items-center justify-items-center py-2">
        {memoriesPage.photos.map((photo, idx) => (
          <PolaroidPhoto
            key={photo.id || idx}
            src={photo.src}
            caption={photo.caption}
            date={photo.date}
            rotation={photo.rotation}
            tapeColor={photo.tapeColor}
            className="w-full max-w-[170px]"
            onClick={() => handlePhotoClick(photo)}
          />
        ))}

        {/* Floating Scrapbook Stickers */}
        <div className="absolute -bottom-2 -left-2 pointer-events-none z-20">
          <ChocobiSticker className="w-14 h-18 sm:w-16 sm:h-20 transform -rotate-12" />
        </div>

        <div className="absolute -top-1 -right-2 pointer-events-none z-20">
          <ShiroSticker className="w-14 h-14 sm:w-16 sm:h-16 transform rotate-6" />
        </div>
      </div>

      {/* Bottom Action Button */}
      <div className="w-full pt-2 flex flex-col items-center gap-2 z-20">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleProceed}
          className="w-full max-w-xs py-3 px-5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-patrick text-lg font-bold shadow-lg hover:shadow-red-500/30 border-2 border-red-700 flex items-center justify-center gap-2 cursor-pointer"
        >
          {memoriesPage.nextButtonText}
        </motion.button>
        <span className="font-handwriting text-xs text-neutral-500">
          Tap any Polaroid to inspect the memory 📸
        </span>
      </div>

      {/* Lightbox / Memory Zoom Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -3 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm w-full bg-white p-4 rounded-lg shadow-2xl border-4 border-amber-100"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <WashiTape color="pink" width="w-24" rotate="2deg" />
              </div>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                className="w-full rounded-md shadow-inner object-cover max-h-[380px]"
              />
              <div className="mt-4 text-center">
                <h3 className="font-patrick text-xl font-bold text-neutral-800">
                  {selectedPhoto.caption}
                </h3>
                <p className="font-handwriting text-base text-red-600 font-semibold mt-1">
                  {selectedPhoto.date}
                </p>
              </div>
              <button
                onClick={handleCloseModal}
                className="mt-4 w-full py-2 bg-neutral-800 text-white rounded-full font-patrick text-base font-bold hover:bg-neutral-700 transition-colors"
              >
                Close ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
