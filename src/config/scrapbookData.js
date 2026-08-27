/**
 * USER CUSTOMIZABLE CONFIGURATION & REPLACEMENT MAP
 */

export const scrapbookConfig = {
  // 1. Customizable Names
  recipientName: "Khushi didi",
  senderName: "Bhai Om",
  relationshipTitle: "Best Sister",

  // 2. Opening Page & Personal Intro Sequence
  openingPage: {
    introGreeting: "Hey Khushi didi… 👀",
    introSubtitle: "I made something for you.",
    introPrompt: "But first, answer one very important question…",
    senderBadge: "From Bhai Om ❤️",
    skipText: "Skip ➔",
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
        src: "/assets/photos/crop-01.png",
        caption: "Where it all started ✨",
        rotation: "-3deg",
        tapeColor: "yellow"
      },
      {
        id: "memory-02",
        src: "/assets/photos/crop-02.png",
        caption: "Partners in Crime 🕶️",
        rotation: "3deg",
        tapeColor: "pink"
      },
      {
        id: "memory-03",
        src: "/assets/photos/crop-03.png",
        caption: "Forever Smiling 💖",
        rotation: "-2deg",
        tapeColor: "mint"
      },
      {
        id: "memory-04",
        src: "/assets/photos/crop-04.png",
        caption: "Unmatched Chaos 🍕",
        rotation: "2deg",
        tapeColor: "red"
      },
      {
        id: "memory-05",
        src: "/assets/photos/crop-05.png",
        caption: "Cutest Sister Ever 🌸",
        rotation: "-2deg",
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
      "Dear Didi ❤️,",
      "Badi Didi basically life ki **pehli friend, pehli teacher, part-time parent aur full-time headache** hoti hai. 😂 Bachpan se lekar ab tak chhoti-chhoti baaton pe ladna, ek dusre ko irritate karna, aur phir secretly ek dusre ka support karna — ye sab toh package mein free mila tha. 😂",
      "Apne mujhe annoy bhi kiya hai, daanta bhi hai, protect bhi kiya hai, aur somehow itna sab karne ke baad bhi meri favourite people mein se ek ho. 🫶😂",
      "No matter how much we fight or irritate each other, you’ll always be one of the most special people in my life. ❤️ After all, **first friend toh first friend hota hai**, replacement thodi mil sakta hai. 😌",
      "Thank you for always being there, meri first friend, meri forever partner-in-crime, aur woh person jo mujhe trouble mein padne se pehle hi bata deti hai ki “haan, tu kuch gadbad karne wala hai.” 😂❤️",
      "And now that we’ve had our emotional Raksha Bandhan moment…",
      "**Gift toh de diya hai, ab please ₹500 wapas kar do.** 😭😂\nBhai-behen ka pyaar apni jagah, lekin **financial settlement bhi zaroori hai.** 💀"
    ],
    closing: "Yours lovingly (and financially concerned),",
    signature: "Om ❤️",
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
