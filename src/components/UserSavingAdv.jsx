import React, { useReducer } from "react";

function userReducer(state, action) {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case "UPDATE_FORM":
            return {
                ...state,
                form: { ...state.form, ...action.payload },
            };
        case "RESET_FORM":
            return {
                ...state,
                form: { name: "", age: "", email: "" },
            };
        default:
            return state;
    }
}

const UserSavingAdv = () => {
    const initialState = {
        form: { name: "", age: "", email: "" },
        users: [],
    };
    const [state, dispatch] = useReducer(userReducer, initialState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: "UPDATE_FORM",
            payload: { [name]: value },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.form.name && state.form.age && state.form.email) {
            dispatch({
                type: "ADD_USER",
                payload: { ...state.form, id: Date.now() },
            });
            dispatch({ type: "RESET_FORM" });
        }
    };

    return (
        <div>
            <h1>User Saving Project Advanced</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={state.form.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={state.form.age}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={state.form.email}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Save User</button>
            </form>

            <h2>Saved Users</h2>
            <ul>
                {state.users.map((user) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> (Age: {user.age}, Email:{" "}
                        {user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserSavingAdv;
