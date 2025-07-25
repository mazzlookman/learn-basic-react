import {useImmer, useImmerReducer} from "use-immer";
import NoteForm from "./NoteForm.jsx";
import NoteList from "./NoteList.jsx";
import {NotesContext, NotesDispatchContext} from "./NoteContext.jsx";

let id = 0;
const initialNotes = [
    {id: id++, text: 'Learn HTML', done: false},
    {id: id++, text: 'Learn CSS', done: false},
    {id: id++, text: 'Learn Java', done: false},
    {id: id++, text: 'Learn Go', done: false},
];

function notesReducer(notes = initialNotes, action) {
    if (action.type === 'ADD_NOTE') {
        notes.push({
            id: id++,
            text: action.text,
            done: false
        });
    } else if (action.type === 'CHANGE_NOTE') {
        const idx = notes.findIndex((note) => note.id === action.id);
        notes[idx].text = action.text;
        notes[idx].done = action.done;

    } else if (action.type === 'DELETE_NOTE') {
        const idx = notes.findIndex((note) => note.id === action.id);
        notes.splice(idx, 1);
    }
}

export default function NoteApp() {
    // const [notes, setNotes] = useImmer(initialNotes);
    const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

    return (
        <div>
            <NotesContext.Provider value={notes}>
                <NotesDispatchContext.Provider value={dispatch}>
                    <h1>Note App</h1>
                    <NoteForm />
                    <NoteList />
                </NotesDispatchContext.Provider>
            </NotesContext.Provider>
        </div>
    )
}