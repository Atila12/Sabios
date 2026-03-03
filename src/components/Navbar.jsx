import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function Navbar() {
    return (
        <nav className={styles.navbar} aria-label="Navegação principal">
            {/* Brand como Link (não precisa de estado ativo) */}
            <Link to="/" className={styles.brand}>
                TI<span>Blog</span>
            </Link>

            <ul className={styles.links_list}>
                <li>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => cx(styles.link, isActive && styles.active)}
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/About"  // use minúsculas se sua rota estiver definida assim
                        className={({ isActive }) => cx(styles.link, isActive && styles.active)}
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}