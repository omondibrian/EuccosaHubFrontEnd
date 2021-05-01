import React from 'react'
import style from "./index.module.css"
import { useSelector } from "react-redux"
import { getRegistrationState } from "../../../../state/slices/registration";
import { CSSTransition } from "react-transition-group"


function RegistrationComplete() {
    const state = useSelector(getRegistrationState);

    return (
        <CSSTransition classNames="fade" in={state.stage === 4} unmountOnExit timeout={200}>
            <div className={style.reg_complete}>
                {state.registrationReport ? <p className={style.info}>{state.registrationReport}</p> :
                    <p className={style.info}>We are processing your registration request, please wait.</p>}
            </div>
        </CSSTransition>
    )
}

export default RegistrationComplete

