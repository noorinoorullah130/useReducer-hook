import React, { useReducer, useState } from "react";

function userReducer(state, action) {
    switch (action.type) {
        case "ADD_USER":
            return [...state, action.payload];
        default:
            return state;
    }
}

const UserSavingProject = () => {
    const [form, setForm] = useState({ name: "", age: "", email: "" });

    const [users, dispatch] = useReducer(userReducer, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.name && form.age && form.email) {
            dispatch({
                type: "ADD_USER",
                payload: { ...form, id: Date.now() },
            });
            setForm({ name: "", age: "", email: "" });
        }
    };

    return (
        <div>
            <h1>User Saving Project</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={form.age}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Save User</button>
            </form>

            <h2>Saved Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> (Age: {user.age} - Email:{" "}
                        {user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserSavingProject;
