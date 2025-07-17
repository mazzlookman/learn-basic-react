import {useState} from "react";

export default function ContactForm() {
    const [contact, setContact] = useState({
        name: "",
        message: "",
    });

    function handleNameChange(e) {
        setContact({...contact, name: e.target.value})
    }

    function handleMessageChange(e) {
        setContact({...contact, message: e.target.value})
    }

    return (
        <div>
            <h1>Contact Form</h1>
            <form>
                <input type="text" name="name" onChange={handleNameChange} placeholder={"Name"} />
                <br/>
                <input type="text" name="message" onChange={handleMessageChange} placeholder={"Message"} />
            </form>

            <h2>Contact Detail:</h2>
            <p>Name: {contact.name}</p>
            <p>Message: {contact.message}</p>
        </div>
    )
}