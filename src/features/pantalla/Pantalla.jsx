import { useEffect, useState } from "react";

import "./pantalla.css";
import { obtenerUltimoTurno } from "../../services/pantallaService";

export default function Pantalla() {

    const [turno, setTurno] = useState("---");
    const [nombre, setNombre] = useState("Sin turno");
    const [caja, setCaja] = useState("Caja 1");

    useEffect(() => {

        async function cargarTurno() {

            try {

                const respuesta = await obtenerUltimoTurno();

                if (respuesta.ok && respuesta.turno) {

                    setTurno(respuesta.turno.numero);
                    setNombre(`Trámite ${respuesta.turno.tramite}`);
                    setCaja("Caja 1");

                }

            } catch (error) {

                console.error(error);

            }

        }

        cargarTurno();

        const intervalo = setInterval(cargarTurno, 2000);

        return () => clearInterval(intervalo);

    }, []);

    return (

        <div className="pantalla">

            <div className="contenedor">

                <h1 className="turno">
                    {turno}
                </h1>

                <h2 className="nombre">
                    {nombre}
                </h2>

                <h3 className="caja">
                    {caja}
                </h3>

            </div>

        </div>

    );

}