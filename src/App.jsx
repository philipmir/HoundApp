import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'; 
import Welcome from './components/Welcome';
import Hound from './components/Hound';
import InfoHound from './components/InfoHound';






function App() {
  const WELCOME = 'welcome', HOUND = 'hound', INFOHOUND = 'infohound';
  const [currentScreen, setCurrentScreen] = useState(WELCOME);
  // const [houndData, setHoundData] = useState(HOUND);
  


  let content = null;




  switch (currentScreen) {
    case WELCOME:
      content = <Welcome nextScreen={() => setCurrentScreen(HOUND)} />;
      break;
    case HOUND:
      content = <Hound nextScreen={() => setCurrentScreen(INFOHOUND)} />;
      break;
    case INFOHOUND:
      content = <InfoHound nextScreen={() => setCurrentScreen(HOUND)} />;
      break;
    default:
      content = <Welcome />;
  }


  return (
    <div>
      {content}
    </div>
  );
}

export default App;
