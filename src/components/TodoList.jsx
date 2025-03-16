import React, { useReducer, useState } from "react";

const todoListReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, { id: Date.now(), text: action.payload }];
        case "REMOVE_TODO":
            return state.filter((todo) => todo.id !== action.payload);
    }
};

const TodoList = () => {
    const [todos, dispatch] = useReducer(todoListReducer, []);
    const [input, setInput] = useState("");

    const handleAddTodo = () => {
        dispatch({ type: "ADD_TODO", payload: input });
        setInput("");
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button
                            onClick={() =>
                                dispatch({
                                    type: "REMOVE_TODO",
                                    payload: todo.id,
                                })
                            }
                        >
                            remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
