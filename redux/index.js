/********************1******************** */
const reducer = (state = 5) => {
    return state;
};

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
const store = Redux.createStore(reducer);

/********************2******************** */
const store2 = Redux.createStore((state = 5) => state);

// Change code below this line
const currentState = store2.getState();

/********************3******************** */
// Define an action here:
const action = {
    type: 'LOGIN',
};
/********************4******************** */
// Define an action creator here:

function actionCreator(action) {
    return action;
}

/********************5******************** */
const store5 = Redux.createStore((state = { login: false }) => state);

const loginAction = () => {
    return {
        type: 'LOGIN',
    };
};

// Dispatch the action here:
store5.dispatch(loginAction());

/********************6******************** */

const reducer6 = (state = defaultState, action) => {
    // Change code below this line

    if (action.type === 'LOGIN') {
        return { ...state, login: true };
    } else {
        return state;
    }
    // Change code above this line
};

/********************7******************** */
const defaultState = {
    authenticated: false,
};

const authReducer = (state = defaultState, action) => {
    // Change code below this line
    switch (action.type) {
        case 'LOGIN':
            return { authenticated: true };
        case 'LOGOUT':
            return { authenticated: false };
        default:
            return state;
    }
    // Change code above this line
};

const store7 = Redux.createStore(authReducer);

const loginUser = () => {
    return {
        type: 'LOGIN',
    };
};

const logoutUser = () => {
    return {
        type: 'LOGOUT',
    };
};
/********************8******************** */
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState8 = {
    authenticated: false,
};

const authReducer8 = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                authenticated: true,
            };
        case LOGOUT:
            return {
                authenticated: false,
            };

        default:
            return state;
    }
};

const store8 = Redux.createStore(authReducer);

const loginUser8 = () => {
    return {
        type: LOGIN,
    };
};

const logoutUser8 = () => {
    return {
        type: LOGOUT,
    };
};

/********************9******************** */
const ADD = 'ADD';

const reducer9 = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1;
        default:
            return state;
    }
};

const store9 = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line

let currentValue;
const increment = () => {
    let previousValue = currentValue;
    currentValue = store.getState();
    if (previousValue !== currentValue) {
        count = count + 1;
    }
};
store.subscribe(increment);
// Change code above this line

store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);

/********************10******************* */
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

// const LOGIN = 'LOGIN';
// const LOGOUT = 'LOGOUT';

const authReducer10 = (state = { authenticated: false }, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                authenticated: true,
            };
        case LOGOUT:
            return {
                authenticated: false,
            };
        default:
            return state;
    }
};

const rootReducer = Redux.combineReducers({
    auth: authReducer,
    count: counterReducer10,
});

const store10 = Redux.createStore(rootReducer);

/********************11******************* */
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
    switch (action.type) {
        // Change code below this line
        case ADD_NOTE:
            return action.text;

        // Change code above this line
        default:
            return state;
    }
};

const addNoteText = (note) => {
    // Change code below this line
    return {
        type: ADD_NOTE,
        text: note,
    };
    // Change code above this line
};

const store11 = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());

/********************12******************* */
const REQUESTING_DATA = 'REQUESTING_DATA';
const RECEIVED_DATA = 'RECEIVED_DATA';

const requestingData = () => {
    return { type: REQUESTING_DATA };
};
const receivedData = (data) => {
    return { type: RECEIVED_DATA, users: data.users };
};

const handleAsync = () => {
    return function (dispatch) {
        // Dispatch request action here
        dispatch(requestingData());
        setTimeout(function () {
            let data = {
                users: ['Jeff', 'William', 'Alice'],
            };
            // Dispatch received data action here
            dispatch(receivedData(data));
        }, 2500);
    };
};

const defaultState12 = {
    fetching: false,
    users: [],
};

const asyncDataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUESTING_DATA:
            return {
                fetching: true,
                users: [],
            };
        case RECEIVED_DATA:
            return {
                fetching: false,
                users: action.users,
            };
        default:
            return state;
    }
};

const store12 = Redux.createStore(
    asyncDataReducer,
    Redux.applyMiddleware(ReduxThunk.default),
);

/********************13******************* */
// const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
// const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types

const counterReducer13 = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => {
    return { type: INCREMENT };
}; // Define an action creator for incrementing

const decAction = () => {
    return { type: DECREMENT };
}; // Define an action creator for decrementing

const store13 = Redux.createStore(counterReducer13); // Define the Redux store here, passing in your reducers
/********************14******************* */
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
    'Go to the store',
    'Clean the house',
    'Cook dinner',
    'Learn to code',
];

const immutableReducer = (state = todos, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            // Don't mutate state here or the tests will fail
            return [...state, action.todo];
        default:
            return state;
    }
};
const addToDo = (todo) => {
    return {
        type: ADD_TO_DO,
        todo,
    };
};

const store14 = Redux.createStore(immutableReducer);

/********************15******************* */
const immutableReducer15 = (state = ['Do not mutate state!'], action) => {
    switch (action.type) {
        case 'ADD_TO_DO':
            // Don't mutate state here or the tests will fail
            return [...state, action.todo];
        default:
            return state;
    }
};

const addToDo15 = (todo) => {
    return {
        type: 'ADD_TO_DO',
        todo,
    };
};

const store15 = Redux.createStore(immutableReducer15);

/********************16******************* */
const immutableReducer16 = (state = [0, 1, 2, 3, 4, 5], action) => {
    switch (action.type) {
        case 'REMOVE_ITEM':
            // Don't mutate state here or the tests will fail

            return state
                .slice(0, action.index)
                .concat(state.slice(action.index + 1));
        default:
            return state;
    }
};

const removeItem = (index) => {
    return {
        type: 'REMOVE_ITEM',
        index,
    };
};

const store16 = Redux.createStore(immutableReducer);
/********************17******************* */
const defaultState17 = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp',
};

const immutableReducer17 = (state = defaultState, action) => {
    switch (action.type) {
        case 'ONLINE':
            // Don't mutate state here or the tests will fail
            return Object.assign({}, state, { status: 'online' });
        default:
            return state;
    }
};

const wakeUp = () => {
    return {
        type: 'ONLINE',
    };
};

const store17 = Redux.createStore(immutableReducer17);
