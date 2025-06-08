import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "../container/Container";
import Todolist from "../todolist/Todolist";
import AlertButton from "../button/AlertButton";
import SmashButton from "../button/SmashButton";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld />
                <Todolist />
                
                {/* Button */}
                <AlertButton text='Alert Button' message='Alert Muncul Tiba-tiba' />
                <SmashButton text={'Smash Button'} onSmash={() => alert('Ini Smash Button')} />
            </Container>
        </StrictMode>
    )