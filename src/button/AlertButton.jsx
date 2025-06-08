export default function AlertButton({ text, message }) {
    function handleClick(e) {
        console.log('DOM Object', e);
        alert(message);
    }

    return (
        <button onClick={handleClick}>{text}</button>
    )
}