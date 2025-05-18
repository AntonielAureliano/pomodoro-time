import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { PlayButton } from "../PlayButton";
import { PauseButton } from "../PauseButton";
import { SettingsButton } from "../SettingsButton";
import { SettingsContext } from "../SettingsContext";
import { useContext, useState, useEffect, useRef } from "react";

import 'react-circular-progressbar/dist/styles.css';
import styles from './Time.module.css';

const red = '#f54e4e';
//const green = '#4aec8c';

export const Time = () => {
    const settingsInfo = useContext(SettingsContext);
    
    const [isPaused, setPaused] = useState(true);
    const [secondsLeft, setSecondsLeft] = useState(0);
    const [mode, setMode] = useState('work');

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);
 
    const initTimer = () => {
        const initialSeconds = settingsInfo.workMinutes * 60;
        setMode('work');
        modeRef.current = 'work';

        setSecondsLeft(initialSeconds);
        secondsLeftRef.current = initialSeconds;
    }

    const tick = () => {
        secondsLeft.current--;
        setSecondsLeft(secondsLeftRef.current);
    }

    
    useEffect(() => {
        initTimer();
        
        const switchMode = () => {
            const nextMode = modeRef.current === 'work' ? 'break' : 'work';
            const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;
            setMode(nextMode);
            modeRef.current = nextMode;

            secondsLeftRef(nextSeconds);
            secondsLeftRef.current = nextSeconds;
        }

        const interval = setInterval(() => {
            if(isPausedRef.current) {
                return;
            }
            if(secondsLeftRef.current === 0) {
               return switchMode();
            }
            tick();
        }, 1000);
        return () => clearInterval(interval);
    }, [settingsInfo]);

    const totalSeconds = mode === 'work'
        ? settingsInfo.workMinutes * 60
        : settingsInfo.breakMinutes * 60;

    const percentage = Math.round(secondsLeft / totalSeconds * 100);

    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if(seconds < 10) seconds = '0' + seconds;

    return (
        <div>
            <CircularProgressbar 
                value={66} 
                text={'66%'} 
                styles={buildStyles({
                    pathColor: red,
                    textColor: '#fff',
                    trailColor: 'rgba(255, 255, 255, 0.2)',
                })} 
            />
            <div className={styles.timeButton}>
                {isPaused ? <PlayButton onClick={() => setPaused(false)} /> : <PauseButton onClick={() => setPaused(true)} />}
            </div>
            <div className={styles.timeSettings}>
                <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
            </div>

        </div>
    )
}