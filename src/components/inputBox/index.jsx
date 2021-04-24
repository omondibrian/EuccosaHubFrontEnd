import React, { useRef } from 'react'
import styles from './Inputbox.module.css'

export const InputBox = (props) => {
    const isPassword = props.type === "password"
    const inputRef = useRef(null)
    const togglePassword = (e) => {
        e.preventDefault()
        if (inputRef.current.type === "password"){
            inputRef.current.type ="text"
        }
        else{
            inputRef.current.type ="password"
        }
    }
    
    return <div>
        <div className="input-field ">
            <input
                className={styles.input_text}
                {...props}
                ref={inputRef}

            />
            {isPassword && <a href="#" onClick={togglePassword}>
                <span class="material-icons">
                {inputRef.current.type ==="password"? "visibility":"visibility_off" }
            </span></a>}
        </div>
    </div>
}
const VisilityToggle = (ele)=>{
    return 
}