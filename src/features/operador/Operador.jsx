import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./operador.css";
import Layout from "../../components/layout/Layout";

import { llamarSiguiente, obtenerColas } from "../../services/operadorService";

import { useAuth } from "../../context/AuthContext";
import { useEmpresa } from "../../context/EmpresaContext";

export default function Operador() {

    const navigate = useNavigate();

    const { logout } = useAuth();
    const { limpiarEmpresa } = useEmpresa();

    const [colaA, setColaA] = useState(0);
    const [colaB, setColaB] = useState(0);
    const [colaC, setColaC] = useState(0);

    const [turnoActual, setTurnoActual] = useState("---");

    const numeroCaja = 1;

    async function cargarColas() {

        try {

            const respuesta = await obtenerColas();

            setColaA(respuesta.A);
            setColaB(respuesta.B);
            setColaC(respuesta.C);

        } catch (error) {

            console.error(error);

        }

    }

    useEffect(() => {

        cargarColas();

    }, []);

    async function llamar(tipo) {

        try {

            const respuesta = await llamarSiguiente(tipo);

            if (!respuesta.ok) {

                alert(respuesta.mensaje);
                return;

            }

            setTurnoActual(respuesta.turno.numero);

            setColaA(respuesta.pendientes.A);
            setColaB(respuesta.pendientes.B);
            setColaC(respuesta.pendientes.C);

        } catch (error) {

            console.error(error);

            alert("Error al conectar con el servidor.");

        }

    }

    function cerrarSesion() {

        logout();
        limpiarEmpresa();

        navigate("/");

    }

    return (

        <Layout title="Panel de Atención">

            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "20px"
                }}
            >

                <button onClick={cerrarSesion}>
                    Cerrar sesión
                </button>

            </div>

            <div className="caja">

                <span>Operador en Caja</span>

                <h2>{numeroCaja}</h2>

            </div>

            <div className="botones">

                <button
                    className="btnA"
                    disabled={colaA === 0}
                    style={{
                        opacity: colaA === 0 ? 0.5 : 1
                    }}
                    onClick={() => llamar("A")}
                >
                    Llamar A ({colaA})
                </button>

                <button
                    className="btnB"
                    disabled={colaB === 0}
                    style={{
                        opacity: colaB === 0 ? 0.5 : 1
                    }}
                    onClick={() => llamar("B")}
                >
                    Llamar B ({colaB})
                </button>

                <button
                    className="btnC"
                    disabled={colaC === 0}
                    style={{
                        opacity: colaC === 0 ? 0.5 : 1
                    }}
                    onClick={() => llamar("C")}
                >
                    Llamar C ({colaC})
                </button>

            </div>

            <div className="resultado">

                <h3>Turno llamado</h3>

                <p>{turnoActual}</p>

            </div>

        </Layout>

    );

}