import styles from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className={styles.About}>
            <h2>Sobre o TI <span>BLOG</span></h2>
            <p>
                Este Projeto consiste em um blog feito com REACT no front-end e Firebase no back-end, foi um projeto que desenvolvi para obter conhecimento em desenvolvimento.
            </p>
            <Link to="/post/create" className="btn">
                Criar post
            </Link>

        </div>
    )
}

export default About

