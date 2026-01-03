// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import "../index.css";

export default function Navbar() {
    const linkClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (
        <header className="navbar">
            <nav className="container">
                <NavLink to="/" className="navbar-brand">
                    TODO APP
                </NavLink>

                <ul className="navbar-nav">
                    <li>
                        <NavLink to="/" className={linkClass} end>
                            Todos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/create" className={linkClass}>
                            Create
                        </NavLink>
                    </li>
                </ul>

                <div className="navbar-actions" />
            </nav>
        </header>
    );
}