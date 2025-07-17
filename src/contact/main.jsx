import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import Container from "../container/Container.jsx";
import ContactForm from "./ContactForm.jsx";

createRoot(document.getElementById('root'))
    .render(
        <StrictMode>
            <Container>
                <ContactForm />
            </Container>
        </StrictMode>
    )