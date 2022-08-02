import React from 'react';
import '../styles/Calculator.css';

const CalculatorHtml = () => (
  <div className="calculator-container">
    <div className="display">0</div>
    <div className="buttons-container">
      <div className="buttons-left">
        <div className="actions">
          <span>AC</span>
          <span>+/-</span>
          <span>%</span>
        </div>
        <div className="numpad">
          <span>9</span>
          <span>8</span>
          <span>7</span>
          <span>6</span>
          <span>5</span>
          <span>4</span>
          <span>3</span>
          <span>2</span>
          <span>1</span>
          <span className="num-zero">0</span>
          <span>.</span>
        </div>
      </div>
      <div className="mathoperators">
        <span>÷</span>
        <span>X</span>
        <span>-</span>
        <span>+</span>
        <span>=</span>
      </div>
    </div>
  </div>
);

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CalculatorHtml />
    );
  }
}

export default Calculator;
