import { useState } from "react";

import "./operador.css";

export default function Operador() {

    const [colaA, setColaA] = useState(8);
    const [colaB, setColaB] = useState(5);
    const [colaC, setColaC] = useState(3);

    const [turnoActual, setTurnoActual] = useState("---");

    const numeroCaja = 1;

    function llamar(tipo) {

        switch (tipo) {

            case "A":

                if (colaA === 0) return;

                setTurnoActual(`A${100 + colaA}`);
                setColaA(colaA - 1);

                break;

            case "B":

                if (colaB === 0) return;

                setTurnoActual(`B${100 + colaB}`);
                setColaB(colaB - 1);

                break;

            case "C":

                if (colaC === 0) return;

                setTurnoActual(`C${100 + colaC}`);
                setColaC(colaC - 1);

                break;

            default:
                break;
        }

    }

    return (

        <div className="operador">

            <h1>Panel de Atención</h1>

            <div className="caja">

                <span>Operador en Caja</span>

                <h2>{numeroCaja}</h2>

            </div>

            <div className="botones">

                <button
                    className="btnA"
                    onClick={() => llamar("A")}
                >
                    Llamar A ({colaA})
                </button>

                <button
                    className="btnB"
                    onClick={() => llamar("B")}
                >
                    Llamar B ({colaB})
                </button>

                <button
                    className="btnC"
                    onClick={() => llamar("C")}
                >
                    Llamar C ({colaC})
                </button>

            </div>

            <div className="resultado">

                <h3>Turno llamado</h3>

                <p>{turnoActual}</p>

            </div>

        </div>

    );

}