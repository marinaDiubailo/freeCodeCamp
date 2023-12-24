import React, {
    useEffect,
    useState,
} from 'https://cdn.skypack.dev/react@17.0.1';
import ReactDOM from 'https://cdn.skypack.dev/react-dom@17.0.1';

const App = () => {
    const initialBreakTime = 5 * 60;
    const initialSessionTime = 25 * 60;

    const [timer, setTimer] = useState(initialSessionTime);
    const [breakView, setBreakView] = useState(initialBreakTime);
    const [sessionView, setSessionView] = useState(initialSessionTime);
    const [isSession, setIsSession] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    const formatTime = (time) => {
        let minutes = Math.floor(time / 60);
        let siconds = time % 60;
        return (
            (minutes < 10 ? '0' + minutes : minutes) +
            ':' +
            (siconds < 10 ? '0' + siconds : siconds)
        );
    };

    const changeTime = (amount, type) => {
        if (type === 'break') {
            if (breakView + amount >= 60 && breakView + amount <= 3600) {
                setBreakView(breakView + amount);
            }
        } else {
            if (sessionView + amount >= 60 && sessionView + amount <= 3600) {
                setSessionView(sessionView + amount);
                if (!isSession) {
                    setTimer(sessionView + amount);
                }
            }
        }
    };

    const resetHandler = () => {
        const audio = document.getElementById('beep');
        audio.pause();
        audio.currentTime = 0;

        setBreakView(initialBreakTime);
        setSessionView(initialSessionTime);
        setTimer(initialSessionTime);
        setIsSession(false);
        setIsBreak(false);
    };

    const controlTimeHandler = () => {
        setIsSession(!isSession);
    };

    useEffect(() => {
        let countdown;

        if (isSession) {
            countdown = setInterval(() => {
                setTimer((prev) => {
                    if (prev > 0) {
                        return prev - 1;
                    } else {
                        setIsBreak(!isBreak);
                        return isBreak ? sessionView : breakView;
                    }
                });
            }, 1000);
        } else {
            clearInterval(countdown);
        }

        if (timer === 0) {
            const audio = document.getElementById('beep');
            audio.currentTime = 0;
            audio.play();
        }

        return () => {
            clearInterval(countdown);
        };
    }, [isSession, isBreak, sessionView, breakView, timer]);

    return (
        <div className="App">
            <h1>25 + 5 Clock</h1>
            <div className="break-session-container">
                <div className="container">
                    <h2 id="break-label">Break Length</h2>
                    <div className="arrows">
                        <button
                            id="break-decrement"
                            onClick={() => changeTime(-60, 'break')}
                        >
                            <i
                                class="fa fa-2x fa-arrow-down"
                                aria-hidden="true"
                            ></i>
                        </button>
                        <span id="break-length">{breakView / 60}</span>
                        <button
                            id="break-increment"
                            onClick={() => changeTime(-60, 'break')}
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
                            onClick={() => changeTime(-60, 'session')}
                        >
                            <i
                                class="fa fa-2x fa-arrow-down"
                                aria-hidden="true"
                            ></i>
                        </button>
                        <span id="session-length">{sessionView / 60}</span>
                        <button
                            id="session-increment"
                            onClick={() => changeTime(60, 'session')}
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
                <h2 id="timer-label">{isBreak ? 'Break' : 'Session'}</h2>
                <div id="time-left">{formatTime(timer)}</div>
            </div>

            <div className="buttons-container">
                <button id="start_stop" onClick={controlTimeHandler}>
                    {isSession ? (
                        <i class="fa fa-2x fa-pause" aria-hidden="true"></i>
                    ) : (
                        <i class="fa fa-2x fa-play" aria-hidden="true"></i>
                    )}
                </button>

                <button id="reset" onClick={resetHandler}>
                    <i class="fa fa-2x fa-refresh" aria-hidden="true"></i>
                </button>
            </div>
            <audio
                id="beep"
                src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
