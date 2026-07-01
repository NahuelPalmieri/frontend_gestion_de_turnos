import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { EmpresaProvider } from "./context/EmpresaContext";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { AuthProvider } from "./context/AuthContext";

import App from "./App";

import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>

        <BrowserRouter>

            <AuthProvider>

                <EmpresaProvider>

                    <App />

                </EmpresaProvider>

            </AuthProvider>

        </BrowserRouter>

    </React.StrictMode>

);