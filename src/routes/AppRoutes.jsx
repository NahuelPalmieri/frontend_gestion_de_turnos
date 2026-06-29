import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Operador from "../pages/Operador";
import Usuario from "../pages/Usuario";
import Configuracion from "../pages/Configuracion";
import Pantalla from "../pages/Pantalla";

export default function AppRoutes() {
    return (
        <Routes>

            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/operador"
                element={<Operador />}
            />

            <Route
                path="/usuario"
                element={<Usuario />}
            />

            <Route
                path="/configuracion"
                element={<Configuracion />}
            />

            <Route
                path="/pantalla"
                element={<Pantalla />}
            />

        </Routes>
    );
}