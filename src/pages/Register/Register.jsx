import styles from "./register.module.css"

import {useState, useEffect} from "react"

const Register = () => {
    return (
        <div>
            <h1>Cadastre-se para postar</h1>
            <p>Crie seu usuario e compartilhe suas histórias</p>
            <form>
                <label>
                    <span>Nome do usuário </span>
                        <input 
                        type="text"
                        name="displayname"
                        required
                        placeholder="Nome do usuário" 
                        />
                </label>
                <label>
                    <span>E-mail</span>
                        <input 
                        type="email"
                        name="email"
                        required
                        placeholder="E-mail do usuário" 
                        />
                </label>
                <label>
                    <span>Senha</span>
                        <input 
                        type="password"
                        name="confirmpassword"
                        required
                        placeholder="Insira sua senha" 
                        />
                </label>
                <label>
                    <span>Confirmação de senha</span>
                        <input 
                        type="password"
                        name="password"
                        required
                        placeholder="Confirme sua senha" 
                        />
                </label>
                <button className="btn">Cadastrar</button>
            </form>
        </div>
    )
}

export default Register
