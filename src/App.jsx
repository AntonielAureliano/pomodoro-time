import { Time } from "./components/Time";
import { Settings } from "./components/Settings";
import { useState } from "react";

import './App.css'

function App() {

  const [showSettings, setShowSettings] = useState(true);
  return (
    <main>
     { showSettings ? <Settings /> : <Time /> }
      
      
    </main>
  )
}

export default App
