"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CreditContextType {
  credit: number;
  addCredit: (amount: number) => void;
  deductCredit: (amount: number) => void;
}

const CreditContext = createContext<CreditContextType | undefined>(undefined);

export function CreditProvider({ children }: { children: React.ReactNode }) {
  const [credit, setCredit] = useState<number>(0);

  // LocalStorage'dan krediyi yükle
  useEffect(() => {
    const savedCredit = localStorage.getItem('userCredit');
    if (savedCredit) {
      setCredit(Number(savedCredit));
    }
  }, []);

  // Kredi değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('userCredit', credit.toString());
  }, [credit]);

  const addCredit = (amount: number) => {
    setCredit(prev => prev + amount);
  };

  const deductCredit = (amount: number) => {
    if (credit < amount) {
      throw new Error('Yetersiz kredi!');
    }
    setCredit(prev => prev - amount);
  };

  return (
    <CreditContext.Provider value={{ credit, addCredit, deductCredit }}>
      {children}
    </CreditContext.Provider>
  );
}

export function useCredit() {
  const context = useContext(CreditContext);
  if (context === undefined) {
    throw new Error('useCredit must be used within a CreditProvider');
  }
  return context;
} 