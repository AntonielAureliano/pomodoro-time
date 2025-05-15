import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const red = '#f54e4e';
//const green = '#4aec8c';

export const Time = () => {

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
            <div>

            </div>

        </div>
    )
}