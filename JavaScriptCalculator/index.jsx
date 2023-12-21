const POINT = '.';
const MINUS = '-';
const operators = ['/', '*', '+', MINUS];
const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const EQUALS = '=';
const isOperator = (vel) => operators.includes(vel);

// React
import React, { useState } from 'https://cdn.skypack.dev/react@17.0.1';
import ReactDOM from 'https://cdn.skypack.dev/react-dom@17.0.1';

const App = () => {
    const [calc, setCalc] = useState('');
    const [result, setResult] = useState('');
    const isCalculated = calc.includes(EQUALS);
    const last = calc.slice(-1);
    const prevLast = calc.slice(-2, -1);

    const updateCalc = (value) => {
        if (isOperator(value)) {
            if (!calc && value !== MINUS) return;

            if (isCalculated) {
                setCalc(result + value);
            } else {
                if (isOperator(last) && isOperator(prevLast)) {
                    let res = calc.slice(0, -2);
                    setCalc(res + value);
                } else if (isOperator(last) && value !== MINUS) {
                    let res = calc.slice(0, -1);
                    setCalc(res + value);
                } else {
                    setCalc(calc + value);
                }
            }
            setResult(value);
        } else if (digits.includes(value)) {
            if (result === '0') return;

            if (!calc || isCalculated) {
                setCalc(value);
                setResult(value);
            } else if (isOperator(last)) {
                setCalc(calc + value);
                setResult(value);
            } else {
                setCalc(calc + value);
                setResult(result + value);
            }
        } else if (value === POINT) {
            if (result.includes(value) || isOperator(last)) return;

            if (!calc || isCalculated) {
                setCalc('0' + value);
                setResult('0' + value);
            } else {
                setCalc(calc + value);
                setResult(result + value);
            }
        }
    };

    const calculate = () => {
        let res = eval(calc);
        setCalc(calc + EQUALS + res);
        setResult(res);
    };
    const clear = () => {
        setCalc('');
        setResult('');
    };

    return (
        <div className="App">
            <div className="calculator">
                <form className="display">
                    <input value={calc} />
                    <div id="display">{result ? result : '0'}</div>
                </form>

                <div class="operators">
                    <button id="divide" onClick={() => updateCalc('/')}>
                        /
                    </button>
                    <button id="multiply" onClick={() => updateCalc('*')}>
                        *
                    </button>
                    <button id="add" onClick={() => updateCalc('+')}>
                        +
                    </button>
                    <button id="subtract" onClick={() => updateCalc('-')}>
                        -
                    </button>

                    <button id="clear" onClick={clear}>
                        CE
                    </button>
                </div>
                <div className="digits">
                    <button id="one" onClick={() => updateCalc('1')}>
                        1
                    </button>
                    <button id="two" onClick={() => updateCalc('2')}>
                        2
                    </button>
                    <button id="three" onClick={() => updateCalc('3')}>
                        3
                    </button>
                    <button id="four" onClick={() => updateCalc('4')}>
                        4
                    </button>
                    <button id="five" onClick={() => updateCalc('5')}>
                        5
                    </button>
                    <button id="six" onClick={() => updateCalc('6')}>
                        6
                    </button>
                    <button id="seven" onClick={() => updateCalc('7')}>
                        7
                    </button>
                    <button id="eight" onClick={() => updateCalc('8')}>
                        8
                    </button>
                    <button id="nine" onClick={() => updateCalc('9')}>
                        9
                    </button>
                    <button id="zero" onClick={() => updateCalc('0')}>
                        0
                    </button>
                    <button id="decimal" onClick={() => updateCalc('.')}>
                        .
                    </button>
                    <button id="equals" onClick={calculate}>
                        =
                    </button>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
