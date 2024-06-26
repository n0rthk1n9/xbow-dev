import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Privacy } from './pages/Privacy/Privacy';
import { ChameleonCalculator } from './pages/ChameleonCalculator/ChameleonCalculator';
import { Streaks } from './pages/Streaks/Streaks';
import { GameSheet } from './pages/GameSheet/GameSheet';
import { GameSheetPrivacy } from './pages/GameSheet/GameSheetPrivacy';
import { CosmoPic } from './pages/CosmoPic/CosmoPic';
import { CosmoPicPrivacy } from './pages/CosmoPic/CosmoPicPrivacy';
import { AppExhibit } from './pages/AppExhibit/AppExhibit';
import { AppExhibitPrivacy } from './pages/AppExhibit/AppExhibitPrivacy';

function App() {
  return (
    <Routes>
      <Route path="chameleon-calculator" element={<ChameleonCalculator />} />
      <Route path="streaks" element={<Streaks />} />
      <Route path="game-sheet/privacy" element={<GameSheetPrivacy />} />
      <Route path="game-sheet" element={<GameSheet />} />
      <Route path="cosmo-pic/privacy" element={<CosmoPicPrivacy />} />
      <Route path="cosmo-pic" element={<CosmoPic />} />
      <Route path="app-exhibit/privacy" element={<AppExhibitPrivacy />} />
      <Route path="app-exhibit" element={<AppExhibit />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
