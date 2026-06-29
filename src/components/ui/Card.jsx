import "../../styles/card.css";

export default function Card({
    titulo,
    descripcion,
    icon,
    color,
    onClick
}) {
    return (
        <button
            type="button"
            className={`card ${color}`}
            onClick={onClick}
        >
            <div className="card-icon">
                <i className={icon}></i>
            </div>

            <div className="card-body">
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
            </div>

            <div className="card-footer">
                <span>Ingresar</span>
                <i className="fa-solid fa-arrow-right"></i>
            </div>
        </button>
    );
}