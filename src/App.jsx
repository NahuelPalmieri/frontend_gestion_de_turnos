import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";

import "./styles/globals.css";
import "./styles/header.css";
import "./styles/home.css";
import "./styles/card.css";
import "./styles/button.css";
import "./styles/input.css";
import "./styles/operador.css";
import "./styles/usuario.css";
import "./styles/configuracion.css";
import "./styles/pantalla.css";

function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;