export default function SmashButton({ text, onSmash }) {
    return (
        <button onClick={onSmash}>{text}</button>
    )
}