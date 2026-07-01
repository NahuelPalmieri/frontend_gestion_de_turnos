import "./Layout.css";

export default function Layout({ title, children }) {
    return (
        <div className="layout">

            <header className="layout-header">

                <h1>{title}</h1>

            </header>

            <main className="layout-content">

                {children}

            </main>

        </div>
    );
}