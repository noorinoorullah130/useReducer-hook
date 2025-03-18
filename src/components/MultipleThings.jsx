import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };
        case "decrement":
            return { ...state, count: state.count - 1 };
        case "reset":
            return { ...state, count: (state.count = 0) };
        case "todoInput":
            return { ...state, todoInput: action.payload };
        case "bgColor":
            return { ...state, bgColor: action.payload };
        default:
            throw new Error();
    }
};

const MultipleThings = () => {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        todoInput: "",
        bgColor: "#333",
    });

    return (
        <div
            className="multiple-things"
            style={{ backgroundColor: state.bgColor }}
        >
            <div>
                <p>{state.count}</p>
                <button onClick={() => dispatch({ type: "decrement" })}>
                    Decrement
                </button>
                <button onClick={() => dispatch({ type: "reset" })}>
                    Reset
                </button>
                <button onClick={() => dispatch({ type: "increment" })}>
                    Increment
                </button>
            </div>

            <div>
                <input
                    type="text"
                    value={state.todoInput}
                    onChange={(e) =>
                        dispatch({ type: "todoInput", payload: e.target.value })
                    }
                />
                <h2>{state.todoInput}</h2>
            </div>

            <input
                type="color"
                value={state.bgColor}
                onChange={(e) =>
                    dispatch({ type: "bgColor", payload: e.target.value })
                }
            />
        </div>
    );
};

export default MultipleThings;
