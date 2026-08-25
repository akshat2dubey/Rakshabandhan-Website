import { referenceAssets } from './referenceAssets';

/**
 * USER CUSTOMIZABLE CONFIGURATION & REPLACEMENT MAP
 */

export const scrapbookConfig = {
  // 1. Customizable Names
  recipientName: "Sister",
  senderName: "Shin-chan",
  relationshipTitle: "Best Sister",

  // 2. Opening Page (0.0s - 5.5s)
  openingPage: {
    question: "Do you know what today is?",
    yesButtonText: "YES ❤️",
    noButtonText: "NO 🙄"
  },

  // 3. "HOW DARE YOU?" Page (5.5s - 9.5s)
  howDareYouPage: {
    title: "HOW DARE YOU?",
    retryButtonText: "Take it back 🥺"
  },

  // 4. "Are you really..." Page (9.5s - 14.0s)
  areYouReallyPage: {
    question: "Are you really ...",
    yesButtonText: "YES ✨",
    noButtonText: "NO 🏃‍♂️"
  },

  // 5. MEMORIES Section (14.0s - 18.0s & 27.5s - 30.0s)
  memoriesPage: {
    title: "MEMORIES",
    photos: [
      {
        id: "memory-01",
        src: "/assets/photos/user-memory-01-childhood.png",
        caption: "Where it all started ✨",
        rotation: "-4deg",
        tapeColor: "yellow"
      },
      {
        id: "memory-02",
        src: "/assets/photos/user-memory-02-traditional.png",
        caption: "Partners in Crime 🕶️",
        rotation: "4deg",
        tapeColor: "pink"
      },
      {
        id: "memory-03",
        src: "/assets/photos/user-memory-03-terrace.png",
        caption: "Forever Smiling 💖",
        rotation: "-3deg",
        tapeColor: "mint"
      },
      {
        id: "memory-04",
        src: "/assets/photos/user-memory-04-chilling.png",
        caption: "Unmatched Chaos 🍕",
        rotation: "5deg",
        tapeColor: "red"
      },
      {
        id: "memory-05",
        src: "/assets/photos/user-memory-05-cute.png",
        caption: "Cutest Sister Ever 🌸",
        rotation: "-4deg",
        tapeColor: "yellow"
      }
    ],
    nextButtonText: "Next ➔"
  },

  // 6. Gifts Section (18.0s - 25.0s)
  giftsSection: {
    heading: "Each gift has something...",
    instruction: "CLICK ON A GIFT",
    gifts: [
      {
        id: "gift-1",
        giftNumber: "1",
        title: "Gift 1",
        color: "pink",
        targetPage: "award"
      },
      {
        id: "gift-2",
        giftNumber: "2",
        title: "Gift 2",
        color: "red",
        targetPage: "youAreMy"
      },
      {
        id: "gift-3",
        giftNumber: "3",
        title: "Gift 3",
        color: "yellow",
        targetPage: "letter"
      }
    ]
  },

  // 7. "Best Sister Award" Page (20.5s - 23.0s)
  awardPage: {
    title: "Best Sister Award",
    subtitle: "Presented to:",
    awardText: "For being the most incredible, funny, and irreplaceable sister in the entire world!",
    certifiedText: "Certified 100% Official",
    backButtonText: "Back to Gifts 🎁"
  },

  // 8. "YOU ARE MY..." Section (30.0s - 33.0s)
  youAreMyPage: {
    title: "YOU ARE MY...",
    backButtonText: "Back to Gifts 🎁",
    phrases: [
      {
        id: "phrase-1",
        text: "google maps",
        top: "8%",
        left: "6%",
        rotation: "-8deg"
      },
      {
        id: "phrase-2",
        text: "my lifeline",
        top: "8%",
        right: "6%",
        rotation: "6deg"
      },
      {
        id: "phrase-3",
        text: "cloth stealer",
        top: "34%",
        left: "3%",
        rotation: "4deg"
      },
      {
        id: "phrase-4",
        text: "bank account",
        top: "34%",
        right: "3%",
        rotation: "-5deg"
      },
      {
        id: "phrase-5",
        text: "crybaby",
        bottom: "22%",
        left: "8%",
        rotation: "-6deg"
      },
      {
        id: "phrase-6",
        text: "entertainment",
        bottom: "22%",
        right: "6%",
        rotation: "7deg"
      },
      {
        id: "phrase-7",
        text: "bestie",
        bottom: "6%",
        left: "50%",
        transform: "translateX(-50%)",
        rotation: "0deg"
      }
    ]
  },

  // 9. Heartfelt Letter (33.0s - 36.0s)
  letterPage: {
    title: "A Little Note...",
    paragraphs: [
      "Dear Sister,",
      "Thank you for always being there, making every single day brighter with your smiles and chaotic energy.",
      "No matter how much time passes, you will always be my absolute favorite person in the world.",
      "With all my love & hugs,"
    ],
    signature: "Forever Yours ❤️",
    backButtonText: "Back to Gifts 🎁"
  },

  // 10. Final Question (36.0s - 39.98s)
  finalQuestionPage: {
    question: "Do you wanna see it?",
    yesButtonText: "YES",
    noButtonText: "NO",
    celebrationText: "Happy Rakshabandhan / Sister Day! 💖✨"
  }
};
