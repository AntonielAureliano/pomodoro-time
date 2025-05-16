import ReactSlider from "react-slider";
import { SettingsContext } from "../SettingsContext";
import { useContext } from "react";
import { BackButton } from "../BackButton";

import styles from "./Settings.module.css";

export const Settings = () => {
    const settingsInfo = useContext(SettingsContext);

    return (
        <div className={styles.settingsContent}>
            <label>Work: {settingsInfo.workMinutes}:00</label>
            <ReactSlider
                className={`${styles.slider} ${styles.sliderWork}`}    
                thumbClassName={styles.thumb}
                value={settingsInfo.workMinutes}
                onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
                min={1}
                max={120}
            />
            
            <label>Break: {settingsInfo.breakMinutes}:00</label>
            <ReactSlider
                className={`${styles.slider} ${styles.sliderBreak}`}    
                thumbClassName={styles.thumb}
                value={settingsInfo.breakMinutes}
                onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
                min={1}
                max={120}
            />
            <div className={styles.settingsBackButton}>
                <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
            </div>
        </div>
    )
}