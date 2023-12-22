import React, {
    useEffect,
    useState,
} from 'https://cdn.skypack.dev/react@17.0.1';
import ReactDOM from 'https://cdn.skypack.dev/react-dom@17.0.1';

const drums = [
    {
        keyCode: 81,
        text: 'Q',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
    {
        keyCode: 87,
        text: 'W',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    {
        keyCode: 69,
        text: 'E',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    {
        keyCode: 65,
        text: 'A',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    },
    {
        keyCode: 83,
        text: 'S',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    },
    {
        keyCode: 68,
        text: 'D',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
    {
        keyCode: 90,
        text: 'Z',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
    {
        keyCode: 88,
        text: 'X',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        keyCode: 67,
        text: 'C',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    },
];
const App = () => {
    const [value, setValue] = useState('');

    const playSound = (id) => {
        const element = document.getElementById(id);
        element.play();
        setValue(id);
    };

    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            playSound(event.key.toUpperCase());
        });
    }, []);
    return (
        <div className="App">
            <div id="drum-machine">
                <div id="display">{value}</div>
                <div className="container">
                    {drums.map((item) => (
                        <div
                            onClick={() => {
                                playSound(item.text);
                            }}
                            className="drum-pad"
                            key={item.keyCode}
                            id={item.keyCode}
                        >
                            <p> {item.text} </p>
                            <audio
                                src={item.src}
                                id={item.text}
                                className="clip"
                            ></audio>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));
