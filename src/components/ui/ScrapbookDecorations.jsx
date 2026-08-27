import React from 'react';
import { motion } from 'framer-motion';

/**
 * Red & White Gingham Scrapbook Page Frame
 */
export const GinghamFrame = ({ children, className = "" }) => {
  return (
    <div className={`relative w-full h-full p-3 sm:p-4 bg-gingham-border rounded-[28px] shadow-2xl overflow-hidden ${className}`}>
      {/* Decorative Red Stitch Line Inside Frame */}
      <div className="w-full h-full relative rounded-[20px] bg-paper-texture border-[3px] border-[#C92A2A] shadow-inner overflow-hidden flex flex-col">
        {/* Corner Scallop Accents */}
        <div className="absolute top-1.5 left-1.5 w-6 h-6 border-t-2 border-l-2 border-[#861A22] rounded-tl-lg pointer-events-none z-20" />
        <div className="absolute top-1.5 right-1.5 w-6 h-6 border-t-2 border-r-2 border-[#861A22] rounded-tr-lg pointer-events-none z-20" />
        <div className="absolute bottom-1.5 left-1.5 w-6 h-6 border-b-2 border-l-2 border-[#861A22] rounded-bl-lg pointer-events-none z-20" />
        <div className="absolute bottom-1.5 right-1.5 w-6 h-6 border-b-2 border-r-2 border-[#861A22] rounded-br-lg pointer-events-none z-20" />
        
        {/* Inner Content Area */}
        <div className="relative w-full h-full flex-1 flex flex-col z-10 overflow-y-auto no-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

/**
 * Realistic Washi Tape Component
 */
export const WashiTape = ({ 
  color = "yellow", 
  rotate = "-3deg", 
  className = "",
  width = "w-20" 
}) => {
  const colorMap = {
    yellow: "bg-[#fae19c]/80 border-t border-b border-[#ebd082]/60",
    pink: "bg-[#fbcfe8]/80 border-t border-b border-[#f472b6]/60",
    red: "bg-[#fca5a5]/80 border-t border-b border-[#ef4444]/60",
    gingham: "bg-gingham-dense opacity-85 border border-[#dc2626]/40",
    mint: "bg-[#bbf7d0]/80 border-t border-b border-[#86efac]/60"
  };

  return (
    <div 
      className={`h-5 ${width} ${colorMap[color] || colorMap.yellow} shadow-sm backdrop-blur-[1px] pointer-events-none z-20 ${className}`}
      style={{
        transform: `rotate(${rotate})`,
        clipPath: "polygon(4% 0%, 96% 0%, 100% 50%, 96% 100%, 4% 100%, 0% 50%)"
      }}
    />
  );
};

/**
 * Hand-drawn Doodle Arrow pointing in custom direction
 */
export const DoodleArrow = ({ 
  start = { x: 0, y: 0 }, 
  end = { x: 50, y: 50 }, 
  curve = 20, 
  color = "#C92A2A",
  className = "" 
}) => {
  const midX = (start.x + end.x) / 2 + curve;
  const midY = (start.y + end.y) / 2 - Math.abs(curve) / 2;

  return (
    <svg className={`overflow-visible pointer-events-none ${className}`} style={{ position: 'absolute' }}>
      <defs>
        <marker 
          id={`arrowhead-${color.replace('#','')}`} 
          markerWidth="8" 
          markerHeight="8" 
          refX="6" 
          refY="4" 
          orient="auto"
        >
          <path d="M1,1 L7,4 L1,7 L3,4 Z" fill={color} />
        </marker>
      </defs>
      <path 
        d={`M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`} 
        fill="none" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round"
        strokeDasharray="4 3"
        markerEnd={`url(#arrowhead-${color.replace('#','')})`}
      />
    </svg>
  );
};

/**
 * Scrapbook Polaroid Photo Component
 */
export const PolaroidPhoto = ({
  src,
  caption,
  date,
  rotation = "-2deg",
  tapeColor = "yellow",
  className = "",
  onClick
}) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 30 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative bg-white p-2.5 pb-4 rounded-sm shadow-polaroid border border-neutral-200/80 cursor-pointer transition-all duration-200 ${className}`}
      style={{ transform: `rotate(${rotation})` }}
    >
      {/* Top Washi Tape */}
      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20">
        <WashiTape color={tapeColor} width="w-16" rotate="-1deg" />
      </div>

      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] bg-amber-50 rounded-[2px] overflow-hidden border border-neutral-100 shadow-card-inset">
        <img 
          src={src} 
          alt={caption || "Memory"} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Vintage Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/10 via-transparent to-rose-500/10 pointer-events-none" />
      </div>

      {/* Handwritten Caption */}
      <div className="mt-2 text-center px-1">
        <p className="font-patrick text-sm font-semibold text-neutral-800 tracking-wide leading-tight truncate">
          {caption}
        </p>
        {date && (
          <p className="font-handwriting text-xs text-red-700/80 mt-0.5">
            {date}
          </p>
        )}
      </div>
    </motion.div>
  );
};

/**
 * Interactive 3D Gift Box Component
 */
export const GiftBoxItem = ({ 
  giftNumber, 
  title, 
  color = "pink", 
  onClick, 
  isOpened = false,
  className = "" 
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.08, y: -4 }}
      whileTap={{ scale: 0.94 }}
      onClick={onClick}
      className={`relative flex flex-col items-center group cursor-pointer focus:outline-none ${className}`}
    >
      {/* Gift Box SVG */}
      <div className="relative w-20 h-24 sm:w-24 sm:h-28">
        <svg viewBox="0 0 100 110" className="w-full h-full sticker-shadow" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shadow */}
          <ellipse cx="50" cy="104" rx="36" ry="6" fill="rgba(0,0,0,0.15)" />

          {/* Box Base */}
          <rect x="15" y="45" width="70" height="55" rx="6" fill={color === "red" ? "#DC2626" : color === "yellow" ? "#F59E0B" : "#F43F5E"} stroke="#881337" strokeWidth="2.5" />
          
          {/* Vertical Ribbon */}
          <rect x="42" y="45" width="16" height="55" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.5" />

          {/* Horizontal Ribbon */}
          <rect x="15" y="68" width="70" height="14" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.5" />

          {/* Box Lid with Lift Animation */}
          <g className="group-hover:-translate-y-1.5 transition-transform duration-200">
            <rect x="10" y="32" width="80" height="18" rx="4" fill={color === "red" ? "#EF4444" : color === "yellow" ? "#FBBF24" : "#FB7185"} stroke="#881337" strokeWidth="2.5" />
            <rect x="42" y="32" width="16" height="18" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.5" />
            
            {/* Ribbon Bow on top */}
            <path d="M32 20 C22 15 25 32 44 32 C35 28 36 20 32 20 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
            <path d="M68 20 C78 15 75 32 56 32 C65 28 64 20 68 20 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
            <circle cx="50" cy="32" r="6" fill="#EAB308" stroke="#CA8A04" strokeWidth="2" />
          </g>

          {/* Sparkle if unopened */}
          {!isOpened && (
            <g className="animate-ping" transform="translate(68, 22)">
              <circle cx="4" cy="4" r="3" fill="#FDE047" />
            </g>
          )}
        </svg>

        {/* Gift Number / Opened Badge */}
        <div className={`absolute -top-1 -right-1 min-w-[24px] h-6 px-1 rounded-full ${isOpened ? 'bg-emerald-600' : 'bg-red-600'} border-2 border-white text-white font-patrick text-xs flex items-center justify-center font-bold shadow-md`}>
          {isOpened ? "✓" : giftNumber}
        </div>
      </div>

      {/* Gift Label & Opened Feedback */}
      <span className={`mt-2 font-patrick text-xs sm:text-sm font-bold transition-all px-2.5 py-0.5 rounded-full border shadow-sm ${
        isOpened 
          ? "bg-emerald-50 text-emerald-900 border-emerald-300" 
          : "bg-amber-100/90 text-red-900 group-hover:text-red-600 border-red-300/60"
      }`}>
        {title} {isOpened && <span className="text-emerald-600 ml-0.5 font-bold">✓</span>}
      </span>
    </motion.button>
  );
};

/**
 * Golden Certificate Seal / Award Ribbon
 */
export const CertificateSeal = ({ className = "w-20 h-20" }) => {
  return (
    <svg viewBox="0 0 100 120" className={`sticker-shadow ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Red Ribbon Tails */}
      <path d="M38 65 L22 115 L38 105 L50 115 L44 65 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
      <path d="M62 65 L78 115 L62 105 L50 115 L56 65 Z" fill="#B91C1C" stroke="#991B1B" strokeWidth="2" />

      {/* Golden Scallop Rosette */}
      <circle cx="50" cy="45" r="36" fill="#F59E0B" stroke="#B45309" strokeWidth="3" />
      <circle cx="50" cy="45" r="30" fill="#FBBF24" stroke="#FDE047" strokeWidth="2" strokeDasharray="4 2" />

      {/* Golden Star in center */}
      <polygon points="50,22 55,34 68,36 58,45 61,58 50,51 39,58 42,45 32,36 45,34" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.5" />
      <text x="50" y="70" fontSize="7.5" fontFamily="'Shantell Sans', sans-serif" fontWeight="900" fill="#78350F" textAnchor="middle">★ NO. 1 ★</text>
    </svg>
  );
};

/**
 * Decorative Stamp Badge
 */
export const StampBadge = ({ text = "SPECIAL", color = "red", className = "" }) => {
  return (
    <div 
      className={`inline-block px-3 py-1 font-patrick font-bold text-xs uppercase tracking-widest border-2 border-dashed rounded-md shadow-sm transform -rotate-3 select-none ${
        color === "red" 
          ? "border-red-600 text-red-600 bg-red-50/80" 
          : "border-amber-600 text-amber-700 bg-amber-50/80"
      } ${className}`}
    >
      {text}
    </div>
  );
};
