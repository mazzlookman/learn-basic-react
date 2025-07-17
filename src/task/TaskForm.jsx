import {useState} from "react";
import {useImmer} from "use-immer";

export default function TaskForm() {
    const [item, setItem] = useState("");
    const [items, setItems] = useImmer([]);

    function handleChange(e) {
        setItem(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setItems((items) => {
            items.push(item);
        });

        setItem("");
    }

    return (
        <div>
            <h1>Create task</h1>
            <form action="">
                <input type="text" placeholder={"Task name..."} onChange={handleChange} value={item} />
                <br/>
                <button onClick={handleSubmit}>Add task</button>
            </form>
            <h2>List tasks</h2>
            <ul>
                {items.map((item, i) => {
                    return <li key={i}>{item}</li>;
                })}
            </ul>
        </div>
    )
}