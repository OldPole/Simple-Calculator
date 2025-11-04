import Display from '../Display/Display';
import ButtonPanel from '../ButtonPanel/ButtonPanel';
import { calculate } from '../../services/calculate';

import styles from './Calculator.module.css';

class Calculator {
  constructor() {
    this.currentOperand = '0';
    this.prevOperand = '';
    this.operator = null;
  }

  handleButtonClick(value) {
    if (!isNaN(value) || value === ',') {
      this.handleNumber(value);
    } else if (value === 'AC') {
      this.handleClear();
    } else if (value === '+/-') {
      this.handleSignChange(value);
    } else if (value === '%') {
      this.handlePercentage(value);
    } else {
      this.handleOperator(value);
    }

    Display.update(this.currentOperand);
  }

  handleNumber(number) {
    if (this.currentOperand === 'Error') {
      return;
    }

    if (this.operator && this.currentOperand === this.prevOperand) {
      this.currentOperand = number === ',' ? '0,' : number;
      return;
    }

    if (this.currentOperand.length >= 9) {
      return;
    }

    if (number === ',' && this.currentOperand.includes(',')) {
      return;
    }

    if (this.currentOperand === '0') {
      this.currentOperand = number === ',' ? '0,' : number;
    } else if (this.currentOperand === '' && number === ',') {
      this.currentOperand = '0,';
    } else {
      this.currentOperand = this.currentOperand + number;
    }
  }

  handleClear() {
    this.currentOperand = '0';
    this.prevOperand = '';
    this.operator = null;
  }

  handleSignChange() {
    if (this.currentOperand === '0' || this.currentOperand === 'Error') {
      return;
    }

    const value = +this.currentOperand.replace(',', '.');
    const newValue = -value;
    this.currentOperand = newValue.toString().replace('.', ',');
  }

  handlePercentage() {
    if (this.currentOperand === '0' || this.currentOperand === 'Error') {
      return;
    }

    const value = parseFloat(this.currentOperand.replace(',', '.'));
    const newValue = value / 100;
    this.currentOperand = parseFloat(newValue.toPrecision(9)).toString().replace('.', ',');
  }

  handleOperator(nextOperator) {
    if (this.currentOperand === 'Error') {
      return;
    }

    if (nextOperator === '=') {
      if (this.prevOperand && this.operator && this.currentOperand) {
        const prev = parseFloat(this.prevOperand.replace(',', '.'));
        const current = parseFloat(this.currentOperand.replace(',', '.'));
        const result = calculate(prev, current, this.operator);

        this.currentOperand =
          result === 'Error'
            ? 'Error'
            : parseFloat(result.toPrecision(9)).toString().replace('.', ',');
        this.prevOperand = '';
        this.operator = null;
      }
    } else if (this.currentOperand && this.currentOperand !== '0') {
      this.prevOperand = this.currentOperand;
      this.operator = nextOperator;
    }
  }

  render() {
    const html = `
        <div class=${styles.calculator}>
            ${Display.render()}
            ${ButtonPanel.render()}
        </div>
    `;

    return html;
  }

  attachEventListeners() {
    ButtonPanel.attachEventListeners((value) => {
      this.handleButtonClick(value);
    });
  }
}

export default new Calculator();
