import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import Container from "../container/Container.jsx";
import Timer from "./Timer.jsx";

createRoot(document.getElementById('root'))
    .render(
        <StrictMode>
            <Container>
                <Timer />
            </Container>
        </StrictMode>
    )