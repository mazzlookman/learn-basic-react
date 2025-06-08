export default function Todo(props) {
    const { text, isCompleted, isDeleted } = props;
    if (isDeleted) {
        return null;    
    } else {
        return (
            <li>{ text } { (isCompleted) && '🔥' }</li>
        )
    }
}