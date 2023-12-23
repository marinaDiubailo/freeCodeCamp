import React, {
    useEffect,
    useState,
} from 'https://cdn.skypack.dev/react@17.0.1';
import ReactDOM from 'https://cdn.skypack.dev/react-dom@17.0.1';

const App = () => {
    const [breakLength, setBreaklength] = useState(5);
    const [sessionLength, setSessionlength] = useState(25);

    const resetHandler = () => {
        setBreaklength(5);
        setSessionlength(25);
    };

    return (
        <div className="App">
            <h1>25 + 5 Clock</h1>
            <div className="break-session-container">
                <div className="container">
                    <h2 id="break-label">Break Length</h2>
                    <div className="arrows">
                        <button id="break-decrement">
                            <i class="fa fa-arrow-down" aria-hidden="true"></i>
                        </button>
                        <span id="break-length">{breakLength}</span>
                        <button id="break-increment">
                            <i class="fa fa-arrow-up" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <div className="container">
                    <h2 id="session-label">Session Length</h2>
                    <div className="arrows">
                        <button id="session-decrement">
                            <i class="fa fa-arrow-down" aria-hidden="true"></i>
                        </button>
                        <span id="session-length">{sessionLength}</span>
                        <button id="session-increment">
                            <i class="fa fa-arrow-up" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="session-container">
                <h2 id="timer-label">Session</h2>
                <h1 id="time-left">25:00</h1>
            </div>

            <div className="buttons-container">
                <button id="start_stop">
                    <i class="fa fa-play" aria-hidden="true"></i>
                </button>
                <button>
                    <i class="fa fa-pause" aria-hidden="true"></i>
                </button>
                <button id="reset" onClick={resetHandler}>
                    <i class="fa fa-refresh" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
