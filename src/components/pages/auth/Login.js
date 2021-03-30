import React, { useState } from 'react'
import styles from './Auth.module.css'
import { InputBox } from '../../inputBox'
import { Button } from '../../button'
import BackGround from '../../background'
import { Github, Google } from '../../vectors/Vectors'
import Footer from '../../footer/Footer'

function Login() {
    const [state, setState] = useState({ username: '', password: '' })
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    return (
        <BackGround>
            <div className={styles.auth}>
                <div className={styles.glass_form}>
                    <h2 className={styles.header}>Login</h2>
                    <form className={styles.auth__form}>
                        <InputBox onChange={handleChange} value={state.username}  placeHolder="username" name="username" />
                        <InputBox onChange={handleChange} value={state.password} placeHolder="password" name="password" type="password" />
                        <Button name="submit" />
                    </form>
                    <span className={styles.auth_alt}>OR</span>
                    <div className={styles.social_auth}>
                        <a href="/"  className={styles.social_auth__icon}><Google /></a>
                        <a href="/" className={styles.social_auth__icon}><Github /></a>
                    </div>
                </div>

            </div>
            <Footer />
        </BackGround>

    )
}

export default Login
