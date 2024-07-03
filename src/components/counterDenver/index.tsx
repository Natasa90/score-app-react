import React, { useState } from 'react'; 
import './counterDenver.style.css'

export const CounterDenver = () => {
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

    return ( 
        <>
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
        </>
    );
}