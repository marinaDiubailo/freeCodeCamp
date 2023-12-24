import React, {
    useEffect,
    useState,
} from 'https://cdn.skypack.dev/react@17.0.1';
import ReactDOM from 'https://cdn.skypack.dev/react-dom@17.0.1';

const breakLength = 5 * 60;
const sessionLength = 25 * 60;

const App = () => {
    const [breakView, setBreakView] = useState(breakLength / 60);
    const [sessionView, setSessionView] = useState(sessionLength / 60);

    const resetHandler = () => {
        setBreaklength(5);
        setSessionlength(25);
    };

    const breakDecrementHandler = () => {
        if (breakView === 1) return;
        setBreakView((prev) => prev - 1);
    };
    const breakIncrementHandler = () => {
        if (breakView === 60) return;
        setBreakView((prev) => prev + 1);
    };
    const sessionDecrementHandler = () => {
        if (sessionView === 1) return;
        setSessionView((prev) => prev - 1);
    };
    const sessionIncrementHandler = () => {
        if (sessionView === 60) return;
        setSessionView((prev) => prev + 1);
    };

    return (
        <div className="App">
            <h1>25 + 5 Clock</h1>
            <div className="break-session-container">
                <div className="container">
                    <h2 id="break-label">Break Length</h2>
                    <div className="arrows">
                        <button
                            id="break-decrement"
                            onClick={breakDecrementHandler}
                        >
                            <i
                                class="fa fa-2x fa-arrow-down"
                                aria-hidden="true"
                            ></i>
                        </button>
                        <span id="break-length">{breakView}</span>
                        <button
                            id="break-increment"
                            onClick={breakIncrementHandler}
                        >
                            <i
                                class="fa fa-2x fa-arrow-up"
                                aria-hidden="true"
                            ></i>
                        </button>
                    </div>
                </div>
                <div className="container">
                    <h2 id="session-label">Session Length</h2>
                    <div className="arrows">
                        <button
                            id="session-decrement"
                            onClick={sessionDecrementHandler}
                        >
                            <i
                                class="fa fa-2x fa-arrow-down"
                                aria-hidden="true"
                            ></i>
                        </button>
                        <span id="session-length">{sessionView}</span>
                        <button
                            id="session-increment"
                            onClick={sessionIncrementHandler}
                        >
                            <i
                                class="fa fa-2x fa-arrow-up"
                                aria-hidden="true"
                            ></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="session-container">
                <h2 id="timer-label">Session</h2>
                <div id="time-left">25:00</div>
            </div>

            <div className="buttons-container">
                <button id="start_stop">
                    <i class="fa fa-2x fa-play" aria-hidden="true"></i>
                </button>
                <button>
                    <i class="fa fa-2x fa-pause" aria-hidden="true"></i>
                </button>
                <button id="reset" onClick={resetHandler}>
                    <i class="fa fa-2x fa-refresh" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
