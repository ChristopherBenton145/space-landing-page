import React from 'react';
import Header from './Header/Header';

export const globalContext = React.createContext(null);
const globalContextValue = {
  menuOpen: false
}

function App() {
  return (
    <div className="App">
      <globalContext.Provider value={globalContextValue}>
        <Header />
      </globalContext.Provider>
    </div>
  );
}

export default App;
