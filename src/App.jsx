import { Time } from "./components/Time";
import { Settings } from "./components/Settings";
import { useState } from "react";
import { SettingsContext } from "./components/SettingsContext";

import './App.css'

function App() {

  const [showSettings, setShowSettings] = useState(true);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  
  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        workMinutes,
        breakMinutes,
        setShowSettings,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        { showSettings ? <Settings /> : <Time /> }
      </SettingsContext.Provider>
      
    </main>
  )
}

export default App
