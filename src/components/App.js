import React from 'react';
import Header from './Header/Header';
import Background from './Header/Background';

export const globalContext = React.createContext(null);
const globalContextValue = {
  menuOpen: false
}

function App() {
  return (
    <div className="App">
      <globalContext.Provider value={globalContextValue}>
        <Background />
        <Header />
      </globalContext.Provider>
    </div>
  );
}

export default App;
