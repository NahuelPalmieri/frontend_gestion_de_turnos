import { useEffect, useState } from "react";

import "./operador.css";
import Layout from "../../components/layout/Layout";

import { llamarSiguiente } from "../../services/operadorService";
import { obtenerColas } from "../../services/colasService";

export default function Operador() {

    const [colaA, setColaA] = useState(0);
    const [colaB, setColaB] = useState(0);
    const [colaC, setColaC] = useState(0);

    const [turnoActual, setTurnoActual] = useState("---");

    const numeroCaja = 1;

    async function actualizarColas() {

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

        actualizarColas();

        const intervalo = setInterval(actualizarColas, 2000);

        return () => clearInterval(intervalo);

    }, []);

    async function llamar(tipo) {

        try {

            const respuesta = await llamarSiguiente(tipo);

            if (!respuesta.ok) {

                alert(respuesta.mensaje);
                return;

            }

            setTurnoActual(respuesta.turno.numero);

            actualizarColas();

        } catch (error) {

            console.error(error);
            alert("Error al conectar con el servidor.");

        }

    }

    return (

        <Layout title="Panel de Atención">

            <div className="panel-operador">

                <div className="lado-izquierdo">

                    <div className="caja">

                        <span>Operador en Caja</span>

                        <h2>{numeroCaja}</h2>

                    </div>

                    <div className="botones">

                        <button
                            className="btnA"
                            onClick={() => llamar("A")}
                            disabled={colaA === 0}
                        >
                            Llamar A ({colaA})
                        </button>

                        <button
                            className="btnB"
                            onClick={() => llamar("B")}
                            disabled={colaB === 0}
                        >
                            Llamar B ({colaB})
                        </button>

                        <button
                            className="btnC"
                            onClick={() => llamar("C")}
                            disabled={colaC === 0}
                        >
                            Llamar C ({colaC})
                        </button>

                    </div>

                </div>

                <div className="resultado">

                    <h3>Turno llamado</h3>

                    <p>{turnoActual}</p>

                </div>

            </div>

        </Layout>

    );

}