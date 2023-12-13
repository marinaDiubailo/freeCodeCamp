/***********************1***************** */
const JSX = <h1>{'Hello JSX!'}</h1>;

/***********************2***************** */
const JSX2 = (
    <div>
        <h1>Hello</h1>
        <p>world!</p>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
);

/***********************3***************** */
const JSX3 = (
    <div>
        <h1>This is a block of JSX</h1>
        {/**Hello, world! */}
        <p>Here's a subtitle</p>
    </div>
);

/***********************4***************** */

const JSX4 = (
    <div>
        <h1>Hello World</h1>
        <p>Lets render this to the DOM</p>
    </div>
);
// Add your code below this line
ReactDOM.render(JSX4, document.getElementById('challenge-node'));

/***********************5***************** */
const JSX5 = (
    <div className="myDiv">
        <h1>Add a class to this div</h1>
    </div>
);
/***********************6***************** */

const JSX6 = (
    <div>
        <h2>Welcome to React!</h2> <br />
        <p>Be sure to close all tags!</p>
        <hr />
    </div>
);

/***********************7***************** */
const MyComponent = function () {
    // Change code below this line
    return <div>Hello, world!</div>;

    // Change code above this line
};

/***********************8***************** */
class MyComponent1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // Change code below this line
        return (
            <div>
                <h1>Hello React!</h1>
            </div>
        );

        // Change code above this line
    }
}

/***********************9***************** */
const ChildComponent = () => {
    return (
        <div>
            <p>I am the child</p>
        </div>
    );
};

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>I am the parent</h1>
                {/* Change code below this line */}
                <ChildComponent />

                {/* Change code above this line */}
            </div>
        );
    }
}

/***********************10**************** */
const TypesOfFruit = () => {
    return (
        <div>
            <h2>Fruits:</h2>
            <ul>
                <li>Apples</li>
                <li>Blueberries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
            </ul>
        </div>
    );
};

const Fruits = () => {
    return (
        <div>
            {/* Change code below this line */}
            <TypesOfFruit />
            {/* Change code above this line */}
        </div>
    );
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                {/* Change code below this line */}
                <Fruits />
                {/* Change code above this line */}
            </div>
        );
    }
}

/***********************11**************** */
class Fruits2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Fruits:</h2>
                {/* Change code below this line */}
                <NonCitrus />
                <Citrus />
                {/* Change code above this line */}
            </div>
        );
    }
}

class TypesOfFood2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                {/* Change code below this line */}
                <Fruits2 />
                {/* Change code above this line */}
                <Vegetables />
            </div>
        );
    }
}

/***********************12**************** */

class TypesOfFood3 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                {/* Change code below this line */}
                <Fruits />
                <Vegetables />
                {/* Change code above this line */}
            </div>
        );
    }
}

// Change code below this line

ReactDOM.render(<TypesOfFood3 />, document.getElementById('challenge-node'));

/***********************13**************** */

class MyComponent3 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>My First React Component!</h1>
            </div>
        );
    }
}
ReactDOM.render(<MyComponent3 />, document.getElementById('challenge-node'));

/***********************14**************** */

const CurrentDate = (props) => {
    return (
        <div>
            {/* Change code below this line */}
            <p>The current date is: {props.date}</p>
            {/* Change code above this line */}
        </div>
    );
};

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>What date is it?</h3>
                {/* Change code below this line */}
                <CurrentDate date={Date()} />
                {/* Change code above this line */}
            </div>
        );
    }
}

/***********************15**************** */

const List = (props) => {
    {
        /* Change code below this line */
    }
    return <p>{props.tasks.join(', ')}</p>;
    {
        /* Change code above this line */
    }
};

class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>To Do Lists</h1>
                <h2>Today</h2>
                {/* Change code below this line */}
                <List tasks={['walk dog', 'workout']} />
                <h2>Tomorrow</h2>
                <List tasks={['walk dog', 'workout', 'do']} />
                {/* Change code above this line */}
            </div>
        );
    }
}

/***********************16**************** */

const ShoppingCart2 = (props) => {
    return (
        <div>
            <h1>Shopping Cart Component</h1>
        </div>
    );
};

// Change code below this line
ShoppingCart2.defaultProps = { items: 0 };

/***********************17**************** */
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

Items.defaultProps = {
    quantity: 0,
};

class ShoppingCart3 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        {
            /* Change code below this line */
        }
        return <Items quantity={10} />;
        {
            /* Change code above this line */
        }
    }
}

/***********************18**************** */
const Items4 = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

// Change code below this line
Items4.propTypes = { quantity: PropTypes.number.isRequired };
// Change code above this line

Items4.defaultProps = {
    quantity: 0,
};

class ShoppingCart4 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Items4 />;
    }
}
/***********************19**************** */

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {/* Change code below this line */}
                <Welcome name="Marina" />
                {/* Change code above this line */}
            </div>
        );
    }
}

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {/* Change code below this line */}
                <p>
                    Hello, <strong>{this.props.name}</strong>!
                </p>
                {/* Change code above this line */}
            </div>
        );
    }
}
/***********************20**************** */
/***********************21**************** */
/***********************22**************** */
