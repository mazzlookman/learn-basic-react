import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "../container/Container";
import Todolist from "../todolist/Todolist";
import AlertButton from "../button/AlertButton";
import SmashButton from "../button/SmashButton";
import Toolbar from "../button/ToolBar";
import SearchForm from "../form/SearchForm";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld />
                <Todolist />
                
                {/* Button */}
                <AlertButton text='Alert Button' message='Alert Muncul Tiba-tiba' />
                <SmashButton text={'Smash Button'} onSmash={() => alert('Ini Smash Button')} />
                
                {/* e Object */}
                <Toolbar onClick={(e) => {
                    e.stopPropagation();
                    console.log('DOM Object', e);
                    alert('Toolbar Clicked');
                }} />
                <SearchForm />
            </Container>
        </StrictMode>
    )