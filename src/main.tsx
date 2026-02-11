import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/index.css";
import App from "@/App.tsx";
import styled from "styled-components";

const StyledMain = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

let root = (window as any).__root;

if (!root) {
    root = createRoot(document.getElementById("root")!);
    (window as any).__root = root;
}

root.render(
    <StrictMode>
        <StyledMain>
            <App />
        </StyledMain>
    </StrictMode>,
);

if ((import.meta as any).hot) {
    (import.meta as any).hot.accept();
}
