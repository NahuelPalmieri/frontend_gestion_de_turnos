import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";

import HomeCard from "./components/HomeCard";
import LoginModal from "./components/LoginModal";
import EmpresaModal from "./components/EmpresaModal";
import proximamenteModal from "./components/proximamenteModal";

export default function Home() {

    const { login } = useAuth();
    const navigate = useNavigate();

    const [mostrarLogin, setMostrarLogin] = useState(false);
    const [mostrarEmpresa, setMostrarEmpresa] = useState(false);
    const [mostrarProximamente, setMostrarProximamente] = useState(false);

    const [destino, setDestino] = useState("");

    const opciones = [
        {
            to: "/usuario",
            color: "azul",
            icon: "fa-solid fa-calendar-plus",
            title: "Pedido de Turnos",
            description: "Gestionar, programar y cancelar turnos."
        },
        {
            to: "/pantalla",
            color: "verde",
            icon: "fa-solid fa-tv",
            title: "Visualización",
            description: "Consultar y llamar pacientes."
        },
        {
            to: "/operador",
            color: "naranja",
            icon: "fa-solid fa-users",
            title: "Empleados",
            description: "Administrar personal y horarios."
        },
        {
            to: "/configuracion",
            color: "violeta",
            icon: "fa-solid fa-gears",
            title: "Configuración",
            description: "Parámetros generales del sistema."
        }
    ];

    function abrirLogin(ruta) {

         if (ruta === "/configuracion") {

            setMostrarProximamente(true);
            return;

        }

        setDestino(ruta);
        setMostrarLogin(true);

    }

    function loginCorrecto(usuario) {
        login(usuario);

        setMostrarLogin(false);
        setMostrarEmpresa(true);
    }

    function empresaCorrecta() {
        setMostrarEmpresa(false);
        navigate(destino);
    }

    return (
        <div className="home">

            <header className="header">

                <div className="logo">
                    <i className="fa-solid fa-calendar-check"></i>
                    <span>Gestión de Turnos NP</span>
                </div>

                <nav>
                    <a href="#">Inicio</a>
                    <a href="#">Ayuda</a>
                    <a href="#">Contacto</a>
                </nav>

            </header>

            <main className="contenido">

                <h1>Panel Principal</h1>

                <div className="cards">

                    {opciones.map((opcion) => (

                        <div
                            key={opcion.title}
                            onClick={() => abrirLogin(opcion.to)}
                            style={{ cursor: "pointer" }}
                        >
                            <HomeCard {...opcion} />
                        </div>

                    ))}

                </div>

            </main>

            <LoginModal
                abierto={mostrarLogin}
                onClose={() => setMostrarLogin(false)}
                onSuccess={loginCorrecto}
            />

            <EmpresaModal
                abierto={mostrarEmpresa}
                onClose={() => setMostrarEmpresa(false)}
                onSuccess={empresaCorrecta}
            />

            <proximamenteModal
                abierto={mostrarProximamente}
                onClose={() => setMostrarProximamente(false)}
            />

        </div>
    );
}