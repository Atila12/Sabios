// Navbar.jsx (ajustado)
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar} aria-label="Navegação principal">
            {/* Brand */}
            <Link to="/" className={styles.brand}>
                TI<span>Blog</span>
            </Link>

            <ul className={styles.links_list}>
                <li>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/entrar"
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        Entrar
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/register"
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        Cadastrar
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}