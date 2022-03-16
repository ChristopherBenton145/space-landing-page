import React from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import Background from './Background';

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
        <Content />
        <Footer />
      </globalContext.Provider>
    </div>
  );
}

export default App;
