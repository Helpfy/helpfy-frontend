import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RulesPage from './pages/RulesPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<RulesPage />}/>        
      </Routes>
    </BrowserRouter>  
  );
}
