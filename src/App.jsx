import React, { useState, useEffect } from 'react';
import { ScrapbookContainer } from './components/ScrapbookContainer';
import { OpeningQuestionPage } from './components/pages/OpeningQuestionPage';
import { HowDareYouPage } from './components/pages/HowDareYouPage';
import { AreYouReallyPage } from './components/pages/AreYouReallyPage';
import { MemoriesPage } from './components/pages/MemoriesPage';
import { GiftSectionPage } from './components/pages/GiftSectionPage';
import { BestSisterAwardPage } from './components/pages/BestSisterAwardPage';
import { YouAreMyPage } from './components/pages/YouAreMyPage';
import { HeartfeltLetterPage } from './components/pages/HeartfeltLetterPage';
import { FinalRevealPage } from './components/pages/FinalRevealPage';
import { sounds } from './utils/audio';

const PAGE_KEYS = {
  OPENING: 'OPENING',
  HOW_DARE_YOU: 'HOW_DARE_YOU',
  ARE_YOU_REALLY: 'ARE_YOU_REALLY',
  MEMORIES: 'MEMORIES',
  GIFTS: 'GIFTS',
  AWARD: 'AWARD',
  YOU_ARE_MY: 'YOU_ARE_MY',
  LETTER: 'LETTER',
  FINAL_REVEAL: 'FINAL_REVEAL'
};

export function App() {
  const [currentPage, setCurrentPage] = useState(PAGE_KEYS.OPENING);
  const [openedGifts, setOpenedGifts] = useState([]);
  const [skipIntro, setSkipIntro] = useState(false);

  // Auto initialize Web Audio on first user gesture
  useEffect(() => {
    const handleFirstInteraction = () => {
      sounds.initContext();
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  const handleSelectGift = (targetPageKey, giftId) => {
    if (!openedGifts.includes(giftId)) {
      setOpenedGifts(prev => [...prev, giftId]);
    }

    if (targetPageKey === 'award') setCurrentPage(PAGE_KEYS.AWARD);
    else if (targetPageKey === 'youAreMy') setCurrentPage(PAGE_KEYS.YOU_ARE_MY);
    else if (targetPageKey === 'letter') setCurrentPage(PAGE_KEYS.LETTER);
  };

  const handleRestart = () => {
    setOpenedGifts([]);
    setSkipIntro(false);
    setCurrentPage(PAGE_KEYS.OPENING);
  };

  return (
    <ScrapbookContainer pageKey={currentPage}>
      {currentPage === PAGE_KEYS.OPENING && (
        <OpeningQuestionPage
          skipIntro={skipIntro}
          onYes={() => {
            setSkipIntro(false);
            setCurrentPage(PAGE_KEYS.ARE_YOU_REALLY);
          }}
          onNo={() => setCurrentPage(PAGE_KEYS.HOW_DARE_YOU)}
        />
      )}

      {currentPage === PAGE_KEYS.HOW_DARE_YOU && (
        <HowDareYouPage
          onRetry={() => {
            setSkipIntro(true);
            setCurrentPage(PAGE_KEYS.OPENING);
          }}
        />
      )}

      {currentPage === PAGE_KEYS.ARE_YOU_REALLY && (
        <AreYouReallyPage
          onYes={() => setCurrentPage(PAGE_KEYS.MEMORIES)}
        />
      )}

      {currentPage === PAGE_KEYS.MEMORIES && (
        <MemoriesPage
          onNext={() => setCurrentPage(PAGE_KEYS.GIFTS)}
        />
      )}

      {currentPage === PAGE_KEYS.GIFTS && (
        <GiftSectionPage
          openedGifts={openedGifts}
          onSelectGift={handleSelectGift}
          onBack={() => setCurrentPage(PAGE_KEYS.MEMORIES)}
          onProceedToFinal={() => setCurrentPage(PAGE_KEYS.FINAL_REVEAL)}
        />
      )}

      {currentPage === PAGE_KEYS.AWARD && (
        <BestSisterAwardPage
          onBack={() => setCurrentPage(PAGE_KEYS.GIFTS)}
        />
      )}

      {currentPage === PAGE_KEYS.YOU_ARE_MY && (
        <YouAreMyPage
          onBack={() => setCurrentPage(PAGE_KEYS.GIFTS)}
        />
      )}

      {currentPage === PAGE_KEYS.LETTER && (
        <HeartfeltLetterPage
          onBack={() => setCurrentPage(PAGE_KEYS.GIFTS)}
        />
      )}

      {currentPage === PAGE_KEYS.FINAL_REVEAL && (
        <FinalRevealPage
          onRestart={handleRestart}
        />
      )}
    </ScrapbookContainer>
  );
}

export default App;
