import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@/providers";
import "./index.css";
import { Provider } from "react-redux";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import store from "@/redux/store";
import muiTheme from "@/styles/muiTheme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MuiThemeProvider theme={muiTheme}>
      <Provider store={store}>
        <RouterProvider />
      </Provider>
    </MuiThemeProvider>
  </StrictMode>
);
