import React, { useReducer } from "react";

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, 0);

    return (
        <div>
            <h2>Counter</h2>
            <p>Count: {state}</p>
            <button onClick={() => dispatch({ type: ACTION.DECREASE })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: ACTION.RESET })}>
                Reset
            </button>
            <button onClick={() => dispatch({ type: ACTION.INCREASE })}>
                Increment
            </button>
        </div>
    );
};

export default Counter;

const counterReducer = (state, action) => {
    switch (action.type) {
        case ACTION.INCREASE:
            return state + 1;
        case ACTION.DECREASE:
            return state - 1;
        case ACTION.RESET:
            return (state = 0);
    }
};

const ACTION = {
    INCREASE: "increase",
    DECREASE: "decrease",
    RESET: "reset",
};
