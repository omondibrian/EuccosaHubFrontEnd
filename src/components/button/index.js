import styles from './button.module.css'
import React from 'react'
export const Button = ({ onclick, name, state }) => {
    return <button
        onClick={() => onclick(state)}
        className={styles.btn_primary}>
        {name}
    </button>
}