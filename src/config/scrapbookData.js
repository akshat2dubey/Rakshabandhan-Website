/**
 * Shin-chan Digital Scrapbook - Centralized Configuration
 * 
 * ⚠️ REPLACEMENT MAP NOTICE:
 * To customize names and photographs, simply update the fields below.
 * Layout coordinates, Shin-chan visuals, animations, and borders will remain intact.
 */

export const scrapbookConfig = {
  // 1. Core Names & Roles
  recipientName: "Sister",
  senderName: "Shin-chan & Co.",
  relationshipTitle: "Best Sister in the World",

  // 2. Opening Question Page (0.0s - 5.5s)
  openingPage: {
    question: "Do you know what today is?",
    subQuestion: "Or are you ready for your surprise? 👀",
    yesButtonText: "YES! Of Course ❤️",
    noButtonText: "NO, Not at all 🙄",
    shinchanQuote: "Oho! You better choose wisely~"
  },

  // 3. "HOW DARE YOU?" Reaction Page (5.5s - 9.5s)
  howDareYouPage: {
    title: "HOW DARE YOU?!",
    subtitle: "You clicked NO?! Shin-chan is devastated!",
    retryButtonText: "I'm sorry! Take me back 🥺",
    shinchanAngryQuote: "Action Kamen will NOT save you today!"
  },

  // 4. "Are you really..." Question Page (9.5s - 14.0s)
  areYouReallyPage: {
    question: "Are you REALLY sure you're ready for this?",
    subQuestion: "There is no turning back after this point! 🤭",
    yesButtonText: "YES! Show me already! ✨",
    noButtonText: "Still NO 🏃‍♂️💨",
    dodgingNoHint: "(Try catching the NO button if you can!)"
  },

  // 5. MEMORIES Section (14.0s - 18.0s & 27.5s - 30.0s)
  memoriesPage: {
    title: "MEMORIES",
    subtitle: "The cutest & craziest moments together ✨",
    nextButtonText: "Open Your Gifts 🎁 ➔",
    // Replaceable Photo List:
    photos: [
      {
        id: "photo-1",
        src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop&q=80",
        caption: "Partners in Crime 🕶️",
        date: "Memory #01",
        rotation: "-4deg",
        tapeColor: "yellow"
      },
      {
        id: "photo-2",
        src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80",
        caption: "Forever Laughing 💖",
        date: "Memory #02",
        rotation: "3deg",
        tapeColor: "pink"
      },
      {
        id: "photo-3",
        src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80",
        caption: "Unmatched Chaos 🍕",
        date: "Memory #03",
        rotation: "-2deg",
        tapeColor: "mint"
      },
      {
        id: "photo-4",
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
        caption: "Cutest Human Ever 🌸",
        date: "Memory #04",
        rotation: "4deg",
        tapeColor: "red"
      }
    ]
  },

  // 6. Interactive Gifts Section (18.0s - 25.0s)
  giftsSection: {
    heading: "Each gift has something special...",
    subHeading: "CLICK ON A GIFT BOX 🎁",
    gifts: [
      {
        id: 1,
        giftNumber: "1",
        title: "Official Award",
        color: "pink",
        targetPage: "award"
      },
      {
        id: 2,
        giftNumber: "2",
        title: "You Are My...",
        color: "red",
        targetPage: "youAreMy"
      },
      {
        id: 3,
        giftNumber: "3",
        title: "Heartfelt Letter",
        color: "yellow",
        targetPage: "letter"
      }
    ]
  },

  // 7. "Best Sister Award" Page (20.5s - 23.0s)
  awardPage: {
    badge: "OFFICIAL CERTIFICATE",
    title: "Best Sister Award 🏆",
    presentedTo: "Presented with love & maximum respect to:",
    awardDescription: "For being the world's most supportive, funny, patient (mostly), and irreplaceable sister. Even when you steal food or roast people, you are truly the #1 VIP in this household!",
    certifiedBy: "Certified by: Shin-chan & Action Kamen",
    sealText: "OFFICIAL 100% GOLD",
    backButtonText: "Back to Gifts 🎁"
  },

  // 8. "YOU ARE MY..." Section (30.0s - 33.0s)
  youAreMyPage: {
    title: "YOU ARE MY...",
    subtitle: "Everything rolled into one wonderful human!",
    backButtonText: "Back to Gifts 🎁",
    labels: [
      {
        id: "label-1",
        text: "google maps 🗺️",
        subtext: "(knows where everything is)",
        pos: { top: "6%", left: "4%" },
        rotation: "-6deg",
        color: "#B91C1C",
        bg: "#FEE2E2",
        arrow: { start: { x: 90, y: 30 }, end: { x: 120, y: 80 }, curve: -15 }
      },
      {
        id: "label-2",
        text: "my lifeline ❤️",
        subtext: "(always there for me)",
        pos: { top: "6%", right: "4%" },
        rotation: "5deg",
        color: "#BE123C",
        bg: "#FFE4E6",
        arrow: { start: { x: 10, y: 30 }, end: { x: -20, y: 80 }, curve: 15 }
      },
      {
        id: "label-3",
        text: "food/clothes stealer 🍟👗",
        subtext: "(never asks, just takes)",
        pos: { top: "33%", left: "2%" },
        rotation: "3deg",
        color: "#C2410C",
        bg: "#FFEDD5",
        arrow: { start: { x: 110, y: 15 }, end: { x: 140, y: 40 }, curve: 10 }
      },
      {
        id: "label-4",
        text: "bank account 💳💸",
        subtext: "(free snacks sponsor)",
        pos: { top: "33%", right: "2%" },
        rotation: "-4deg",
        color: "#047857",
        bg: "#D1FAE5",
        arrow: { start: { x: 0, y: 15 }, end: { x: -30, y: 40 }, curve: -10 }
      },
      {
        id: "label-5",
        text: "crybaby 🥺",
        subtext: "(cries at sad reels)",
        pos: { bottom: "22%", left: "4%" },
        rotation: "-5deg",
        color: "#1D4ED8",
        bg: "#DBEAFE",
        arrow: { start: { x: 80, y: 0 }, end: { x: 110, y: -40 }, curve: -15 }
      },
      {
        id: "label-6",
        text: "entertainment 🍿",
        subtext: "(24/7 free comedy show)",
        pos: { bottom: "22%", right: "4%" },
        rotation: "6deg",
        color: "#7E22CE",
        bg: "#F3E8FF",
        arrow: { start: { x: 15, y: 0 }, end: { x: -20, y: -40 }, curve: 15 }
      },
      {
        id: "label-7",
        text: "bestie forever 👯‍♀️",
        subtext: "(stuck with me for life)",
        pos: { bottom: "4%", left: "50%", transform: "translateX(-50%)" },
        rotation: "0deg",
        color: "#9D174D",
        bg: "#FCE7F3",
        arrow: { start: { x: 50, y: 0 }, end: { x: 50, y: -30 }, curve: 0 }
      }
    ]
  },

  // 9. Heartfelt Letter / Diary Message (33.0s - 36.0s)
  letterPage: {
    title: "A Little Note For You 💌",
    dateStamp: "FOREVER & ALWAYS",
    paragraphs: [
      "Dear Sister,",
      "Thank you for being the most incredible person in my life. Life would be so terribly boring without our inside jokes, random dance sessions, and endless arguments over who gets the last slice of pizza.",
      "No matter how old we get or where life takes us, remember you will always have someone cheering for you (and occasionally annoying you) every single day.",
      "Keep shining, keep smiling, and don't forget to share your snacks! 🌸✨"
    ],
    signoff: "With all my love & hugs,",
    senderSign: "Your Favorite Person ❤️",
    backButtonText: "Back to Gifts 🎁"
  },

  // 10. Final Question & Reveal (36.0s - 39.98s)
  finalRevealPage: {
    question: "Do you wanna see it?",
    subtext: "Your final mega surprise awaits! 🌟",
    yesButtonText: "YES! Reveal it! 🎉",
    noButtonText: "NO 😜",
    celebrationTitle: "YOU ARE THE ABSOLUTE BEST! 🥳💖",
    celebrationMessage: "May your days be filled with happiness, chocobi, laughter, and endless blessings! Sending you the biggest hug!",
    restartButtonText: "Replay Scrapbook 🔄"
  }
};
