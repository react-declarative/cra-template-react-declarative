import fetchApi from "../helpers/fetchApi";

export const App = () => {

    const handleClick = () => {
        fetchApi('/api/v1/todos').then((data) => {
            console.log(data)
            debugger
        });
    };

    return (
        <button onClick={handleClick}>
            button
        </button>
    );
};

export default App;
