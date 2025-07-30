import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import Container from "../container/Container.jsx";
import ProductList from "./ProductList.jsx";

createRoot(document.getElementById('root'))
    .render(
        <StrictMode>
            <Container>
                <ProductList />
            </Container>
        </StrictMode>
    )