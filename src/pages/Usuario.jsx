import { useState } from "react";

import MainLayout from "../components/layout/MainLayout";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

import "../styles/usuario.css";

export default function Usuario() {

    const [dni, setDni] = useState("");
    const [pantalla, setPantalla] = useState("dni");

    const agregarNumero = (numero) => {
        if (dni.length < 8) {
            setDni(dni + numero);
        }
    };

    const borrarNumero = () => {
        setDni(dni.slice(0, -1));
    };

    const solicitarTurno = () => {
        if (dni.length > 0) {
            setPantalla("tramites");
        }
    };

    const seleccionarTramite = (tipo) => {
        setPantalla("turno");
    };

    return (
        <MainLayout>

            {pantalla === "dni" && (

                <div className="usuario">

                    <h1>Ingrese su DNI</h1>

                    <Input
                        value={dni}
                        readOnly
                        placeholder="DNI"
                    />

                    <div className="teclado">

                        {[1,2,3,4,5,6,7,8,9].map(numero => (
                            <Button
                                key={numero}
                                onClick={() => agregarNumero(numero)}
                            >
                                {numero}
                            </Button>
                        ))}

                        <Button
                            variant="secondary"
                            onClick={borrarNumero}
                        >
                            ←
                        </Button>

                        <Button
                            onClick={() => agregarNumero(0)}
                        >
                            0
                        </Button>

                        <Button
                            variant="success"
                            onClick={solicitarTurno}
                        >
                            OK
                        </Button>

                    </div>

                </div>

            )}

            {pantalla === "tramites" && (

                <div className="usuario">

                    <h1>Seleccione el trámite</h1>

                    <div className="tramites">

                        <Button onClick={() => seleccionarTramite("A")}>
                            Trámite A
                        </Button>

                        <Button onClick={() => seleccionarTramite("B")}>
                            Trámite B
                        </Button>

                        <Button onClick={() => seleccionarTramite("C")}>
                            Trámite C
                        </Button>

                    </div>

                </div>

            )}

            {pantalla === "turno" && (

                <div className="usuario">

                    <h1>Su turno fue generado</h1>

                    <h2>A001</h2>

                    <p>Tiempo estimado: 15 minutos</p>

                    <hr />

                    <p>Gracias por su visita</p>

                </div>

            )}

        </MainLayout>
    );
}