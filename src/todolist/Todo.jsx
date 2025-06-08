export default function Todo(props) {
    const { text, isCompleted } = props;
    if (isCompleted) {
        return (
            <li>
                <del>{ text }</del>
            </li>
        )
    } else {
        return (
            <li>{ text }</li>
        )
    }
}