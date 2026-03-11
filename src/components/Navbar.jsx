// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import { useAuthValue } from "../context/AuthContext"; // ajuste o caminho se for diferente
import styles from "./Navbar.module.css"; // confira o case e o caminho
import { useAuthentication } from "../hooks/useAuthentication";

export default function Navbar() {
  const { user } = useAuthValue(); // agora o user existe neste componente
  const { logout } = useAuthentication();

  return (
    <nav className={styles.navbar} aria-label="Navegação principal">
      {/* Brand */}
      <Link to="/" className={styles.brand}>
          TRANSIRE
          <strong>DAY</strong>       
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

        {!user && (
          <>
            <li>
              <NavLink
                to="/login" // padronize a rota em minúsculas
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
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create" // padronize a rota em minúsculas
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Novo post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard" // padronize a rota em minúsculas
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>
              Sair
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}