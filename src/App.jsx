import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Hound from './components/Hound';
import InfoHound from './components/InfoHound';

function App() {
  const WELCOME = 'welcome', HOUND = 'hound', INFOHOUND = 'infohound';
  const [currentScreen, setCurrentScreen] = useState(WELCOME);
  const [selectedHound, setSelectedHound] = useState(null);

  let content = null;



  switch (currentScreen) {
    case WELCOME:
      content = <Welcome nextScreen={() => setCurrentScreen(HOUND)} />;
      break;
    case HOUND:
      content = <Hound nextScreen={() => setCurrentScreen(INFOHOUND)} selectedHound={selectedHound} setSelectedHound={setSelectedHound} />;
      break;
    case INFOHOUND:
      content = <InfoHound nextScreen={() => setCurrentScreen(HOUND)} selectedHound={selectedHound} goBack={() => setCurrentScreen(HOUND)} />;
      break;
    default:
      content = <Welcome />;
  }

  return (
    

    
    <div class='container'>
      {content}
    </div>
    
  );
}

export default App;

