import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import Container from "../container/Container.jsx";
import ProfileApp from "./ProfileApp.jsx";

createRoot(document.getElementById('root'))
    .render(
        <StrictMode>
            <Container>
                <ProfileApp />
            </Container>
        </StrictMode>
    )