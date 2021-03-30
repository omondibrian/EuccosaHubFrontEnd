import React from 'react'
import styles from './Inputbox.module.css'

export const InputBox = ({ onChange, placeHolder, value, name, type = "text" }) => {
    return <div>
        <div className="input-field ">
            <input onChange={onChange}
                placeholder={placeHolder}
                id={name}
                type={type}
                name={name}
                className={styles.input_text}
                value={value}
            />
        </div>
    </div>
}