// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.

const operators = ['/', '*', '+', '-', '.'];

// React
import React, { useState } from 'https://cdn.skypack.dev/react@17.0.1';
import ReactDOM from 'https://cdn.skypack.dev/react-dom@17.0.1';

const App = () => {
    const [calc, setCalc] = useState('');
    const [result, setResult] = useState('');
    const opsMinusPoint = ['/', '*', '+', MINUS];

    // const updateCalc = (value) => {
    //     /********************************************/
    //     if (!calc) {
    //         if (ops.includes(value)) return;

    //         if (value === POINT) {
    //             setCalc('0' + value);
    //             setResult('0' + value);
    //             return;
    //         }
    //         if (value === MINUS || digits.includes(value)) {
    //             setCalc(value);
    //             setResult(value);
    //             return;
    //         }
    //     }

    //     if (calc === '0' && !operators.includes(value)) {
    //         return;
    //     }

    //     if (calc && calc.includes('=')) {
    //         if (digits.includes(value)) {
    //             setCalc(value);
    //             setResult(value);
    //             return;
    //         }
    //         if (value === POINT) {
    //             setCalc('0' + value);
    //             setResult('0' + value);
    //             return;
    //         }

    //         if (opsMinusPoint.includes(value)) {
    //             setCalc(result.concat(value));
    //             setResult(value);
    //             return;
    //         }
    //     }

    //     /**********************************************/
    //     if (
    //         operators.includes(value) &&
    //         operators.includes(calc.slice(-1)) &&
    //         value !== MINUS
    //     ) {
    //         const res = calc.slice(0, -1);
    //         setCalc(res.concat(value));
    //         setResult(value);
    //         return;
    //     } else if (
    //         operators.includes(value) &&
    //         operators.includes(calc.slice(-1)) &&
    //         operators.includes(calc.slice(-2, -1))
    //     ) {
    //         const res = calc.slice(0, -2);
    //         setCalc(res.concat(value));
    //         setResult(value);
    //         return;
    //     }

    //     setCalc(calc.concat(value));
    // };

    const updateCalc = (value) => {
        if (value === NEGATIVE) {
            if (result === '') return;
            setResult(
                result.toString().charAt(0) === MINUS
                    ? result.slice(1)
                    : MINUS + result,
            );
        } else if (opsMinusPoint.includes(value)) {
            setCalc(trimmed + ' ' + value + ' ');
        } else if (value === '0') {
            if (calc.charAt(0) !== '0') {
                setCalc(calc + value);
            }
        } else if (value === POINT) {
            const lastNumber = calc.split(/[-+*/]/g).pop();
            if (!lastNumber) return;
            if (lastNumber.includes(POINT)) return;
            setCalc(calc + value);
        } else {
            if (calc.charAt(0) === '0') {
                setCalc(calc.slice(1) + value);
            } else {
                setCalc(calc + value);
            }
        }
    };

    const calculate = () => {
        if (opsMinusPoint.includes(trimmed.charAt(trimmed.length - 1))) return;
        const parts = trimmed.split(' ');
        const newParts = [];
        for (let i = parts.length - 1; i >= 0; i--) {
            if (
                opsMinus.includes(parts[i]) &&
                opsMinusPoint.includes(parts[i - 1])
            ) {
                newParts.unshift(parts[i]);
                let j = 0;
                let k = i - 1;
                while (opsMinusPoint.includes(parts[k])) {
                    k--;
                    j++;
                }
                i -= j;
            } else {
                newParts.unshift(parts[i]);
            }
        }
        const newCalc = newParts.join(' ');
        if (opsMinusPoint.includes(newCalc.charAt(0))) {
            setResult(eval(result + newCalc));
        } else {
            setResult(eval(newCalc));
        }
        setCalc('');
    };

    const clear = () => {
        setCalc('');
        setResult('0');
    };

    return (
        <div className="App">
            <div className="calculator">
                <div className="display">
                    <span>Result: {result ? result : '()'} </span>
                </div>
                <div>{calc || '0'}</div>
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
                    <button onClick={deleteLast}>DEL</button>
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
                    <button onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
