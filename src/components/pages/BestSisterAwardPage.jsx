import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import html2canvas from 'html2canvas';
import { CertificateSeal } from '../ui/ScrapbookDecorations';
import { scrapbookConfig } from '../../config/scrapbookData';
import { sounds } from '../../utils/audio';

/**
 * Stylish Executive Calligraphy Signature Component
 */
const StylishSignature = ({ className = "w-28 h-10" }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg viewBox="0 0 140 45" className="w-full h-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main Signature Fluent Stroke */}
        <path
          d="M 8 28 C 15 10, 22 2, 26 14 C 29 24, 32 36, 36 22 C 40 10, 48 8, 54 18 C 58 26, 62 12, 70 16 C 76 20, 82 8, 88 15 C 94 22, 98 12, 106 14 C 114 16, 122 8, 130 12"
          stroke="#7F1D1D"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Signature Swash & Loop */}
        <path
          d="M 18 16 C 8 32, 12 42, 38 38 C 70 34, 110 32, 136 34"
          stroke="#7F1D1D"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Dynamic Pen Dot */}
        <circle cx="134" cy="22" r="1.5" fill="#7F1D1D" />
      </svg>
      {/* Calligraphy Overlay Name */}
      <span className="absolute inset-0 flex items-center justify-center font-greatVibes text-xl sm:text-2xl text-[#7F1D1D] transform -rotate-3 select-none pointer-events-none opacity-90">
        Akshat
      </span>
    </div>
  );
};

export const BestSisterAwardPage = ({ onBack }) => {
  const { awardPage, recipientName } = scrapbookConfig;
  const certificateRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleDownloadCertificate = async () => {
    if (isDownloading || !certificateRef.current) return;
    try {
      setIsDownloading(true);
      sounds.playTada();

      // High resolution capture
      const canvas = await html2canvas(certificateRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: '#FFFDF9',
        logging: false
      });

      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `Best-Sister-Award-${recipientName || 'Certificate'}.png`;
      link.href = dataUrl;
      link.click();

      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    } catch (err) {
      console.error('Error downloading certificate:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleBack = () => {
    sounds.playPageTurn();
    onBack();
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-2 sm:p-4 select-none overflow-y-auto no-scrollbar">
      
      {/* Interactive Printable Certificate (Tapping downloads image) */}
      <motion.div
        ref={certificateRef}
        onClick={handleDownloadCertificate}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative my-auto w-full bg-[#FFFDF9] rounded-xl p-4 sm:p-5 border-[6px] border-double border-[#92400E] shadow-certificate text-center cursor-pointer transition-shadow hover:shadow-2xl overflow-hidden group"
        title="Touch certificate to download"
      >
        {/* Subtle Decorative Guilloche Border Line */}
        <div className="absolute inset-1.5 border border-[#D97706]/40 rounded-lg pointer-events-none" />
        <div className="absolute inset-2.5 border border-dashed border-[#B45309]/30 rounded-md pointer-events-none" />

        {/* Vintage Filigree Corner Ornaments */}
        <div className="absolute top-2 left-2 text-[#B45309] text-xs pointer-events-none font-serif">❧</div>
        <div className="absolute top-2 right-2 text-[#B45309] text-xs pointer-events-none font-serif transform scale-x-[-1]">❧</div>
        <div className="absolute bottom-2 left-2 text-[#B45309] text-xs pointer-events-none font-serif transform scale-y-[-1]">❧</div>
        <div className="absolute bottom-2 right-2 text-[#B45309] text-xs pointer-events-none font-serif transform scale-[-1]">❧</div>

        {/* Golden Rosette Seal */}
        <div className="absolute -top-3 -right-2 z-20 pointer-events-none">
          <CertificateSeal className="w-16 h-20 sm:w-18 sm:h-22 filter drop-shadow-md" />
        </div>

        {/* Certificate Pre-Heading */}
        <div className="pt-2">
          <p className="font-cinzel text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#92400E]">
            ★ CERTIFICATE OF RECOGNITION ★
          </p>
        </div>

        {/* Main Certificate Title */}
        <h1 className="font-cinzelDeco text-2xl sm:text-3xl font-extrabold text-[#861A22] uppercase tracking-wider mt-1 drop-shadow-sm">
          {awardPage.title}
        </h1>

        {/* Presented to Calligraphy */}
        <p className="font-pinyon text-lg sm:text-xl text-[#78350F] italic my-1">
          This is proudly presented to
        </p>

        {/* Recipient Name in Classical Calligraphy */}
        <div className="my-2 py-1 px-4 inline-block">
          <span className="font-greatVibes text-3xl sm:text-4xl text-[#991B1B] tracking-wide block">
            {recipientName}
          </span>
          {/* Ornate Flourish Underline */}
          <div className="w-36 sm:w-48 h-0.5 bg-gradient-to-r from-transparent via-[#B45309] to-transparent mx-auto mt-0.5" />
        </div>

        {/* Award Citation Text */}
        <p className="font-cormorant text-sm sm:text-base text-neutral-800 italic leading-relaxed max-w-[280px] mx-auto mt-2">
          "{awardPage.awardText}"
        </p>

        {/* Classical Signatures & Seal Section */}
        <div className="mt-5 pt-3 border-t border-[#D97706]/30 grid grid-cols-2 gap-2 items-end px-2">
          {/* Left: Date / Recognition */}
          <div className="text-left">
            <p className="font-pinyon text-sm text-[#78350F]">Forever & Always</p>
            <div className="w-20 h-px bg-[#B45309]/50 my-0.5" />
            <p className="font-cinzel text-[9px] uppercase tracking-wider text-neutral-600 font-semibold">
              DATE OF HONOUR
            </p>
          </div>

          {/* Right: Stylish Signature */}
          <div className="text-right flex flex-col items-end">
            <StylishSignature className="w-24 sm:w-28 h-8 sm:h-9" />
            <div className="w-24 h-px bg-[#B45309]/50 my-0.5" />
            <p className="font-cinzel text-[9px] uppercase tracking-wider text-neutral-600 font-semibold">
              OFFICIAL SIGNATURE
            </p>
          </div>
        </div>

        {/* Discreet Tap Hint */}
        <div className="mt-3">
          <span className="font-montserrat text-[10px] font-semibold text-amber-800/80 bg-amber-100/70 border border-amber-300/50 px-2.5 py-0.5 rounded-full inline-block">
            {isDownloading ? "Generating Image..." : "📥 Tap certificate to download"}
          </span>
        </div>
      </motion.div>

      {/* Download Success Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-neutral-900 text-white font-patrick text-sm px-4 py-2 rounded-full shadow-2xl z-50 flex items-center gap-1.5 border border-amber-500/40"
          >
            <span>🎉</span>
            <span>Certificate downloaded successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Gifts Navigation Button */}
      <div className="w-full pt-2 flex justify-center pb-2 z-20">
        <button
          onClick={handleBack}
          className="w-full max-w-[240px] py-2.5 px-4 rounded-full bg-neutral-800 hover:bg-neutral-700 active:scale-95 text-white font-patrick text-base font-bold shadow-md transition-all cursor-pointer"
        >
          {awardPage.backButtonText}
        </button>
      </div>
    </div>
  );
};
