import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import theme from "@/styles/muiTheme";
import { render as testingLibraryRender } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { RootState } from "@/redux/store";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import rootReducer from "@/redux/slices";

interface RenderOptions {
  store?: EnhancedStore;
  preloadedState?: Partial<RootState>;
}

function render(
  component: JSX.Element,
  { preloadedState, store }: RenderOptions = {}
) {
  const usedStore =
    store ||
    configureStore({
      reducer: rootReducer,
      preloadedState,
    });
  return testingLibraryRender(
    <Provider store={usedStore}>
      <MemoryRouter>
        <MuiThemeProvider theme={theme}>{component}</MuiThemeProvider>
      </MemoryRouter>
    </Provider>
  );
}

export default render;
