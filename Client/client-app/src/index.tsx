import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {themeGlobal} from "./ThemeGlobal";
import {CssBaseline, StyledEngineProvider, ThemeProvider} from "@mui/material";
import {store} from "./redux/Store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themeGlobal}>
                <CssBaseline/>
                <Provider store={store}>
                    <App/>
                </Provider>
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
