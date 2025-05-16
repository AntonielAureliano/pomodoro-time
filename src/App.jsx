import { Time } from "./components/Time";
import { Settings } from "./components/Settings";
import { useState } from "react";
import { SettingsContext } from "./components/SettingsContext";

import './App.css'

function App() {

  const [showSettings, setShowSettings] = useState(true);
  return (
    <main>
      <SettingsContext.Provider value={{}}>
        { showSettings ? <Settings /> : <Time /> }
      </SettingsContext.Provider>
      
    </main>
  )
}

export default App
