import {useContext, useState} from "react";
import {NotesDispatchContext} from "./NoteContext.jsx";

export default function NoteForm() {
    const [text, setText] = useState('');
    const dispatch = useContext(NotesDispatchContext)

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({
            type: "ADD_NOTE",
            text: text,
        });
        setText('');
    }

    return (
        <div>
            <form action="">
                <input type="text" placeholder={"Enter a note..."} onChange={handleChange} value={text} />
                <br/>
                <button onClick={handleSubmit}>Add</button>
            </form>
        </div>
    )
}