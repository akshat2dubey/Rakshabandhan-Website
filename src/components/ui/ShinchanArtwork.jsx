import React from 'react';

// Common Shin-chan Skin & Palette Constants
const SKIN = "#FFE0BD";
const SHIRT = "#E53935";
const SHORTS = "#FDD835";
const HAIR = "#1A1A1A";
const SHOES = "#00ACC1";
const SOCKS = "#FFFFFF";
const BLUSH = "rgba(239, 83, 80, 0.45)";

/**
 * 1. Happy Waving Shin-chan (Opening Page)
 */
export const ShinchanWaving = ({ className = "w-44 h-44", animated = true }) => {
  return (
    <svg viewBox="0 0 200 220" className={`sticker-shadow ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={animated ? "animate-float" : ""}>
        {/* Shadow */}
        <ellipse cx="100" cy="210" rx="45" ry="8" fill="rgba(0,0,0,0.12)" />

        {/* Shoes & Legs */}
        <ellipse cx="78" cy="195" rx="14" ry="7" fill={SHOES} stroke="#1A1A1A" strokeWidth="2.5" />
        <ellipse cx="122" cy="195" rx="14" ry="7" fill={SHOES} stroke="#1A1A1A" strokeWidth="2.5" />
        <rect x="74" y="180" width="8" height="15" rx="3" fill={SOCKS} stroke="#1A1A1A" strokeWidth="2.5" />
        <rect x="118" y="180" width="8" height="15" rx="3" fill={SOCKS} stroke="#1A1A1A" strokeWidth="2.5" />
        <path d="M72 165 L76 182" stroke="#1A1A1A" strokeWidth="5" strokeLinecap="round" />
        <path d="M128 165 L124 182" stroke="#1A1A1A" strokeWidth="5" strokeLinecap="round" />

        {/* Yellow Shorts */}
        <path d="M60 142 C60 142 62 170 78 170 C92 170 95 158 100 158 C105 158 108 170 122 170 C138 170 140 142 140 142 Z" fill={SHORTS} stroke="#1A1A1A" strokeWidth="3" />

        {/* Red Shirt Body */}
        <path d="M52 110 C52 110 50 145 62 146 C75 147 125 147 138 146 C150 145 148 110 148 110 Z" fill={SHIRT} stroke="#1A1A1A" strokeWidth="3" strokeLinejoin="round" />
        <path d="M52 110 L38 128 C36 132 40 138 46 134 L58 124" fill={SHIRT} stroke="#1A1A1A" strokeWidth="2.5" />
        {/* Left Arm & Hand Resting */}
        <path d="M40 130 C34 135 30 145 36 150 C42 154 48 145 48 138" fill={SKIN} stroke="#1A1A1A" strokeWidth="2.5" />

        {/* Right Waving Arm */}
        <path d="M148 110 L168 95 C172 92 178 98 172 104 L148 124" fill={SHIRT} stroke="#1A1A1A" strokeWidth="2.5" />
        <g className={animated ? "origin-[168px_95px] animate-wiggle" : ""}>
          <path d="M168 94 C175 88 185 85 188 92 C192 98 186 106 178 106 C173 106 168 101 168 94 Z" fill={SKIN} stroke="#1A1A1A" strokeWidth="2.5" />
          <circle cx="184" cy="88" r="3" fill={SKIN} stroke="#1A1A1A" strokeWidth="1.5" />
          <circle cx="190" cy="94" r="3" fill={SKIN} stroke="#1A1A1A" strokeWidth="1.5" />
        </g>

        {/* Head - Shin-chan's distinct cheek silhouette */}
        <path d="M50 75 C42 85 45 105 60 112 C75 118 135 118 148 108 C158 100 160 85 152 70 C145 55 130 35 100 35 C68 35 55 58 50 75 Z" fill={SKIN} stroke="#1A1A1A" strokeWidth="3.5" />

        {/* Hair - Classic Black Outline & Cap */}
        <path d="M50 70 C48 55 58 35 100 35 C132 35 146 50 152 65 C146 62 135 60 125 60 C110 60 98 68 85 68 C72 68 60 62 50 70 Z" fill={HAIR} />
        <path d="M50 70 C48 55 58 35 100 35 C132 35 146 50 152 65" stroke="#1A1A1A" strokeWidth="3.5" strokeLinecap="round" />

        {/* Big Bold Eyebrows */}
        <path d="M58 64 C64 56 78 55 86 64 C88 66 84 69 80 68 C72 65 64 68 58 64 Z" fill={HAIR} />
        <path d="M112 64 C120 55 134 56 140 64 C134 68 126 65 118 68 C114 69 110 66 112 64 Z" fill={HAIR} />

        {/* Eyes */}
        <ellipse cx="76" cy="78" rx="8" ry="10" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="2.5" />
        <circle cx="78" cy="78" r="4.5" fill="#1A1A1A" />
        <circle cx="80" cy="76" r="1.5" fill="#FFFFFF" />

        <ellipse cx="122" cy="78" rx="8" ry="10" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="2.5" />
        <circle cx="120" cy="78" r="4.5" fill="#1A1A1A" />
        <circle cx="122" cy="76" r="1.5" fill="#FFFFFF" />

        {/* Rosy Cheeks */}
        <ellipse cx="62" cy="94" rx="9" ry="6" fill={BLUSH} />
        <ellipse cx="136" cy="94" rx="9" ry="6" fill={BLUSH} />

        {/* Happy Open Mouth */}
        <path d="M90 92 C90 92 98 104 110 92 C105 106 95 106 90 92 Z" fill="#C62828" stroke="#1A1A1A" strokeWidth="2" strokeLinejoin="round" />
        <path d="M93 96 C98 94 102 94 107 96" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

        {/* Small Cute Ear */}
        <path d="M46 80 C40 82 40 92 46 94" fill={SKIN} stroke="#1A1A1A" strokeWidth="2.5" />
        <path d="M152 78 C158 80 158 90 152 92" fill={SKIN} stroke="#1A1A1A" strokeWidth="2.5" />
      </g>
    </svg>
  );
};

/**
 * 2. Comically Angry Shin-chan ("HOW DARE YOU?" Page)
 */
export const ShinchanAngry = ({ className = "w-48 h-48", animated = true }) => {
  return (
    <svg viewBox="0 0 220 230" className={`sticker-shadow ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={animated ? "animate-wiggle" : ""}>
        {/* Anger Vein Mark 💢 */}
        <g className="animate-bounce" transform="translate(155, 30)">
          <path d="M0 8 L16 8 M8 0 L8 16 M2 2 L14 14 M14 2 L2 14" stroke="#D32F2F" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M-4 6 C2 2 10 2 16 -2 M-2 18 C4 14 14 14 18 10" stroke="#D32F2F" strokeWidth="3" strokeLinecap="round" />
        </g>
        <g className="animate-pulse" transform="translate(30, 45)">
          <path d="M0 6 L12 6 M6 0 L6 12" stroke="#D32F2F" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Shadow */}
        <ellipse cx="110" cy="218" rx="50" ry="8" fill="rgba(0,0,0,0.15)" />

        {/* Legs stomping */}
        <ellipse cx="85" cy="205" rx="14" ry="7" fill={SHOES} stroke="#1A1A1A" strokeWidth="2.5" />
        <ellipse cx="138" cy="200" rx="14" ry="7" fill={SHOES} stroke="#1A1A1A" strokeWidth="2.5" transform="rotate(-15 138 200)" />
        <rect x="81" y="190" width="8" height="15" rx="3" fill={SOCKS} stroke="#1A1A1A" strokeWidth="2.5" />
        <rect x="132" y="185" width="8" height="15" rx="3" fill={SOCKS} stroke="#1A1A1A" strokeWidth="2.5" transform="rotate(-15 132 185)" />

        {/* Shorts */}
        <path d="M70 152 C70 152 72 180 88 180 C102 180 105 168 110 168 C115 168 118 180 134 180 C150 180 152 152 152 152 Z" fill={SHORTS} stroke="#1A1A1A" strokeWidth="3" />

        {/* Red Shirt Body leaning forward */}
        <path d="M62 120 C62 120 60 155 72 156 C85 157 135 157 148 156 C160 155 158 120 158 120 Z" fill={SHIRT} stroke="#1A1A1A" strokeWidth="3" strokeLinejoin="round" />

        {/* Angry Fists Flailing */}
        {/* Left Fist */}
        <path d="M62 120 L40 105 C36 102 30 108 34 114 L55 132" fill={SHIRT} stroke="#1A1A1A" strokeWidth="2.5" />
        <circle cx="34" cy="104" r="10" fill={SKIN} stroke="#1A1A1A" strokeWidth="2.5" />
        <path d="M30 102 C34 98 38 106 34 108" stroke="#1A1A1A" strokeWidth="2" />

        {/* Right Fist */}
        <path d="M158 120 L180 105 C184 102 190 108 186 114 L165 132" fill={SHIRT} stroke="#1A1A1A" strokeWidth="2.5" />
        <circle cx="186" cy="104" r="10" fill={SKIN} stroke="#1A1A1A" strokeWidth="2.5" />
        <path d="M182 102 C186 98 190 106 186 108" stroke="#1A1A1A" strokeWidth="2" />

        {/* Head */}
        <path d="M60 85 C52 95 55 115 70 122 C85 128 145 128 158 118 C168 110 170 95 162 80 C155 65 140 45 110 45 C78 45 65 68 60 85 Z" fill={SKIN} stroke="#1A1A1A" strokeWidth="3.5" />

        {/* Hair */}
        <path d="M60 80 C58 65 68 45 110 45 C142 45 156 60 162 75 C156 72 145 70 135 70 C120 70 108 78 95 78 C82 78 70 72 60 80 Z" fill={HAIR} />
        <path d="M60 80 C58 65 68 45 110 45 C142 45 156 75" stroke="#1A1A1A" strokeWidth="3.5" strokeLinecap="round" />

        {/* Fierce Furious Slanted Eyebrows */}
        <path d="M65 78 L95 68 C96 74 90 76 80 75 L68 82 Z" fill={HAIR} />
        <path d="M155 78 L125 68 C124 74 130 76 140 75 L152 82 Z" fill={HAIR} />

        {/* Angry Glaring Eyes */}
        <ellipse cx="86" cy="86" rx="8" ry="8" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="2.5" />
        <circle cx="90" cy="85" r="4.5" fill="#1A1A1A" />
        <circle cx="91" cy="83" r="1.5" fill="#FFFFFF" />
        {/* Eye frown lines */}
        <path d="M78 78 L95 82" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />

        <ellipse cx="134" cy="86" rx="8" ry="8" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="2.5" />
        <circle cx="130" cy="85" r="4.5" fill="#1A1A1A" />
        <circle cx="129" cy="83" r="1.5" fill="#FFFFFF" />
        <path d="M142 78 L125 82" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />

        {/* Dramatic Yelling Mouth */}
        <path d="M92 98 C92 98 110 90 128 98 C128 118 92 118 92 98 Z" fill="#991B1B" stroke="#1A1A1A" strokeWidth="2.5" strokeLinejoin="round" />
        {/* Tongue / teeth */}
        <path d="M96 102 C104 99 116 99 124 102" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M100 114 C106 108 114 108 120 114" fill="#EF4444" />

        {/* Sweat Drop */}
        <path d="M165 92 C165 92 172 102 168 106 C164 110 158 105 160 100 Z" fill="#60A5FA" stroke="#1E40AF" strokeWidth="1.5" />
      </g>
    </svg>
  );
};

