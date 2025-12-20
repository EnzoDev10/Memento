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
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledMain>
      <App />
    </StyledMain>
  </StrictMode>,
);
