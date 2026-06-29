export default function Modal({
    abierto,
    titulo,
    children,
    onClose
}) {

    if (!abierto) return null;

    return (
        <>

            <div
                className="overlay"
                onClick={onClose}
            />

            <div className="modal">

                <div className="modal-header">

                    <h2>{titulo}</h2>

                    <button
                        type="button"
                        onClick={onClose}
                    >
                        ×
                    </button>

                </div>

                {children}

            </div>

        </>

    );

}