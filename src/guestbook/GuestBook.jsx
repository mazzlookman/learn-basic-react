import {useRef, useState} from "react";
import GuestBookName from "./GuestBookName.jsx";

export default function GuestBook() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const inputRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        setName("");
        setMessage("");

        inputRef.current.focus();
        alert(`Name: ${name}, Message: ${message}`);
    }

    return (
        <>
            <h1>Guest Book</h1>
            <form>
                <GuestBookName inputRef={inputRef} name={name} setName={setName} />
                <label htmlFor="message">Message</label><br/>
                <textarea name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} cols="30" rows="10" /><br/>
                <button type={"submit"} onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}