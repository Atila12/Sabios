import { useAuthentication } from "../../hooks/useAuthentication"
import styles from "./register.module.css"

import { useState, useEffect } from "react"

const Register = () => {
    const [displayname, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const { createUser, error: AuthError, loading } = useAuthentication;

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");

        const user = {
            displayname,
            email,
            password,
        };

        if (password !== confirmpassword) {
            setError("As senhas precisam ser Iguais seu animal, confirma essa porra carae")
            return
        }

        console.log(user);
    };

    return (
        <div className={styles.register}>
            <h1>Cadastre-se</h1>
            <p>Crie seu usuario e compartilhe suas histórias</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome do usuário </span>
                    <input
                        type="text"
                        name="displayname"
                        required
                        placeholder="Nome do usuário"
                        value={displayname}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>
                <label>
                    <span>E-mail</span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="E-mail do usuário"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Senha</span>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Insira sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    <span>Confirmação de senha</span>
                    <input
                        type="password"
                        name="confirmpassword"
                        required
                        placeholder="Confirme sua senha"
                        value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>
                <button className="btn">Cadastrar</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
};

export default Register
