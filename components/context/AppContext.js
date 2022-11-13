import { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = props => {
  const [completed, setCompleted] = useState([]);

  return (
    <AppContext.Provider value={[completed, setCompleted]}>
      {props.children}
    </AppContext.Provider>
  );
};
