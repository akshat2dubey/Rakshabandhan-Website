# 🖍️ Shin-chan Rakshabandhan / Sister Memory Scrapbook

A digital scrapbook & memory web application themed around **Crayon Shin-chan**. Built to feel like a physical, handmade memory book with realistic paper textures, red-and-white gingham borders, authentic Shin-chan illustrations, interactive gift unboxings, Polaroid photo memories, and Web Audio sound effects.

---

## ✨ Features

- 📖 **9-Stage Interactive Timeline**:
  1. **Opening Question Card**: Waving Shin-chan with YES / NO choices.
  2. **"HOW DARE YOU?!" Page**: Dramatic tantrum with animated rage veins (💢) and a retry button.
  3. **"Are You Really..." Page**: Thinking Shin-chan and a dodging, runaway "NO" button.
  4. **Memories Collage**: Tilted Polaroid photos with washi tape, stamps, and full-screen inspection modal.
  5. **Interactive Gift Unboxing**: 3D bouncing gift boxes with ribbons.
  6. **"Best Sister Award"**: Golden certificate with formal bowtie Shin-chan and wax medal seal.
  7. **"YOU ARE MY..." Section**: Center Shin-chan surrounded by hand-drawn curved arrows and humorous relationship badges (*google maps, lifeline, clothes stealer, bank account, crybaby, entertainment, bestie*).
  8. **Heartfelt Letter**: Lined notebook diary page with personal message and stamps.
  9. **The Grand Finale**: Sparkle-eyed Shin-chan, multi-stage confetti fireworks, and celebration card.
- 🎨 **Scrapbook Aesthetic**: Red-and-white gingham borders, washi tape, paper texture, and handwritten fonts.
- 🔊 **Zero-Dependency Web Audio Synth**: Bubble pops, page turns, boing springs, and celebratory fanfare with on-screen mute control.
- 📱 **Mobile-First & Fully Responsive**: Centered mobile viewport frame on desktop and full-screen 100dvh on mobile.

---

## 🛠️ Tech Stack

- **React 18**
- **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **Canvas-Confetti**
- **Lucide Icons**
- **Web Audio API**

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/akshat2dubey/Rakshabandhan-Website.git

# Navigate to project directory
cd Rakshabandhan-Website

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📝 Customization / Replacement Map

All names, titles, letters, and memory photos are centralized in:
📂 `src/config/scrapbookData.js`

To customize:
1. **Names**: Edit `recipientName`, `senderName`, `relationshipTitle`.
2. **Photos**: Replace image URLs and captions in `memoriesPage.photos`.
3. Layout, borders, animations, and Shin-chan artwork will remain untouched.

---

Made with ❤️ & 🖍️ Chocobi
