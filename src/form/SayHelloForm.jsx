export default function SayHelloForm() {
    function handleSubmit(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const result = document.getElementById('result_hello');
        result.innerText = `Hello ${name}`;
    }

    return (
        <div>
            <form action="" method="post">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <button type="submit" onClick={handleSubmit}>Say Hello</button>
            </form>
            <h1 id="result_hello">Hello World</h1>
        </div>
    )
}
