import React, { useState, createContext } from 'react';
import { uuid } from 'uuidv4';

const appContextDefaultValue = {
  appState: [{}],
  addEntry: (entry: any) => {},
  removeEntry: (id: string) => {},
};

export const AppContext = createContext(appContextDefaultValue);

export const AppContextProvider = ({ children }: { children: any }) => {
  const [entries, setEntries] = useState<any[]>([]);

  const addEntry = (entry: any) => {
    setEntries([...entries, { ...entry, id: uuid() }]);
  };

  const removeEntry = (id: any) => {
    const updatedEntries = entries.filter((entry) => id !== entry.id);
    setEntries(updatedEntries);
  };

  return (
    <AppContext.Provider value={{ appState: entries, addEntry, removeEntry }}>
      {children}
    </AppContext.Provider>
  );
};
