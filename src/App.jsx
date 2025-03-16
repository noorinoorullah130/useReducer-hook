import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import UserSaving from "./components/UserSaving";
import UserSavingAdv from "./components/UserSavingAdv";

function App() {
    return (
        <div>
            <h1>useReducer</h1>
            <Counter />
            <TodoList />
            <UserSaving />
            <UserSavingAdv />
        </div>
    );
}

export default App;
