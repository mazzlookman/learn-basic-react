import {useState} from "react";

export default function NoteForm({onAddNote}) {
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddNote(text);
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