import "../../styles/header.css";

export default function Header() {
    return (
        <header className="header">

            <div className="logo">
                <i className="fa-solid fa-calendar-check"></i>
                <span>Gestión de Turnos NP</span>
            </div>

            <nav className="nav">

                <a href="#">Inicio</a>

                <a href="#">Ayuda</a>

                <a href="#">Contacto</a>

            </nav>

        </header>
    );
}