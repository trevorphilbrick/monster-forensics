import App from "./App.jsx";
import { createRoot } from "react-dom";
import "./index.css";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

createRoot(document.getElementById("root")).render(
  <ConvexProvider client={convex}>
    <App />
  </ConvexProvider>
);