/**
 * 3. Thinking / Mischievous Shin-chan ("Are you really..." Page)
 */
export const ShinchanThinking = ({ className = "w-44 h-44", animated = true }) => {
  return (
    <svg viewBox="0 0 200 220" className={`sticker-shadow ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={animated ? "animate-bounce-gentle" : ""}>
        {/* Question marks */}
        <text x="155" y="55" fontSize="26" fontFamily="Caveat, cursive" fontWeight="bold" fill="#D32F2F" className="animate-pulse">?</text>
        <text x="175" y="40" fontSize="18" fontFamily="Caveat, cursive" fontWeight="bold" fill="#F59E0B">?</text>

        {/* Shadow */}
        <ellipse cx="100" cy="208" rx="42" ry="7" fill="rgba(0,0,0,0.12)" />

        {/* Legs & Shoes */}
        <ellipse cx="80" cy="195" rx="13" ry="6" fill={SHOES} stroke="#1A1A1A" strokeWidth="2.5" />
        <ellipse cx="120" cy="195" rx="13" ry="6" fill={SHOES} stroke="#1A1A1A" strokeWidth="2.5" />
        <rect x="76" y="180" width="8" height="15" rx="3" fill={SOCKS} stroke="#1A1A1A" strokeWidth="2.5" />
        <rect x="116" y="180" width="8" height="15" rx="3" fill={SOCKS} stroke="#1A1A1A" strokeWidth="2.5" />

        {/* Shorts */}
        <path d="M62 142 C62 142 64 170 78 170 C92 170 95 158 100 158 C105 158 108 170 122 170 C136 170 138 142 138 142 Z" fill={SHORTS} stroke="#1A1A1A" strokeWidth="3" />

        {/* Shirt */}
        <path d="M54 110 C54 110 52 145 64 146 C77 147 123 147 136 146 C148 145 146 110 146 110 Z" fill={SHIRT} stroke="#1A1A1A" strokeWidth="3" />

        {/* Left Hand on hip */}
        <path d="M54 112 L40 126 C36 130 42 138 48 134 L56 122" fill={SHIRT} stroke="#1A1A1A" strokeWidth="2.5" />
        <circle cx="44" cy="136" r="7" fill={SKIN} stroke="#1A1A1A" strokeWidth="2.5" />

        {/* Right Hand touching chin playfully */}
        <path d="M146 112 L132 120 L118 102" fill="none" stroke={SKIN} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="118" cy="102" r="7" fill={SKIN} stroke="#1A1A1A" strokeWidth="2.5" />

        {/* Head */}
        <path d="M50 75 C42 85 45 105 60 112 C75 118 135 118 148 108 C158 100 160 85 152 70 C145 55 130 35 100 35 C68 35 55 58 50 75 Z" fill={SKIN} stroke="#1A1A1A" strokeWidth="3.5" />

        {/* Hair */}
        <path d="M50 70 C48 55 58 35 100 35 C132 35 146 50 152 65 C146 62 135 60 125 60 C110 60 98 68 85 68 C72 68 60 62 50 70 Z" fill={HAIR} />
        <path d="M50 70 C48 55 58 35 100 35 C132 35 146 50 152 65" stroke="#1A1A1A" strokeWidth="3.5" strokeLinecap="round" />

        {/* Eyebrows - one raised playfully */}
        <path d="M56 66 C62 60 76 60 84 68 C80 72 70 70 56 66 Z" fill={HAIR} />
        <path d="M110 54 C120 44 136 46 142 56 C134 58 124 56 110 54 Z" fill={HAIR} />

        {/* Eyes - looking up mischievously */}
        <ellipse cx="76" cy="78" rx="8" ry="10" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="2.5" />
        <circle cx="78" cy="74" r="4.5" fill="#1A1A1A" />
        <circle cx="80" cy="72" r="1.5" fill="#FFFFFF" />

        <ellipse cx="122" cy="78" rx="8" ry="10" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="2.5" />
        <circle cx="124" cy="74" r="4.5" fill="#1A1A1A" />
        <circle cx="126" cy="72" r="1.5" fill="#FFFFFF" />

        {/* Cheek Blush */}
        <ellipse cx="62" cy="94" rx="9" ry="6" fill={BLUSH} />
        <ellipse cx="136" cy="94" rx="9" ry="6" fill={BLUSH} />

        {/* Smug / Smirking curved mouth */}
        <path d="M88 94 C96 98 108 98 114 90" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  );
};

/**
 * 4. Shin-chan Center ("YOU ARE MY..." Page)
 */
export const ShinchanCenter = ({ className = "w-48 h-48", animated = true }) => {
  return (
    <svg viewBox="0 0 210 220" className={`sticker-shadow ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={animated ? "animate-pulse-slow" : ""}>
        {/* Fun aura / sparkle */}
        <circle cx="105" cy="110" r="85" fill="rgba(254, 240, 138, 0.25)" stroke="#FDE047" strokeWidth="2" strokeDasharray="6 6" />

        {/* Shadow */}
        <ellipse cx="105" cy="208" rx="46" ry="7" fill="rgba(0,0,0,0.12)" />

        {/* Legs Spread */}
        <ellipse cx="70" cy="198" rx="14" ry="7" fill={SHOES} stroke="#1A1A1A" strokeWidth="2.5" />
        <ellipse cx="140" cy="198" rx="14" ry="7" fill={SHOES} stroke="#1A1A1A" strokeWidth="2.5" />
        <rect x="66" y="184" width="8" height="14" rx="3" fill={SOCKS} stroke="#1A1A1A" strokeWidth="2.5" />
        <rect x="136" y="184" width="8" height="14" rx="3" fill={SOCKS} stroke="#1A1A1A" strokeWidth="2.5" />

        {/* Yellow Shorts */}
        <path d="M58 145 C58 145 62 174 80 174 C96 174 99 160 105 160 C111 160 114 174 130 174 C148 174 152 145 152 145 Z" fill={SHORTS} stroke="#1A1A1A" strokeWidth="3" />

        {/* Red Shirt */}
        <path d="M54 112 C54 112 52 148 66 148 C80 148 130 148 144 148 C158 148 156 112 156 112 Z" fill={SHIRT} stroke="#1A1A1A" strokeWidth="3" />

        {/* Arms wide open */}
        {/* Left Arm */}
        <path d="M54 115 L25 105 C20 102 16 112 22 116 L54 130" fill={SHIRT} stroke="#1A1A1A" strokeWidth="2.5" />
        <circle cx="20" cy="108" r="8" fill={SKIN} stroke="#1A1A1A" strokeWidth="2.5" />

        {/* Right Arm */}
        <path d="M156 115 L185 105 C190 102 194 112 188 116 L156 130" fill={SHIRT} stroke="#1A1A1A" strokeWidth="2.5" />
        <circle cx="190" cy="108" r="8" fill={SKIN} stroke="#1A1A1A" strokeWidth="2.5" />

        {/* Head */}
        <path d="M55 75 C47 85 50 105 65 112 C80 118 140 118 153 108 C163 100 165 85 157 70 C150 55 135 35 105 35 C73 35 60 58 55 75 Z" fill={SKIN} stroke="#1A1A1A" strokeWidth="3.5" />

        {/* Hair */}
        <path d="M55 70 C53 55 63 35 105 35 C137 35 151 50 157 65 C151 62 140 60 130 60 C115 60 103 68 90 68 C77 68 65 62 55 70 Z" fill={HAIR} />
        <path d="M55 70 C53 55 63 35 105 35 C137 35 151 65" stroke="#1A1A1A" strokeWidth="3.5" strokeLinecap="round" />

        {/* Bold Brows */}
        <path d="M63 64 C69 56 83 55 91 64 C93 66 89 69 85 68 C77 65 69 68 63 64 Z" fill={HAIR} />
        <path d="M117 64 C125 55 139 56 145 64 C139 68 131 65 123 68 C119 69 115 66 117 64 Z" fill={HAIR} />

        {/* Eyes */}
        <ellipse cx="81" cy="78" rx="8" ry="10" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="2.5" />
        <circle cx="83" cy="78" r="4.5" fill="#1A1A1A" />
        <circle cx="85" cy="76" r="1.5" fill="#FFFFFF" />

        <ellipse cx="127" cy="78" rx="8" ry="10" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="2.5" />
        <circle cx="125" cy="78" r="4.5" fill="#1A1A1A" />
        <circle cx="127" cy="76" r="1.5" fill="#FFFFFF" />

        {/* Blush */}
        <ellipse cx="67" cy="94" rx="9" ry="6" fill={BLUSH} />
        <ellipse cx="141" cy="94" rx="9" ry="6" fill={BLUSH} />

        {/* Big Smile */}
        <path d="M94 92 C94 92 103 106 116 92 C110 108 100 108 94 92 Z" fill="#C62828" stroke="#1A1A1A" strokeWidth="2" strokeLinejoin="round" />
      </g>
    </svg>
  );
};

/**
 * 5. Shin-chan with Award & Bowtie ("Best Sister Award" Page)
 */
export const ShinchanAward = ({ className = "w-44 h-44", animated = true }) => {
  return (
    <svg viewBox="0 0 200 220" className={`sticker-shadow ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={animated ? "animate-bounce-gentle" : ""}>
        {/* Golden Trophy / Medal */}
        <g transform="translate(140, 100)">
          <circle cx="16" cy="16" r="16" fill="#FBBF24" stroke="#B45309" strokeWidth="2" />
          <path d="M16 6 L19 13 L26 14 L21 19 L22 26 L16 22 L10 26 L11 19 L6 14 L13 13 Z" fill="#FEF08A" />
          <path d="M10 32 L4 52 L12 48 L18 52 L14 32 Z" fill="#EF4444" stroke="#991B1B" strokeWidth="1" />
          <path d="M22 32 L16 52 L24 48 L30 52 L26 32 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="1" />
        </g>

        {/* Shadow */}
        <ellipse cx="90" cy="208" rx="42" ry="7" fill="rgba(0,0,0,0.12)" />

        {/* Shoes & Legs */}
        <ellipse cx="70" cy="195" rx="13" ry="6" fill={SHOES} stroke="#1A1A1A" strokeWidth="2.5" />
        <ellipse cx="110" cy="195" rx="13" ry="6" fill={SHOES} stroke="#1A1A1A" strokeWidth="2.5" />
        <rect x="66" y="180" width="8" height="15" rx="3" fill={SOCKS} stroke="#1A1A1A" strokeWidth="2.5" />
        <rect x="106" y="180" width="8" height="15" rx="3" fill={SOCKS} stroke="#1A1A1A" strokeWidth="2.5" />

        {/* Yellow Shorts */}
        <path d="M52 142 C52 142 54 170 68 170 C82 170 85 158 90 158 C95 158 98 170 112 170 C126 170 128 142 128 142 Z" fill={SHORTS} stroke="#1A1A1A" strokeWidth="3" />

        {/* Red Shirt Body with Bow Tie */}
        <path d="M44 110 C44 110 42 145 54 146 C67 147 113 147 126 146 C138 145 136 110 136 110 Z" fill={SHIRT} stroke="#1A1A1A" strokeWidth="3" />

        {/* Red / Gold Bow Tie */}
        <g transform="translate(80, 112)">
          <polygon points="0,0 20,10 0,20" fill="#F59E0B" stroke="#1A1A1A" strokeWidth="1.5" />
          <polygon points="20,10 40,0 40,20" fill="#F59E0B" stroke="#1A1A1A" strokeWidth="1.5" />
          <circle cx="20" cy="10" r="4" fill="#B45309" stroke="#1A1A1A" strokeWidth="1.5" />
        </g>

        {/* Left Hand holding certificate */}
        <path d="M44 112 L28 132 C24 138 32 145 38 140 L50 126" fill={SHIRT} stroke="#1A1A1A" strokeWidth="2.5" />
        <circle cx="34" cy="142" r="7" fill={SKIN} stroke="#1A1A1A" strokeWidth="2.5" />

        {/* Head */}
        <path d="M40 75 C32 85 35 105 50 112 C65 118 125 118 138 108 C148 100 150 85 142 70 C135 55 120 35 90 35 C58 35 45 58 40 75 Z" fill={SKIN} stroke="#1A1A1A" strokeWidth="3.5" />

        {/* Hair */}
        <path d="M40 70 C38 55 48 35 90 35 C122 35 136 50 142 65 C136 62 125 60 115 60 C100 60 88 68 75 68 C62 68 50 62 40 70 Z" fill={HAIR} />
        <path d="M40 70 C38 55 48 35 90 35 C122 35 136 50 142 65" stroke="#1A1A1A" strokeWidth="3.5" strokeLinecap="round" />

        {/* Proud Eyebrows */}
        <path d="M48 64 C54 56 68 55 76 64 C78 66 74 69 70 68 C62 65 54 68 48 64 Z" fill={HAIR} />
        <path d="M102 64 C110 55 124 56 130 64 C124 68 116 65 108 68 C104 69 100 66 102 64 Z" fill={HAIR} />

        {/* Proud Wink / Sparkle Eye */}
        <ellipse cx="66" cy="78" rx="8" ry="10" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="2.5" />
        <circle cx="68" cy="78" r="4.5" fill="#1A1A1A" />
        <circle cx="70" cy="76" r="1.5" fill="#FFFFFF" />

        <path d="M106 78 C112 72 122 72 128 78" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" />

        {/* Rosy Cheeks */}
        <ellipse cx="52" cy="94" rx="9" ry="6" fill={BLUSH} />
        <ellipse cx="126" cy="94" rx="9" ry="6" fill={BLUSH} />

        {/* Proud Grin */}
        <path d="M80 92 C80 92 88 104 100 92 Z" fill="#C62828" stroke="#1A1A1A" strokeWidth="2" />
      </g>
    </svg>
  );
};

/**
 * 6. Shin-chan Sparkling Eyes ("Do you wanna see it?" Page)
 */
export const ShinchanSparkle = ({ className = "w-48 h-48", animated = true }) => {
  return (
    <svg viewBox="0 0 200 220" className={`sticker-shadow ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className={animated ? "animate-bounce-gentle" : ""}>
        {/* Floating Sparkles */}
        <g transform="translate(30, 40)" className="animate-spin-slow">
          <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" fill="#FBBF24" />
        </g>
        <g transform="translate(160, 45)" className="animate-pulse">
          <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" fill="#F43F5E" />
        </g>

        {/* Shadow */}
        <ellipse cx="100" cy="208" rx="42" ry="7" fill="rgba(0,0,0,0.12)" />

        {/* Shoes & Legs */}
        <ellipse cx="78" cy="195" rx="14" ry="7" fill={SHOES} stroke="#1A1A1A" strokeWidth="2.5" />
        <ellipse cx="122" cy="195" rx="14" ry="7" fill={SHOES} stroke="#1A1A1A" strokeWidth="2.5" />
        <rect x="74" y="180" width="8" height="15" rx="3" fill={SOCKS} stroke="#1A1A1A" strokeWidth="2.5" />
        <rect x="118" y="180" width="8" height="15" rx="3" fill={SOCKS} stroke="#1A1A1A" strokeWidth="2.5" />

        {/* Yellow Shorts */}
        <path d="M60 142 C60 142 62 170 78 170 C92 170 95 158 100 158 C105 158 108 170 122 170 C138 170 140 142 140 142 Z" fill={SHORTS} stroke="#1A1A1A" strokeWidth="3" />

        {/* Red Shirt Body */}
        <path d="M52 110 C52 110 50 145 62 146 C75 147 125 147 138 146 C150 145 148 110 148 110 Z" fill={SHIRT} stroke="#1A1A1A" strokeWidth="3" />

        {/* Hands Clutched excitedly under chin */}
        <g transform="translate(85, 102)">
          <circle cx="8" cy="10" r="9" fill={SKIN} stroke="#1A1A1A" strokeWidth="2.5" />
          <circle cx="22" cy="10" r="9" fill={SKIN} stroke="#1A1A1A" strokeWidth="2.5" />
          <path d="M2 14 C8 20 22 20 28 14" stroke="#1A1A1A" strokeWidth="2" />
        </g>

        {/* Head */}
        <path d="M50 75 C42 85 45 105 60 112 C75 118 135 118 148 108 C158 100 160 85 152 70 C145 55 130 35 100 35 C68 35 55 58 50 75 Z" fill={SKIN} stroke="#1A1A1A" strokeWidth="3.5" />

        {/* Hair */}
        <path d="M50 70 C48 55 58 35 100 35 C132 35 146 50 152 65 C146 62 135 60 125 60 C110 60 98 68 85 68 C72 68 60 62 50 70 Z" fill={HAIR} />
        <path d="M50 70 C48 55 58 35 100 35 C132 35 146 50 152 65" stroke="#1A1A1A" strokeWidth="3.5" strokeLinecap="round" />

        {/* High Arched Excited Brows */}
        <path d="M56 58 C64 48 78 48 86 58 C80 62 70 60 56 58 Z" fill={HAIR} />
        <path d="M112 58 C120 48 134 48 142 58 C136 62 126 60 112 58 Z" fill={HAIR} />

        {/* Giant Sparkly Anime Eyes ✨ */}
        <ellipse cx="76" cy="78" rx="12" ry="14" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="2" />
        <circle cx="72" cy="72" r="5.5" fill="#FFFFFF" />
        <circle cx="82" cy="84" r="3.5" fill="#FFFFFF" />
        <circle cx="70" cy="84" r="2" fill="#F43F5E" />

        <ellipse cx="122" cy="78" rx="12" ry="14" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="2" />
        <circle cx="118" cy="72" r="5.5" fill="#FFFFFF" />
        <circle cx="128" cy="84" r="3.5" fill="#FFFFFF" />
        <circle cx="116" cy="84" r="2" fill="#F43F5E" />

        {/* Extra Cute Rosy Cheeks */}
        <ellipse cx="60" cy="94" rx="12" ry="8" fill="#FB7185" opacity="0.6" />
        <ellipse cx="138" cy="94" rx="12" ry="8" fill="#FB7185" opacity="0.6" />

        {/* Cute Open '3' Shaped Mouth */}
        <path d="M92 92 C94 98 100 98 100 92 C100 98 106 98 108 92" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
};

/**
 * 7. Shiro the fluffy puppy sticker
 */
export const ShiroSticker = ({ className = "w-24 h-24" }) => {
  return (
    <svg viewBox="0 0 120 120" className={`sticker-shadow ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        {/* Soft Shadow */}
        <ellipse cx="60" cy="110" rx="35" ry="6" fill="rgba(0,0,0,0.12)" />

        {/* Paws */}
        <ellipse cx="42" cy="104" rx="9" ry="5" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="2" />
        <ellipse cx="78" cy="104" rx="9" ry="5" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="2" />

        {/* Fluffy Body */}
        <path d="M35 75 C30 85 30 100 45 104 C55 106 65 106 75 104 C90 100 90 85 85 75 Z" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="2.5" />

        {/* Blue Collar */}
        <path d="M40 76 C52 82 68 82 80 76" stroke="#0284C7" strokeWidth="4.5" strokeLinecap="round" />

        {/* Fluffy Round Head */}
        <ellipse cx="60" cy="50" rx="34" ry="28" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="3" />

        {/* Floppy Black Ears */}
        <path d="M28 42 C18 48 16 65 24 72 C30 75 34 68 32 55 Z" fill="#1A1A1A" />
        <path d="M92 42 C102 48 104 65 96 72 C90 75 86 68 88 55 Z" fill="#1A1A1A" />

        {/* Cute Face */}
        <circle cx="48" cy="48" r="3.5" fill="#1A1A1A" />
        <circle cx="72" cy="48" r="3.5" fill="#1A1A1A" />

        {/* Little Black Nose */}
        <ellipse cx="60" cy="54" rx="3.5" ry="2.5" fill="#1A1A1A" />

        {/* Cute Mouth */}
        <path d="M56 58 C58 61 60 61 60 58 C60 61 62 61 64 58" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Pink Cheeks */}
        <ellipse cx="40" cy="56" rx="5" ry="3" fill="#FDA4AF" opacity="0.6" />
        <ellipse cx="80" cy="56" rx="5" ry="3" fill="#FDA4AF" opacity="0.6" />
      </g>
    </svg>
  );
};

/**
 * 8. Iconic Chocobi Snack Box Sticker
 */
export const ChocobiSticker = ({ className = "w-20 h-24" }) => {
  return (
    <svg viewBox="0 0 100 120" className={`sticker-shadow ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        {/* Pentagon Prism Box */}
        <polygon points="50,10 90,30 90,95 50,115 10,95 10,30" fill="#EC4899" stroke="#BE185D" strokeWidth="3" />
        <polygon points="50,10 90,30 50,45 10,30" fill="#F472B6" />
        <line x1="50" y1="45" x2="50" y2="115" stroke="#BE185D" strokeWidth="2.5" />

        {/* Green Crocodile Face */}
        <circle cx="50" cy="72" r="18" fill="#22C55E" stroke="#15803D" strokeWidth="2" />
        {/* Crocodile snout */}
        <ellipse cx="50" cy="78" rx="12" ry="7" fill="#4ADE80" stroke="#15803D" strokeWidth="1.5" />
        <circle cx="45" cy="78" r="1.5" fill="#15803D" />
        <circle cx="55" cy="78" r="1.5" fill="#15803D" />
        {/* Crocodile eyes */}
        <circle cx="43" cy="65" r="4.5" fill="#FFFFFF" stroke="#15803D" strokeWidth="1.5" />
        <circle cx="44" cy="65" r="2" fill="#15803D" />
        <circle cx="57" cy="65" r="4.5" fill="#FFFFFF" stroke="#15803D" strokeWidth="1.5" />
        <circle cx="56" cy="65" r="2" fill="#15803D" />

        {/* Yellow Star Banner */}
        <polygon points="50,22 53,28 60,29 55,34 56,40 50,37 44,40 45,34 40,29 47,28" fill="#FBBF24" />

        {/* Japanese / English Text label */}
        <rect x="25" y="94" width="50" height="12" rx="3" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.5" />
        <text x="50" y="103" fontSize="8" fontFamily="'Shantell Sans', sans-serif" fontWeight="900" fill="#B91C1C" textAnchor="middle">CHOCOBI</text>
      </g>
    </svg>
  );
};
