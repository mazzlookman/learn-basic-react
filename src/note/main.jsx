import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import Container from "../container/Container.jsx";
import NoteApp from "./NoteApp.jsx";

createRoot(document.getElementById('root'))
    .render(
        <StrictMode>
            <Container>
                <NoteApp />
            </Container>
        </StrictMode>
    )