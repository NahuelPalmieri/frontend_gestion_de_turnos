import { useState } from "react";

import MainLayout from "../components/layout/MainLayout";

import "../styles/pantalla.css";

export default function Pantalla() {

    // Luego estos datos vendrán desde el backend
    const [turno] = useState("A001");
    const [nombre] = useState("Juan Pérez");
    const [caja] = useState("Caja 3");

    return (
        <MainLayout>

            <section className="pantalla">

                <h1>{turno}</h1>

                <h2>{nombre}</h2>

                <h3>{caja}</h3>

            </section>

        </MainLayout>
    );
}