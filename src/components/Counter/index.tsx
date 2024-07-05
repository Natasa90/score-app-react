import React, { useState } from 'react'; 
import './counter.style.css'

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const onePoint = () => {
        setCounter(counter + 1); 
    };
    const twoPoints = () => {
        setCounter(counter + 2);
    };
    const threePoints = () => {
        setCounter(counter + 3);
    };  

    const [counter2, setCounter2] = useState(0);
        const onePoint2 = () => {
            setCounter2(counter2 + 1); 
        };
        const twoPoints2 = () => {
            setCounter2(counter2 + 2);
        };
        const threePoints2 = () => {
            setCounter2(counter2 + 3);
        };  

    return ( 
        <div className="counterContainer">
        <div className="denver">
            <div className="counterDenver">
                {counter}
            </div>
            <div className="buttonsDenver">
                <button className="button1" onClick={onePoint}>1pt</button>
                <button className="button2" onClick={twoPoints}>2pt</button>
                <button className="button3" onClick={threePoints}>3pt</button>
            </div>
        </div>
        <div className="lakers">
            <div className="counterLakers">
                {counter2}
            </div>
            <div className="buttonsLakers">
                <button className="button4" onClick={onePoint2}>1pt</button>
                <button className="button5" onClick={twoPoints2}>2pt</button>
                <button className="button6" onClick={threePoints2}>3pt</button>
            </div>
        </div>
        </div>
    )
};
