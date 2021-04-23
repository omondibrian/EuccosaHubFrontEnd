import React from 'react'
import styles from './Inputbox.module.css'

export const InputBox = (props) => {
    return <div>
        <div className="input-field ">
            <input
                className={styles.input_text}
                {...props}

            />
        </div>
    </div>
}