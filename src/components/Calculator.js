import React from 'react';
import '../styles/Calculator.css';
import Calculate from '../logic/Calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState((state) => Calculate(state, event.target.textContent));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="calculator-container">
        <div className="display">{next || total || 0}</div>
        <div className="buttons-container">
          <div className="buttons-left">
            <div className="actions">
              <button type="button" onClick={this.handleClick}>AC</button>
              <button type="button" onClick={this.handleClick}>+/-</button>
              <button type="button" onClick={this.handleClick}>%</button>
            </div>
            <div className="numpad">
              <button type="button" onClick={this.handleClick}>9</button>
              <button type="button" onClick={this.handleClick}>8</button>
              <button type="button" onClick={this.handleClick}>7</button>
              <button type="button" onClick={this.handleClick}>6</button>
              <button type="button" onClick={this.handleClick}>5</button>
              <button type="button" onClick={this.handleClick}>4</button>
              <button type="button" onClick={this.handleClick}>3</button>
              <button type="button" onClick={this.handleClick}>2</button>
              <button type="button" onClick={this.handleClick}>1</button>
              <button type="button" onClick={this.handleClick} className="num-zero">0</button>
              <button type="button" onClick={this.handleClick}>.</button>
            </div>
          </div>
          <div className="mathoperators">
            <button type="button" onClick={this.handleClick}>÷</button>
            <button type="button" onClick={this.handleClick}>x</button>
            <button type="button" onClick={this.handleClick}>-</button>
            <button type="button" onClick={this.handleClick}>+</button>
            <button type="button" onClick={this.handleClick}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
