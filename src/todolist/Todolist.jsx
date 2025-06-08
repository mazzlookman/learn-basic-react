import Todo from "./Todo";

export default function Todolist() {
    return (
        <div>
            <ul>
                <Todo text='Learn PHP' isCompleted={true} />
                <Todo text='Learn Java' isCompleted={true} isDeleted={true} />
                <Todo text='Learn Go' isCompleted={false} isDeleted={true} />
                <Todo text='Learn MySQL' isCompleted={false} />
            </ul>
        </div>
    )
}