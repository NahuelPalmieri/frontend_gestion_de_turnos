import { useState } from "react";

import Modal from "../../../components/ui/Modal/Modal";
import { validarCodigoEmpresa } from "../../../services/authService";

export default function EmpresaModal({
    abierto,
    onClose,
    onSuccess,
}) {

    const [codigo, setCodigo] = useState("");
    const [error, setError] = useState("");

    async function continuar(e) {
        e.preventDefault();

        const respuesta = await validarCodigoEmpresa(codigo);

        if (!respuesta.ok) {
            setError(respuesta.mensaje);
            return;
        }

        setError("");
        setCodigo("");

        onSuccess();
    }

    return (
        <Modal
            abierto={abierto}
            titulo="Código de empresa"
            onClose={onClose}
        >

            <form onSubmit={continuar}>

                <input
                    type="password"
                    maxLength={6}
                    placeholder="Código de empresa"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
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
                        Continuar
                    </button>

                </div>

            </form>

        </Modal>
    );
}