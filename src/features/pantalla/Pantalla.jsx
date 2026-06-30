import { useState } from "react";

import "./pantalla.css";

export default function Pantalla() {

    const [turno] = useState("A102");
    const [nombre] = useState("Juan Pérez");
    const [caja] = useState("Caja 1");

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