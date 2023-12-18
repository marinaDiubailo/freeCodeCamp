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
const data = [
    {
        id: 0,
        quote: 'Life isn’t about getting and having, it’s about giving and being.',
        author: 'Kevin Kruse',
    },
    {
        id: 1,
        quote: 'Whatever the mind of man can conceive and believe, it can achieve.',
        author: 'Napoleon Hill',
    },
    {
        id: 2,
        quote: 'Strive not to be a success, but rather to be of value.',
        author: 'Albert Einstein',
    },
    {
        id: 3,
        quote: 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
        author: 'Robert Frost',
    },
    {
        id: 4,
        quote: 'I attribute my success to this: I never gave or took any excuse.',
        author: 'Florence Nightingale',
    },
    {
        id: 5,
        quote: 'You miss 100% of the shots you don’t take.',
        author: 'Wayne Gretzky',
    },
    {
        id: 6,
        quote: 'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.',
        author: 'Michael Jordan',
    },
    {
        id: 7,
        quote: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
        author: 'Amelia Earhart',
    },
    {
        id: 8,
        quote: 'Life is 10% what happens to me and 90% of how I react to it.',
        author: 'Charles Swindoll',
    },
    {
        id: 9,
        quote: 'The most common way people give up their power is by thinking they don’t have any.',
        author: 'Alice Walker',
    },
];

// React
import React, {
    useEffect,
    useState,
} from 'https://cdn.skypack.dev/react@17.0.1';
import ReactDOM from 'https://cdn.skypack.dev/react-dom@17.0.1';

const App = () => {
    const [quoteData, setQuoteData] = useState({});
    const newQuote = data[Math.floor(Math.random() * data.length)];

    useEffect(() => {
        setQuoteData(newQuote);
    }, []);

    const clickHandler = () => {
        setQuoteData(newQuote);
    };

    return (
        <div className="main" id="quote-box">
            <div id="text">
                <span>&#8220;</span>
                {quoteData.quote}
                <span>&#8221;</span>
            </div>
            <div id="author">{quoteData.author}</div>
            <div className="actions">
                <a
                    id="tweet-quote"
                    target="_blank"
                    href="twitter.com/intent/tweet"
                >
                    <i class="fa fa-twitter"></i>
                </a>
                <button id="new-quote" onClick={clickHandler}>
                    New quote
                </button>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
