import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import Container from "../container/Container.jsx";
import GuestBook from "./GuestBook.jsx";

createRoot(document.getElementById('root'))
    .render(
        <StrictMode>
            <Container>
                <GuestBook />
            </Container>
        </StrictMode>
    )