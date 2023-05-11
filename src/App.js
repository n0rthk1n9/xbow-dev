import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Privacy } from './pages/Privacy/Privacy';
import { ChameleonCalculator } from './pages/ChameleonCalculator/ChameleonCalculator';
import { Streaks } from './pages/Streaks/Streaks';
import { GameSheet } from './pages/GameSheet/GameSheet';
import { GameSheetPrivacy } from './pages/GameSheet/GameSheetPrivacy';

function App() {
  return (
    <Routes>
      <Route path="chameleon-calculator" element={<ChameleonCalculator />} />
      <Route path="streaks" element={<Streaks />} />
      <Route path="game-sheet/privacy" element={<GameSheetPrivacy />} />
      <Route path="game-sheet" element={<GameSheet />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
