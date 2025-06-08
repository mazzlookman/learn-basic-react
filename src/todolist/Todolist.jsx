import Todo from "./Todo";

export default function Todolist() {
    const dataTodo = [
        { id: 1, text: 'Learn PHP', isCompleted: true, isDeleted: false },
        { id: 2, text: 'Learn Java', isCompleted: true, isDeleted: false },
        { id: 3, text: 'Learn Go', isCompleted: false, isDeleted: false },
        { id: 4, text: 'Learn MySQL', isCompleted: false, isDeleted: false }
    ];

    const todos = dataTodo.map((todo) => {
        return <Todo key={todo.id} {...todo} />
    });

    return (
        <ul>
            {todos}
        </ul>
    )
}