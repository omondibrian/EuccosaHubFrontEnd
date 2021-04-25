import React, { useRef, useState } from 'react'
import styles from './Inputbox.module.css'
import classNames from "classnames"



export const InputBox = (props) => {
    const isPassword = props.type === "password"
    const inputRef = useRef(null)
    const togglePassword = (e) => {
        e.preventDefault()
        if (inputRef.current.type === "password") {
            inputRef.current.type = "text"
        }
        else {
            inputRef.current.type = "password"
        }
    }
    const inputClassName = classNames(styles.input_text,
        isPassword ? styles.password_input : "")
    return <div>
        <div className={styles.input_field}>
            <input
                className={inputClassName}
                {...props}
                ref={inputRef}

            />
            {isPassword && <PasswordAddon toggle={togglePassword} />}
        </div>
    </div>
}
const PasswordAddon = ({ toggle }) => {
    const [state, setSate] = useState(false)

    return (
        // {eslint-disable-next-line}
        <div href="#" className={styles.password_addon} onClick={(e) => {
            toggle(e);
            setSate(!state)
        }}>
            <span className="material-icons">
                {state ? "visibility_off" : "visibility"}
            </span></div>)
}