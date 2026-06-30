import "./Modal.css";

export default function Modal({
    abierto,
    titulo,
    children,
    onClose,
}) {
    if (!abierto) return null;

    return (
        <div className="modal-overlay">

            <div className="modal">

                <div className="modal-header">

                    <h2>{titulo}</h2>

                    <button
                        className="modal-close"
                        onClick={onClose}
                    >
                        ×
                    </button>

                </div>

                <div className="modal-body">

                    {children}

                </div>

            </div>

        </div>
    );
}