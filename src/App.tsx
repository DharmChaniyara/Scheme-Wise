import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Layout } from './components/layout/Layout';
import { LandingPage } from './pages/LandingPage';
import { Explore } from './pages/Explore';
import { Questionnaire } from './pages/Questionnaire';
import { Recommendations } from './pages/Recommendations';
import { SchemeDetails } from './pages/SchemeDetails';
import { Dashboard } from './pages/Dashboard';
import { SavedSchemes } from './pages/SavedSchemes';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/find" element={<Questionnaire />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/scheme/:id" element={<SchemeDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/saved" element={<SavedSchemes />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
