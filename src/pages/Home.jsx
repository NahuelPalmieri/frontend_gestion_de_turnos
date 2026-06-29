import { useState } from "react";

import MainLayout from "../components/layout/MainLayout";
import Card from "../components/ui/Card";
import Modal from "../components/ui/Modal";
import Button from "../components/ui/Button";

import "../styles/home.css";

export default function Home() {

    const [modal, setModal] = useState(null);

    const abrirModal = (tipo) => setModal(tipo);

    const cerrarModal = () => setModal(null);

    return (
        <MainLayout>

            <h1>Panel Principal</h1>

            <section className="grid">

                <Card
                    titulo="Pedido de Turnos"
                    descripcion="Gestionar, programar y cancelar turnos."
                    icon="fa-solid fa-calendar-plus"
                    color="azul"
                    onClick={() => abrirModal("empresa")}
                />

                <Card
                    titulo="Visualización"
                    descripcion="Consultar y llamar pacientes."
                    icon="fa-solid fa-tv"
                    color="verde"
                    onClick={() => abrirModal("empresa")}
                />

                <Card
                    titulo="Empleados"
                    descripcion="Administrar personal y horarios."
                    icon="fa-solid fa-users"
                    color="naranja"
                    onClick={() => abrirModal("login")}
                />

                <Card
                    titulo="Configuración"
                    descripcion="Parámetros generales del sistema."
                    icon="fa-solid fa-gears"
                    color="violeta"
                    onClick={() => abrirModal("login")}
                />

            </section>

            <Modal
                abierto={modal === "login"}
                titulo="Iniciar sesión"
                onClose={cerrarModal}
            >
                <form>

                    <input
                        type="text"
                        placeholder="Usuario"
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                    />

                    <p className="error"></p>

                    <div className="acciones">

                        <Button
                            variant="secondary"
                            onClick={cerrarModal}
                        >
                            Cancelar
                        </Button>

                        <Button
                            type="submit"
                        >
                            Entrar
                        </Button>

                    </div>

                </form>
            </Modal>

            <Modal
                abierto={modal === "empresa"}
                titulo="Código de empresa"
                onClose={cerrarModal}
            >
                <form>

                    <input
                        type="text"
                        placeholder="Código de empresa"
                    />

                    <p className="error"></p>

                    <div className="acciones">

                        <Button
                            variant="secondary"
                            onClick={cerrarModal}
                        >
                            Cancelar
                        </Button>

                        <Button
                            type="submit"
                        >
                            Continuar
                        </Button>

                    </div>

                </form>
            </Modal>

        </MainLayout>
    );
}