import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EditorContainer } from "./components/editor-container/EditorContainer.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EditorContainer />
  </StrictMode>
);
