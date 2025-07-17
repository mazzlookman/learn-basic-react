import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import Container from "../container/Container.jsx";
import TaskForm from "./TaskForm.jsx";

createRoot(document.getElementById('root'))
    .render(
        <StrictMode>
            <Container>
                <TaskForm />
            </Container>
        </StrictMode>
    )