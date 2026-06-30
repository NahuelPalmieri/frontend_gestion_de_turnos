import { useState } from "react";

import "./usuario.css";

export default function Usuario() {

    const [pantalla, setPantalla] = useState("dni");
    const [dni, setDni] = useState("");
    const [tramite, setTramite] = useState("");
    const [turno, setTurno] = useState("");

    function agregarNumero(numero) {
        if (dni.length >= 8) return;

        setDni((anterior) => anterior + numero);
    }

    function borrarNumero() {
        setDni((anterior) => anterior.slice(0, -1));
    }

    function solicitarTurno() {

        if (dni.length < 7) {
            alert("Ingrese un DNI válido.");
            return;
        }

        setPantalla("tramite");

    }

    function seleccionarTramite(tipo) {

        setTramite(tipo);

        const numero = Math.floor(Math.random() * 900) + 100;

        setTurno(`${tipo}${numero}`);

        setPantalla("turno");

    }

    function volverInicio() {

        setPantalla("dni");
        setDni("");
        setTramite("");
        setTurno("");

    }

    if (pantalla === "tramite") {

        return (

            <div className="usuario">

                <h1>Seleccione el trámite</h1>

                <div className="tramites">

                    <button onClick={() => seleccionarTramite("A")}>
                        Trámite A
                    </button>

                    <button onClick={() => seleccionarTramite("B")}>
                        Trámite B
                    </button>

                    <button onClick={() => seleccionarTramite("C")}>
                        Trámite C
                    </button>

                </div>

            </div>

        );

    }

    if (pantalla === "turno") {

        return (

            <div className="usuario">

                <h1>Su turno es</h1>

                <h2 className="turno-generado">
                    {turno}
                </h2>

                <p>
                    Trámite {tramite}
                </p>

                <button
                    className="nuevo-turno"
                    onClick={volverInicio}
                >
                    Solicitar otro turno
                </button>

            </div>

        );

    }

    return (

        <div className="usuario">

            <h1>Pedido de Turnos</h1>

            <div className="dni-container">

                <input
                    type="text"
                    value={dni}
                    placeholder="Ingrese su DNI"
                    readOnly
                />

            </div>

            <div className="teclado">

                {[1,2,3,4,5,6,7,8,9].map(numero => (

                    <button
                        key={numero}
                        onClick={() => agregarNumero(numero)}
                    >
                        {numero}
                    </button>

                ))}

                <button onClick={borrarNumero}>
                    ←
                </button>

                <button onClick={() => agregarNumero(0)}>
                    0
                </button>

                <button
                    className="ok"
                    onClick={solicitarTurno}
                >
                    OK
                </button>

            </div>

        </div>

    );

}