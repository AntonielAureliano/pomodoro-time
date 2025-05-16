import ReactSlider from "react-slider";

import styles from "./Settings.module.css";

export const Settings = () => {

    return (
        <div className={styles.settingsContent}>
            <label>Work:</label>
            <ReactSlider
                className={`${styles.slider} ${styles.sliderWork}`}    
                thumbClassName={styles.thumb}
                value={45}
                min={1}
                max={120}
            />
            
            <label>Break:</label>
            <ReactSlider
                className={`${styles.slider} ${styles.sliderBreak}`}    
                thumbClassName={styles.thumb}
                value={15}
                min={1}
                max={120}
            />
        </div>
    )
}