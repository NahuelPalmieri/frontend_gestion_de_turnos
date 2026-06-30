import { useState } from "react";

import Modal from "../../../components/ui/Modal/Modal";
import { login } from "../../../services/authService";

export default function LoginModal({
    abierto,
    onClose,
    onSuccess,
}) {
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState("");

    async function ingresar(e) {
        e.preventDefault();

        const respuesta = await login(usuario, contrasena);

        if (!respuesta.ok) {
            setError(respuesta.mensaje);
            return;
        }

        setError("");
        setUsuario("");
        setContrasena("");

        onSuccess(respuesta.usuario);
    }

    return (
        <Modal
            abierto={abierto}
            titulo="Iniciar sesión"
            onClose={onClose}
        >
            <form onSubmit={ingresar}>

                <input
                    type="text"
                    placeholder="Usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                />

                {error && (
                    <p className="error">
                        {error}
                    </p>
                )}

                <div className="acciones">

                    <button
                        type="button"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>

                    <button type="submit">
                        Entrar
                    </button>

                </div>

            </form>
        </Modal>
    );
}