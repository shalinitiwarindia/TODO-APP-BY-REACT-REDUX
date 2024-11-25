import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "./Redux/store";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </StrictMode>
);
