import styles from './button.module.css'
import React from 'react'
export const Button = (props) => {
    return <button
         {...props}
        className={styles.btn_primary}>
        {props.name}
    </button>
}