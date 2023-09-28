import "./App.css";

import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";

import store from "./store";

import Root from "./pages";

import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store.getStore()}>
        <PersistGate loading={null} persistor={store.getPersistor()}>
          <Root />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
