import Modal from "../../../components/ui/Modal/Modal";

export default function proximamenteModal({ abierto, onClose }) {

    return (
        <Modal
            abierto={abierto}
            titulo="Configuración"
            onClose={onClose}
        >

            <div style={{ textAlign: "center", padding: "20px" }}>

                <h2>🚧 Próximamente</h2>

                <p>
                    Esta sección estará disponible en una próxima versión.
                </p>

                <button onClick={onClose}>
                    Cerrar
                </button>

            </div>

        </Modal>
    );

}