import { useState, createContext } from 'react';

export const LoadContext = createContext();

export const LoadProvider = props => {
  const [remainActions, setRemainActions] = useState([]);

  return (
    <LoadContext.Provider value={[remainActions, setRemainActions]}>
      {props.children}
    </LoadContext.Provider>
  );
};

// const providerValue = useMemo(
//   () => ({ completed, setCompleted }),
//   [completed, setCompleted]
// );
