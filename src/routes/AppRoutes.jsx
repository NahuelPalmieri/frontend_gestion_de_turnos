import { Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

import Home from "../features/home/Home";
import Usuario from "../features/usuario/Usuario";
import Operador from "../features/operador/Operador";
import Pantalla from "../features/pantalla/Pantalla";

function AppRoutes() {

    return (

        <Routes>

            <Route path="/" element={<Home />} />

            <Route
                path="/usuario"
                element={
                    <PrivateRoute>
                        <Usuario />
                    </PrivateRoute>
                }
            />

            <Route
                path="/operador"
                element={
                    <PrivateRoute>
                        <Operador />
                    </PrivateRoute>
                }
            />

            <Route
                path="/pantalla"
                element={
                    <PrivateRoute>
                        <Pantalla />
                    </PrivateRoute>
                }
            />

            <Route
                path="/configuracion"
                element={
                    <PrivateRoute>
                        <h1>Configuración</h1>
                    </PrivateRoute>
                }
            />

            <Route
                path="*"
                element={<h1>404 - Página no encontrada</h1>}
            />

        </Routes>

    );

}

export default AppRoutes;