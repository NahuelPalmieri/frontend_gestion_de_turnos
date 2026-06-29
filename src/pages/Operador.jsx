import { useState } from "react";

import MainLayout from "../components/layout/MainLayout";
import Button from "../components/ui/Button";

import "../styles/operador.css";

export default function Operador() {

    const [numeroCaja] = useState(1);

    const [colaA] = useState(0);
    const [colaB] = useState(0);
    const [colaC] = useState(0);

    const [turnoActual, setTurnoActual] = useState("---");

    const llamar = (tipo) => {
        // Se conectará con el backend más adelante
        setTurnoActual(`${tipo}-000`);
    };

    return (
        <MainLayout>

            <div className="panel">

                <h1>Panel de Atención</h1>

                <div className="caja">

                    <span>Operador en</span>

                    <h2>
                        Operador en Caja <span>{numeroCaja}</span>
                    </h2>

                </div>

                <div className="botones">

                    <Button
                        variant="primary"
                        onClick={() => llamar("A")}
                    >
                        Llamar Turno A ({colaA})
                    </Button>

                    <Button
                        variant="success"
                        onClick={() => llamar("B")}
                    >
                        Llamar Turno B ({colaB})
                    </Button>

                    <Button
                        variant="danger"
                        onClick={() => llamar("C")}
                    >
                        Llamar Turno C ({colaC})
                    </Button>

                </div>

                <div className="resultado">

                    <h2>Turno llamado</h2>

                    <p>{turnoActual}</p>

                </div>

            </div>

        </MainLayout>
    );
}