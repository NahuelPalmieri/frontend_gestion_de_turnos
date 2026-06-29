import { useState } from "react";

import MainLayout from "../components/layout/MainLayout";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

import "../styles/configuracion.css";

export default function Configuracion() {

    const [darkMode, setDarkMode] = useState(false);

    return (
        <MainLayout>

            <section className="hero">

                <div>

                    <p className="eyebrow">
                        Panel de administración
                    </p>

                    <h1>Configuración general</h1>

                    <p>
                        Administra la información de la empresa, usuarios,
                        idioma, región y apariencia del sistema.
                    </p>

                </div>

                <Button>
                    Guardar cambios
                </Button>

            </section>

            <section className="config-grid">

                <article className="panel">

                    <div className="panel-header">
                        <h2>Información de la empresa</h2>
                        <span className="badge">Empresa</span>
                    </div>

                    <div className="form-grid">

                        <Input
                            placeholder="Nombre de la empresa"
                            defaultValue="Totem Gestión de Turnos NP"
                        />

                        <Input
                            placeholder="Razón social"
                            defaultValue="Servicios Integrales S.A."
                        />

                        <Input
                            type="email"
                            placeholder="Correo"
                            defaultValue="contacto@totemturnos.com"
                        />

                        <textarea
                            rows="4"
                            defaultValue="Av. Principal 123, Oficina 4"
                        />

                    </div>

                </article>

                <article className="panel">

                    <div className="panel-header">
                        <h2>Administrar usuarios</h2>
                        <span className="badge">Accesos</span>
                    </div>

                    <div className="user-item">
                        <strong>Usuario.01</strong>
                        <span>Administrador</span>
                    </div>

                    <div className="user-item">
                        <strong>Usuario.02</strong>
                        <span>Operador</span>
                    </div>

                    <div className="form-grid">

                        <Input placeholder="Nuevo usuario" />

                        <Input
                            type="password"
                            placeholder="Contraseña"
                        />

                    </div>

                </article>

            </section>

            <section className="config-grid">

                <article className="panel">

                    <div className="panel-header">
                        <h2>Idioma y región</h2>
                    </div>

                    <select>
                        <option>Español</option>
                        <option>English</option>
                        <option>Português</option>
                    </select>

                    <select>
                        <option>Argentina</option>
                        <option>Chile</option>
                        <option>Perú</option>
                        <option>México</option>
                    </select>

                </article>

                <article className="panel">

                    <div className="panel-header">
                        <h2>Apariencia</h2>
                    </div>

                    <label className="switch-row">

                        <span>Modo oscuro</span>

                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                        />

                    </label>

                </article>

            </section>

            <section className="panel">

                <div className="panel-header">

                    <h2>Opciones adicionales</h2>

                </div>

                <label>
                    <input type="checkbox" defaultChecked />
                    Mostrar notificaciones
                </label>

                <label>
                    <input type="checkbox" defaultChecked />
                    Audio de atención
                </label>

                <label>
                    <input type="checkbox" />
                    Guardar historial
                </label>

            </section>

        </MainLayout>
    );
}