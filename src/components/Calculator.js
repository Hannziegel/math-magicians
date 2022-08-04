import React, { useState } from 'react';
import '../styles/Calculator.css';
import Calculate from '../logic/Calculate';

const Calculator = () => {
  const [state, setState] = useState({ next: 0, total: 0 });

  const handleClick = (event) => {
    setState((state) => Calculate(state, event.target.textContent));
  };

  return (
    <div className="calculator-container">
      <div className="display">{state.next || state.total || 0}</div>
      <div className="buttons-container">
        <div className="buttons-left">
          <div className="actions">
            <button type="button" onClick={handleClick}>AC</button>
            <button type="button" onClick={handleClick}>+/-</button>
            <button type="button" onClick={handleClick}>%</button>
          </div>
          <div className="numpad">
            <button type="button" onClick={handleClick}>9</button>
            <button type="button" onClick={handleClick}>8</button>
            <button type="button" onClick={handleClick}>7</button>
            <button type="button" onClick={handleClick}>6</button>
            <button type="button" onClick={handleClick}>5</button>
            <button type="button" onClick={handleClick}>4</button>
            <button type="button" onClick={handleClick}>3</button>
            <button type="button" onClick={handleClick}>2</button>
            <button type="button" onClick={handleClick}>1</button>
            <button type="button" onClick={handleClick} className="num-zero">0</button>
            <button type="button" onClick={handleClick}>.</button>
          </div>
        </div>
        <div className="mathoperators">
          <button type="button" onClick={handleClick}>÷</button>
          <button type="button" onClick={handleClick}>x</button>
          <button type="button" onClick={handleClick}>-</button>
          <button type="button" onClick={handleClick}>+</button>
          <button type="button" onClick={handleClick}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
