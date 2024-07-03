import React, { useState } from 'react'; 
import './counterLakers.style.css'

export const CounterLakers = () => {
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
        <div className="lakers">
            <div className="counterLakers">
                {counter}
            </div>
            <div className="buttonsLakers">
                <button className="button4" onClick={onePoint}>1pt</button>
                <button className="button5" onClick={twoPoints}>2pt</button>
                <button className="button6" onClick={threePoints}>3pt</button>
            </div>
        </div>
        </>
    );
};
