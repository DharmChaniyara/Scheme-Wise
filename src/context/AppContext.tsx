import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BusinessProfile } from '../types';

interface AppContextType {
  profile: BusinessProfile | null;
  setProfile: (profile: BusinessProfile) => void;
  savedSchemeIds: string[];
  saveScheme: (id: string) => void;
  unsaveScheme: (id: string) => void;
  checklists: Record<string, string[]>; // schemeId -> array of completed step names
  toggleChecklistStep: (schemeId: string, step: string) => void;
  clearData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [profile, setProfileState] = useState<BusinessProfile | null>(() => {
    const saved = localStorage.getItem('sw_profile');
    return saved ? JSON.parse(saved) : null;
  });

  const [savedSchemeIds, setSavedSchemeIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('sw_saved');
    return saved ? JSON.parse(saved) : [];
  });

  const [checklists, setChecklists] = useState<Record<string, string[]>>(() => {
    const saved = localStorage.getItem('sw_checklists');
    return saved ? JSON.parse(saved) : {};
  });

  // Sync to local storage
  useEffect(() => {
    if (profile) localStorage.setItem('sw_profile', JSON.stringify(profile));
    else localStorage.removeItem('sw_profile');
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('sw_saved', JSON.stringify(savedSchemeIds));
  }, [savedSchemeIds]);

  useEffect(() => {
    localStorage.setItem('sw_checklists', JSON.stringify(checklists));
  }, [checklists]);

  const setProfile = (newProfile: BusinessProfile) => {
    setProfileState(newProfile);
  };

  const saveScheme = (id: string) => {
    if (!savedSchemeIds.includes(id)) {
      setSavedSchemeIds([...savedSchemeIds, id]);
    }
  };

  const unsaveScheme = (id: string) => {
    setSavedSchemeIds(savedSchemeIds.filter(savedId => savedId !== id));
  };

  const toggleChecklistStep = (schemeId: string, step: string) => {
    setChecklists(prev => {
      const schemeChecklist = prev[schemeId] || [];
      if (schemeChecklist.includes(step)) {
        return { ...prev, [schemeId]: schemeChecklist.filter(s => s !== step) };
      } else {
        return { ...prev, [schemeId]: [...schemeChecklist, step] };
      }
    });
  };

  const clearData = () => {
    setProfileState(null);
    setSavedSchemeIds([]);
    setChecklists({});
    localStorage.removeItem('sw_profile');
    localStorage.removeItem('sw_saved');
    localStorage.removeItem('sw_checklists');
  };

  return (
    <AppContext.Provider value={{
      profile, setProfile,
      savedSchemeIds, saveScheme, unsaveScheme,
      checklists, toggleChecklistStep,
      clearData
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
